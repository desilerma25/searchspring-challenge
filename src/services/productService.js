const baseURL = "http://api.searchspring.net/api/search/search.json";

export async function fetchProductData(searchQuery, pageNum) {
  try {
    const response = await fetch(
      baseURL +
        "?" +
        new URLSearchParams({
          page: pageNum,
          q: searchQuery,
          resultsFormat: "native",
          siteId: "scmq7n",
        })
    );
    const productResult = await response.json();
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return productResult;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error;
  }
}
