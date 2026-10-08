import axios from "axios";
import type { CompanySearch } from "../company";

interface SearchResponse {
  data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
  try {
    const data = await axios.get<SearchResponse>(
      `https://financialmodelingprep.com/stable/search-symbol?query=${query}&limit=10&exchange=NASDAQ&apikey=${import.meta.env.VITE_API_KEY}`
    );
    return data;
  }
  catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      console.log("error response body: ", error.response?.data);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error has occurred.";
    }
  }
};
