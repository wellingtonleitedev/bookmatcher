import { useGetTopBooks } from "@/hooks";

describe("useGetTopBooks hook tests", () => {
  const { getBooks } = useGetTopBooks();
  it("should be able to search for a book", () => {
    expect(getBooks).toHaveBeenCalled();
  });
});
