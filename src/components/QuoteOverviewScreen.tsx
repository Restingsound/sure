import { Box, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateQuote } from "../reducers/quoteReducer";

const QuoteOverviewScreen = () => {
  const quote = useSelector<any, any>((state) => state.quote);
  const dispatch = useDispatch();
  const [deductible, setDeductible] = useState(
    quote.quote.variable_selections.deductible
  );
  const [asteroidCollision, setAsteroidCollision] = useState(
    quote.quote.variable_selections.asteroid_collision
  );

  const handleDeductibleChange = async (event: SelectChangeEvent) => {
    setDeductible(parseInt(event.target.value as string, 10));
    const content = {
      quote: {
        quoteId: quote.quote.quoteId,
        rating_address: quote.quote.rating_address,
        policy_holder: quote.quote.policy_holder,
        variable_selections: {
          deductible: parseInt(event.target.value),
          asteroid_collision:
            quote.quote.variable_selections.asteroid_collision,
        },
      },
    };
    dispatch(updateQuote(content));
  };

  const handleAsteroidCollisionChange = async (event: SelectChangeEvent) => {
    setAsteroidCollision(parseInt(event.target.value as string, 10));
    const content = {
      quote: {
        quoteId: quote.quote.quoteId,
        rating_address: quote.quote.rating_address,
        policy_holder: quote.quote.policy_holder,
        variable_selections: {
          deductible: quote.quote.variable_selections.deductible,
          asteroid_collision: parseInt(event.target.value),
        },
      },
    };
    dispatch(updateQuote(content));
  };

  return (
    <div>
      <h2>Quote Overview</h2>
      <p>Select your coverage limits.</p>

      <div>
        <Box>
          Deductible
          <Select
            sx={{
              m: 1,
              minWidth: 120,
            }}
            labelId="deductible"
            id="deductible"
            size="small"
            value={deductible}
            onChange={handleDeductibleChange}
          >
            {quote.quote.variable_options.deductible.values.map(
              (value: string, i: number) => (
                <MenuItem key={i} value={value}>
                  ${value}
                </MenuItem>
              )
            )}
          </Select>
          <br />
          Asteroid Collision
          <Select
            sx={{
              m: 1,
              minWidth: 120,
            }}
            labelId="asteroid_collision"
            id="asteroid_collision"
            size="small"
            value={asteroidCollision}
            onChange={handleAsteroidCollisionChange}
          >
            {quote.quote.variable_options.asteroid_collision.values.map(
              (value: string, i: number) => (
                <MenuItem key={i} value={value}>
                  ${value}
                </MenuItem>
              )
            )}
          </Select>
          <br />
          <Box
            sx={{
              m: 1,
              minWidth: 120,
            }}
          >
            Annual Premium: ${quote.quote.premium}
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default QuoteOverviewScreen;
