import React from "react";
import BasicInfoForm from "./components/BasicInfoForm";
import QuoteOverviewScreen from "./components/QuoteOverviewScreen";
import { useSelector } from "react-redux";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";

const App = () => {
  const quote = useSelector<any, any>((state) => state.quote);

  const TitleContainer = styled("span")({
    display: "block",
    margin: "auto",
    paddingTop: 30,
    paddingLeft: 30,
    color: "white",
    fontSize: 30,
  });

  const TaglineContainer = styled("span")({
    display: "block",
    margin: "auto",
    paddingLeft: 80,
    color: "white",
    fontSize: 30,
  });

  return (
    <div>
      <TitleContainer>
        <img alt="sure logo" src="sure/images/sure_white.svg" />
        <TaglineContainer>
          <h2>
            Insure your Rocket with Sure{" "}
            <img width="40" alt="rocket" src="sure/images/rocket.svg" />
          </h2>
        </TaglineContainer>
      </TitleContainer>
      <Container
        disableGutters
        sx={{
          backgroundColor: "white",
          fontFamily: "arial",
          textAlign: "center",
          padding: 1,
          height: "100vh",
        }}
      >
        {!quote || !quote.quote ? <BasicInfoForm /> : <QuoteOverviewScreen />}
      </Container>
    </div>
  );
};

export default App;
