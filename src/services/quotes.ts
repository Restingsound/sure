import axios from "axios";
import { QuoteObject, RatingObject } from "../types";

const baseUrl = "https://fed-challenge-api.sure.now.sh/api/v1/quotes";

const createNew = async (content: RatingObject) => {
  const response = await axios.post(baseUrl, content);
  return response.data;
};

const update = async (newObject: QuoteObject) => {
  const response = await axios.put(
    `${baseUrl}/${newObject.quote.quoteId}`,
    newObject
  );
  return response.data;
};

const exportedObject = { createNew, update };

export default exportedObject;
