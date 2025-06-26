import React from "react";
import { Card, CardTitle, CardBody,CardFooter } from "@patternfly/react-core";

const CardDefault: React.FC = () => (
  <div style={{ margin: "100px 100px 50px" }}>
    <Card>
      <CardTitle>Title</CardTitle>
      <CardBody>Body</CardBody>
      <CardFooter>Footer</CardFooter>
    </Card>
  </div>
);

export default CardDefault;
