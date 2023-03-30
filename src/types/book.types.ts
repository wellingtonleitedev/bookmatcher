export interface IBookResponse {
  id: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: string[];
    publishedDate: Date;
    description: string;
    pageCount: number;
    imageLinks: {
      thumbnail: string;
    };
  };
}

export interface IBook {
  id: string;
  title: string;
  subtitle: string;
  authors: string[];
  publishedDate: Date;
  description: string;
  pages: number;
  thumbnail?: string;
}
