import React, { useState } from "react";
import BasicInfoForm from "./components/BasicInfoForm";
import QuoteOverviewScreen from "./components/QuoteOverviewScreen";
import { useSelector } from "react-redux";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import InnerHTML from "dangerously-set-html-content";

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

  const email = "scott.mulderig@nana.io";
  const firstName = "Scott";
  const lastName = "Mudlerig";
  const shortId = "123ABC";

  const html = `
    <script
        src="https://solve-widget.forethought.ai/embed.js"
        type="application/javascript"
        data-api-key="8e9895f0-cad2-4e5f-bd0e-7290e96a613f"
        data-ft-Email="${email}"
        data-ft-First-Name="${firstName}"
        data-ft-First-Last="${lastName}"
        data-ft-JobID="${shortId}"
        data-ft-User-Type="customer"
        data-ft-workflow-tag="Appliance_owner"
      ></script>
  `;
  const [show, setShow] = useState(false);

  return (
    <div>
      <div>
        <TitleContainer>
          <img alt="sure logo" src="sure/images/sure_white.svg" />
          <TaglineContainer>
            <h2>
              Insure your Rocket Today{" "}
              <img width="40" alt="rocket" src="sure/images/rocket.svg" />
              <button
                onClick={() => {
                  setShow(!show);
                }}
              >
                Show Forethought Widget!
              </button>
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
      {show && <InnerHTML html={html} />}
    </div>
  );
};

export default App;
