import axios, { AxiosError } from "axios";
import { type TagsResponse } from "./use-tags";

const API_URL =
  "https://api.stackexchange.com/2.2/tags?order=desc&sort=popular&site=stackoverflow";

export const getTags = async () => {
  try {
    const response: TagsResponse = (await axios.get(API_URL)).data;

    return response;
  } catch (error) {
    if (!(error instanceof AxiosError)) {
      throw error;
    }

    if (error.status === 401) {
      return null;
    }

    throw error;
  }
};
