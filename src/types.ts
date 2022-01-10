interface RatingAddress {
  line_1: string;
  line_2: string;
  city: string;
  region: string;
  postal: string;
}

export interface RatingObject {
  first_name: string;
  last_name: string;
  address: RatingAddress;
}

interface Quote {
  quoteId: string;
  rating_address: RatingAddress;
  policy_holder: {
    first_name: string;
    last_name: string;
  };
  variable_selections: {
    deductible: number;
    asteroid_collision: number;
  };
}

export interface QuoteObject {
  quote: Quote;
}

interface Variable {
  title: string;
  description: string;
  values: Array<number>;
}

interface Result extends Quote {
  variable_options: {
    deductible: Variable;
    asteroid_collision: Variable;
  };
  premium: number;
}

export interface ResultObject {
  quote: Result;
}
