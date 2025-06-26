import { FC, useState } from "react";
import {
  Card,
  CardTitle,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
  CardExpandableContent,
  Dropdown,
  MenuToggle,
  DropdownList,
  DropdownItem,
  Divider,
} from "@patternfly/react-core";
import EllipsisVIcon from "@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon";

const CardExpandable: FC = () => {
  //expandable cards
  const [isExpanded, setIsExpanded] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isToggleRightAligned, setIsToggleRightAligned] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const onSelect = () => {
    setIsOpen(!isOpen);
  };

  const onClick = (checked: boolean) => {
    setIsChecked(checked);
  };

  const onExpand = (_event: any, id: string) => {
    console.log(id);
    setIsExpanded(!isExpanded);
  };

  const onRightAlign = () => {
    setIsToggleRightAligned(!isToggleRightAligned);
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
      <div
        style={{
          marginBottom: "12px",
        }}
      >
        <Checkbox
          id={"isToggleRightAligned-1"}
          key={"isToggleRightAligned"}
          label={"isToggleRightAligned"}
          isChecked={isToggleRightAligned}
          onChange={onRightAlign}
        />
      </div>
      <Card id="expandable-card" isExpanded={isExpanded}>
        <CardHeader
          actions={{
            actions: headerActions,
          }}
          onExpand={onExpand}
          isToggleRightAligned={isToggleRightAligned}
          toggleButtonProps={{
            id: "toggle-button1",
            "aria-label": "Details",
            "aria-labelledby": "expandable-card-title toggle-button1",
            "aria-expanded": isExpanded,
          }}
        >
          <CardTitle id="expandable-card-title">Title</CardTitle>
        </CardHeader>
        <CardExpandableContent>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </CardExpandableContent>
      </Card>
    </div>
  );
};

export default CardExpandable;
