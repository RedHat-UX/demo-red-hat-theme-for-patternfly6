import React, {FC, useState} from "react";
import {
  Card,
  CardHeader,
  Checkbox,
  CardBody,
  Dropdown,
  MenuToggle,
  DropdownList,
  DropdownItem,
  Divider,

} from "@patternfly/react-core";
import EllipsisVIcon from "@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon";

const CardHeaderOnlyActions: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

  const onSelect = () => {
    setIsOpen(!isOpen);
  };

  const onClick = (checked: boolean) => {
    setIsChecked(checked);
  };


  const dropdownExpItems = (
      <>
        <DropdownItem key="action">Action</DropdownItem>
        {[]}
        <DropdownItem
          key="link"
          to="#"
          onClick={(event) => event.preventDefault()}
        >
          Link
        </DropdownItem>
        <DropdownItem key="disabled action" isDisabled>
          Disabled Action
        </DropdownItem>
        <DropdownItem
          key="disabled link"
          isDisabled
          to="#"
          onClick={(event) => event.preventDefault()}
        >
          Disabled Link
        </DropdownItem>
        <Divider component="li" key="separator" />
        <DropdownItem key="separated action">Separated Action</DropdownItem>
        <DropdownItem
          key="separated link"
          to="#"
          onClick={(event) => event.preventDefault()}
        >
          Separated Link
        </DropdownItem>
      </>
    );

  const headerActions = (
    <>
      <Dropdown
        onSelect={onSelect}
        toggle={(toggleRef) => (
          <MenuToggle
            ref={toggleRef}
            isExpanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            variant="plain"
            aria-label="Card expandable example kebab toggle"
            icon={<EllipsisVIcon aria-hidden="true" />}
          />
        )}
        isOpen={isOpen}
        onOpenChange={(isOpen) => setIsOpen(isOpen)}
      >
        <DropdownList>{dropdownExpItems}</DropdownList>
      </Dropdown>
      <Checkbox
        isChecked={isChecked}
        onChange={(_event, checked) => onClick(checked)}
        aria-label="card checkbox example"
        id="check-4"
        name="check4"
      />
    </>
  );

  return (
    <div style={{ margin: "20px 100px" }}>
      <Card>
        <CardHeader actions={{ actions: headerActions }} />
        <CardBody>
          This is the card body. There are only actions in the card head.
        </CardBody>
      </Card>
    </div>
  );
};

export default CardHeaderOnlyActions;
