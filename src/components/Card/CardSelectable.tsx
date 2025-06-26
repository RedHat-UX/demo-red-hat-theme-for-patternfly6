import React, { FC } from "react";
import { Card, CardTitle, CardHeader, CardBody } from "@patternfly/react-core";

const CardSelectable: FC = () => {
  /*Selectable Card Variables*/
  const [isChecked1, setIsChecked1] = React.useState(false);
  const [isChecked2, setIsChecked2] = React.useState(false);
  const [isChecked3, setIsChecked3] = React.useState(false);
  const id1 = "selectable-card-input-1";
  const id2 = "selectable-card-input-2";
  const id3 = "selectable-card-input-3";

  const onChange = (event: any, checked: boolean) => {
    const name = event.currentTarget.name;
    switch (name) {
      case id1:
        setIsChecked1(checked);
        break;
      case id2:
        setIsChecked2(checked);
        break;
      case id3:
        setIsChecked3(checked);
        break;
    }
  };

  return (
    <div style={{ margin: "20px 100px" }}>
      <Card id="selectable-card-example-1" isSelectable isSelected={isChecked1}>
        <CardHeader
          selectableActions={{
            selectableActionId: id1,
            selectableActionAriaLabelledby: "selectable-card-example-1",
            name: id1,
            onChange,
            hasNoOffset: true,
          }}
        >
          <CardTitle>First card</CardTitle>
        </CardHeader>
        <CardBody>This card is selectable.</CardBody>
      </Card>
      <Card id="selectable-card-example-2" isSelectable isSelected={isChecked2}>
        <CardHeader
          selectableActions={{
            selectableActionId: id2,
            selectableActionAriaLabelledby: "selectable-card-example-2",
            name: id2,
            onChange,
            hasNoOffset: true,
          }}
        >
          <CardTitle>Second card</CardTitle>
        </CardHeader>
        <CardBody>This card is selectable.</CardBody>
      </Card>
      <Card
        id="selectable-card-example-3"
        isSelectable
        isDisabled
        isSelected={isChecked3}
      >
        <CardHeader
          selectableActions={{
            selectableActionId: id3,
            selectableActionAriaLabelledby: "selectable-card-example-3",
            name: id3,
            onChange,
          }}
        >
          <CardTitle>Third card</CardTitle>
        </CardHeader>
        <CardBody>This card is selectable but disabled.</CardBody>
      </Card>
    </div>
  );
};

export default CardSelectable;
