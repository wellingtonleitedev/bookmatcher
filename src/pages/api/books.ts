import type { NextApiRequest, NextApiResponse } from "next";
import { api } from "@/config/api.config";
import { IBook } from "@/types/book.types";

interface ResponseData {
  books: IBook[];
}

interface ResponseError {
  error: {
    message: string;
  };
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<ResponseData | ResponseError>
) {
  try {
    const { data } = await api.get(`${process.env.GOOGLE_BASE_URL}/volumes`, {
      params: {
        q: request.query.search,
        key: process.env.GOOGLE_API_TOKEN,
      },
    });

    response.status(200).json({ books: data.items });
  } catch (exception) {
    response.status(403).json({ error: { message: "an error occurred" } });
  }
}
