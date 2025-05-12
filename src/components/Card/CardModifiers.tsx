import React, { FC, useState} from 'react';
import {
  Card,
  CardTitle,
  CardBody,
  CardFooter,
  Checkbox
} from '@patternfly/react-core';

const CardModifiers: FC = () => {
    const mods = ["isCompact", "isLarge", "isFullHeight", "isPlain"];
    const [modifiers, setModifiers] = useState<{ [key: string]: boolean }>({});
    
    return (
        <div>
        <div style={{ margin: "8px 100px" }}>
        <div style={{ marginBottom: "12px" }}>
          {mods.map((mod) => (
            <Checkbox
              id={mod}
              key={mod}
              label={mod}
              isChecked={modifiers[mod] || false}
              onChange={(_event, checked) => {
                setModifiers((prev) => ({ ...prev, [mod]: checked }));
              }}
            />
          ))}
        </div>
        <div style={{ height: "15rem" }}>
          <Card {...modifiers}>
            <CardTitle>Modified Card</CardTitle>
            <CardBody>Dynamic styles applied</CardBody>
            <CardFooter>Footer</CardFooter>
          </Card>
        </div>
      </div>
        </div>
    )

}

export default CardModifiers;
