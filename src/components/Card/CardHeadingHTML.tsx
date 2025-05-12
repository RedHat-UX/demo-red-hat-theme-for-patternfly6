import React from 'react';
import {
  Card,
  CardTitle,
  CardBody,
  CardFooter
} from '@patternfly/react-core';

const CardHeadingHTML: React.FC = () => (
  <div style={{ margin: "20px 100px" }}>
          <Card>
            <CardTitle component="h4">Title within an {"<h4>"} element</CardTitle>
            <CardBody>Body</CardBody>
            <CardFooter>Footer</CardFooter>
          </Card>
        </div>
);

export default CardHeadingHTML;
