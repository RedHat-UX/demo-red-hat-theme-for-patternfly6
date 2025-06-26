import { FC, useState } from "react";
import {
  Card,
  CardTitle,
  CardBody,
  CardHeader,
  Checkbox,
  Dropdown,
  MenuToggle,
  Brand,
  DropdownList,
  CardFooter,
  DropdownItem,
  Divider,
} from "@patternfly/react-core";
import pfLogo from "../../assets/PF-HorizontalLogo-Color.svg";
import EllipsisVIcon from "@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon";

const CardImageActions: FC = () => {
  const [hasNoOffset, setHasNoOffset] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOffset = (checked: boolean) => setHasNoOffset(checked);

  const onClick = (checked: boolean) => {
    setIsChecked(checked);
  };

  const onSelect = () => {
    setIsOpen(!isOpen);
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
    <div style={{ margin: "0px 100px" }}>
      <Checkbox
        label="Actions hasNoOffset"
        isChecked={hasNoOffset}
        onChange={(_event, checked) => toggleOffset(checked)}
        aria-label="Remove actions offset"
        id="toggle-actions-offset"
      />
      <div style={{ margin: "15px" }}>
        <Card>
          <CardHeader actions={{ actions: headerActions, hasNoOffset }}>
            <Brand
              src={pfLogo}
              alt="PatternFly logo"
              style={{ width: "300px" }}
            />
          </CardHeader>
          <CardTitle>Title</CardTitle>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default CardImageActions;
