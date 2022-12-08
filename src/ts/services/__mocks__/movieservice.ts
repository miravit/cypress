import { IOmdbResponse } from "../../models/IOmdbResponse";

export const mockData: IOmdbResponse = {
  Search: [
    {
      Title: "Miras film",
      imdbID: "12345",
      Type: "text",
      Poster: "poster",
      Year: "1997",
    },
    {
      Title: "en julfilm",
      imdbID: "67891",
      Type: "text",
      Poster: "poster",
      Year: "1987",
    },
    {
      Title: "Harry Potter",
      imdbID: "23456",
      Type: "text",
      Poster: "poster",
      Year: "2001",
    },
  ],
};
