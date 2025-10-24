'use server';
/**
 * @fileOverview A web browsing agent that summarizes a URL's content.
 *
 * - browseUrl - A function that takes a URL and returns a summary.
 * - BrowseUrlInput - The input type for the browseUrl function.
 * - BrowseUrlOutput - The return type for the browseUrl function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import * as cheerio from 'cheerio';

// Define Zod schemas for input and output
const BrowseUrlInputSchema = z.object({
  url: z.string().url().describe('The URL to browse and summarize.'),
});
export type BrowseUrlInput = z.infer<typeof BrowseUrlInputSchema>;

const BrowseUrlOutputSchema = z.object({
  summary: z.string().describe('The summary of the web page content.'),
});
export type BrowseUrlOutput = z.infer<typeof BrowseUrlOutputSchema>;

// Define a tool for fetching web content
const fetchWebPageTool = ai.defineTool(
  {
    name: 'fetchWebPage',
    description: 'Fetches the text content of a given URL.',
    inputSchema: z.object({ url: z.string().url() }),
    outputSchema: z.string(),
  },
  async ({ url }) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const html = await response.text();
      // Use cheerio to parse HTML and extract text
      const $ = cheerio.load(html);
      // Remove script and style elements
      $('script, style, nav, footer, aside').remove();
      return $('body').text().replace(/\s\s+/g, ' ').trim();
    } catch (error: any) {
      return `Failed to fetch content from ${url}. Error: ${error.message}`;
    }
  }
);


// Define the prompt for summarization
const summarizePrompt = ai.definePrompt({
  name: 'summarizeWebPagePrompt',
  input: { schema: z.object({ url: z.string() }) },
  output: { schema: BrowseUrlOutputSchema },
  prompt: `Please provide a concise summary of the content found at the URL: {{{url}}}. Focus on the main points and key information.`,
  tools: [fetchWebPageTool],
});


// Define the main flow
const browseUrlFlow = ai.defineFlow(
  {
    name: 'browseUrlFlow',
    inputSchema: BrowseUrlInputSchema,
    outputSchema: BrowseUrlOutputSchema,
  },
  async (input) => {
    const { output } = await summarizePrompt(input);
    if (!output) {
      throw new Error('The model did not return a summary.');
    }
    return output;
  }
);


// Exported wrapper function to be called from the client
export async function browseUrl(input: BrowseUrlInput): Promise<BrowseUrlOutput> {
  return await browseUrlFlow(input);
}
