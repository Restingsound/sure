import quoteService from "../services/quotes";
import { QuoteObject, RatingObject, ResultObject } from "../types";

const reducer = (state = [], action: any) => {
  switch (action.type) {
    case "UPDATE_QUOTE":
      return action.data;
    default:
      return state;
  }
};

export const updateQuote = (changedQuote: QuoteObject) => {
  return async (dispatch: any) => {
    const updatedQuote: ResultObject = await quoteService.update(changedQuote);
    dispatch({
      type: "UPDATE_QUOTE",
      data: updatedQuote,
    });
  };
};

export const createQuote = (content: RatingObject) => {
  return async (dispatch: any) => {
    const newQuote: ResultObject = await quoteService.createNew(content);
    dispatch({
      type: "UPDATE_QUOTE",
      data: newQuote,
    });
  };
};

export default reducer;
