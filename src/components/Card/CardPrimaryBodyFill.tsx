import React from "react";
import { Card, CardTitle, CardBody, CardFooter } from "@patternfly/react-core";

const CardPrimaryBodyFill: React.FC = () => {
  return (
    <div style={{ margin: "20px 100px" }}>
      <Card
        style={{
          minHeight: "30em",
        }}
      >
        <CardTitle>Title</CardTitle>
        <CardBody isFilled={false}>Body pf-m-no-fill</CardBody>
        <CardBody isFilled={false}>Body pf-m-no-fill</CardBody>
        <CardBody>Body</CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    </div>
  );
};

export default CardPrimaryBodyFill;
