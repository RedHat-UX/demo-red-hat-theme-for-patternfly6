import React from "react";
import { Card, CardTitle, CardBody } from "@patternfly/react-core";

const CardDefault: React.FC = () => (
  <div style={{ margin: "100px 100px 50px" }}>
    <Card>
      <CardTitle>Default Card</CardTitle>
      <CardBody>This is a simple card with a title and body.</CardBody>
    </Card>
  </div>
);

export default CardDefault;
