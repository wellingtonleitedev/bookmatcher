import type { NextApiRequest, NextApiResponse } from "next";
import { api } from "@/app/config/api.config";
import { IBook } from "@/app/types/book.types";

interface ResponseData {
  data: IBook[];
};

interface ResponseError {
  error: {
    message: string;
  };
};

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<ResponseData | ResponseError>
) {
  try {
    const { data } = await api.get(
      "volumes",
      {
        params: {
          q: request.query.search
        },
      }
    );

    response.status(200).json({ data: data.items });
  } catch (exception) {
    response.status(403).json({ error: { message: "an error occurred" } });
  }
}
