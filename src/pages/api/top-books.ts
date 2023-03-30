import { api } from "@/config/api.config";
import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { category = "programming" } = request.query;

  try {
    const {
      data: { choices },
    } = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `List 10 ${category} books:`,
      temperature: 0.5,
      max_tokens: 200,
      top_p: 1,
      frequency_penalty: 0.52,
      presence_penalty: 0.5,
      stop: ["11."],
    });

    const topTenBooks =
      choices[0].text
        ?.split("\n")
        .filter(Boolean)
        .map((book) => book.replace(/(\d|\d\d)\./, "").trim()) || [];

    const books = [];
    for await (const book of topTenBooks) {
      const { data } = await api.get(`${process.env.GOOGLE_BASE_URL}/volumes`, {
        params: {
          q: book,
          maxResults: 1,
          langRestrict: "en",
          key: process.env.GOOGLE_API_TOKEN,
        },
      });

      books.push(data.items[0]);
    }

    response.status(200).json({ books });
  } catch (exception) {
    response.status(403).json({ error: { message: "an error occurred" } });
  }
}
