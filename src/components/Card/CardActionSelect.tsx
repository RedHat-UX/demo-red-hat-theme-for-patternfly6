import { FC } from "react";
import { Card, CardTitle, CardHeader, CardBody } from "@patternfly/react-core";

const CardWithActionSelect: FC = () => {

  return (
    <div style={{ margin: "20px 100px" }}>
<div
          style={{
            marginTop: "15px",
          }}
        >
          <Card isClickable>
            <CardHeader
              selectableActions={{
                onClickAction: () =>
                  console.log(`First card in actionable example clicked`),
                selectableActionAriaLabelledby:
                  "clickable-card-example-title-1",
              }}
            >
              <CardTitle id="clickable-card-example-title-1">
                First card in the actionable example
              </CardTitle>
            </CardHeader>
            <CardBody>This card performs an action on click.</CardBody>
          </Card>
          <Card isClickable>
            <CardHeader
              selectableActions={{
                to: "#",
                selectableActionAriaLabelledby:
                  "clickable-card-example-title-2",
              }}
            >
              <CardTitle id="clickable-card-example-title-2">
                Second card in the actionable example
              </CardTitle>
            </CardHeader>
            <CardBody>This card can navigate to a link on click.</CardBody>
          </Card>
          <Card isClickable isDisabled>
            <CardHeader
              selectableActions={{
                onClickAction: () =>
                  console.log(`Third card in actionable example clicked`),
                selectableActionAriaLabelledby:
                  "clickable-card-example-title-3",
              }}
            >
              <CardTitle id="clickable-card-example-title-3">
                Third card in the actionable example
              </CardTitle>
            </CardHeader>
            <CardBody>This card is clickable but disabled.</CardBody>
          </Card>
        </div>
    </div>
  );
};

export default CardWithActionSelect;
