import React, {FC} from 'react';
import {
  Card,
  CardTitle,
  CardBody,
  CardFooter
} from '@patternfly/react-core';

const CardMultipleBodies: FC = () => (
 <div style={{ margin: "20px 100px" }}>
         <Card>
           <CardTitle>Title</CardTitle>
           <CardBody>Body</CardBody>
           <CardBody>Body</CardBody>
           <CardBody>Body</CardBody>
           <CardFooter>Footer</CardFooter>
         </Card>
       </div>
);

export default CardMultipleBodies;
