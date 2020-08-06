import React from "react";
import { Container } from "../Common";
import Motion from "../Motion";
import Gestures from "../Gestures/Gestures";

const Application = () => {
  return (
    <>
      <Container>
        <Motion />
        <hr />
        <Gestures />
      </Container>
    </>
  );
};

export default Application;
