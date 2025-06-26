import React, { FC } from "react";
import { Card, CardTitle, CardHeader, CardBody } from "@patternfly/react-core";

const CardSelectable: FC = () => {
  /**Single Selectable Card Variables */
  const [isSingleChecked, setIsSingleChecked] = React.useState("");
  const idSingle1 = "single-selectable-card-input-1";
  const idSingle2 = "single-selectable-card-input-2";
  const idSingle3 = "single-selectable-card-input-3";
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setIsSingleChecked(event.currentTarget.id);
  };
  return (
    <div style={{ margin: "20px 100px" }}>
      <Card
        id="single-selectable-card-example-1"
        isSelectable
        isSelected={isSingleChecked === idSingle1}
      >
        <CardHeader
          selectableActions={{
            selectableActionId: idSingle1,
            selectableActionAriaLabelledby: "single-selectable-card-example-1",
            name: "single-selectable-card-example",
            variant: "single",
            onChange,
            hasNoOffset: true,
          }}
        >
          <CardTitle>First card</CardTitle>
        </CardHeader>
        <CardBody>This card is single selectable.</CardBody>
      </Card>
      <Card
        id="single-selectable-card-example-2"
        isSelectable
        isSelected={isSingleChecked === idSingle2}
      >
        <CardHeader
          selectableActions={{
            selectableActionId: idSingle2,
            selectableActionAriaLabelledby: "single-selectable-card-example-2",
            name: "single-selectable-card-example",
            variant: "single",
            onChange,
            hasNoOffset: true,
          }}
        >
          <CardTitle>Second card</CardTitle>
        </CardHeader>
        <CardBody>This card is single selectable.</CardBody>
      </Card>
      <Card
        id="single-selectable-card-example-3"
        isSelectable
        isDisabled
        isSelected={isSingleChecked === idSingle3}
      >
        <CardHeader
          selectableActions={{
            selectableActionId: idSingle3,
            selectableActionAriaLabelledby: "single-selectable-card-example-3",
            name: "single-selectable-card-example",
            variant: "single",
            onChange,
            hasNoOffset: true,
          }}
        >
          <CardTitle>Third card</CardTitle>
        </CardHeader>
        <CardBody>This card is single selectable but disabled.</CardBody>
      </Card>
    </div>
  );
};

export default CardSelectable;
