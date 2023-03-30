import { useGetBooks } from "@/hooks";

describe("useGetBooks hook tests", () => {
  const { getBooks } = useGetBooks();
  it("should be able to search for a book", () => {
    expect(getBooks).toHaveBeenCalled();
  });
});
