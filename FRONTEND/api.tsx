
export interface SearchResponse {
  data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
  try {
    const response = await fetch(
      `https://financialmodelingprep.com/api/v3/search?query=${encodeURIComponent(query)}&limit=10&exchange=NASDAQ&apikey=${process.env.REACT_APP_API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return (await response.json()) as SearchResponse;
  } catch (error) {
    const message = error instanceof Error
      ? error.message
      : "An unexpected error has occurred.";
    console.log("error message: ", message);
    return message;
  }
};
