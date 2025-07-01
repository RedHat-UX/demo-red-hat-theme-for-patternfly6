import { Button, Flex } from "@patternfly/react-core";
import TimesIcon from "@patternfly/react-icons/dist/esm/icons/times-icon";
import PlusCircleIcon from "@patternfly/react-icons/dist/esm/icons/plus-circle-icon";
import ExternalLinkSquareAltIcon from "@patternfly/react-icons/dist/esm/icons/external-link-square-alt-icon";
import CopyIcon from "@patternfly/react-icons/dist/esm/icons/copy-icon";
import BellIcon from "@patternfly/react-icons/dist/esm/icons/bell-icon";
import ArrowRightIcon from '@patternfly/react-icons/dist/esm/icons/arrow-right-icon';


const PfButton = () => (
    <>
        <Flex
            columnGap={{
                default: "columnGapSm",
            }}
            style={{ marginTop: 20 }}
        >
            <Button variant="primary" ouiaId="Primary">
                Primary
            </Button>
            <Button variant="secondary" ouiaId="Secondary">
                Secondary
            </Button>
            <Button variant="secondary" ouiaId="DangerSecondary" isDanger>
                Danger Secondary
            </Button>
            <Button variant="tertiary" ouiaId="Tertiary">
                Tertiary
            </Button>
            <Button variant="danger" ouiaId="Danger">
                Danger
            </Button>
            <Button variant="warning" ouiaId="Warning">
                Warning
            </Button>
        </Flex>
        <br />
        <Flex
            columnGap={{
                default: "columnGapSm",
            }}
        >
            <Button variant="link" icon={<PlusCircleIcon />}>
                Link
            </Button>
            <Button
                variant="link"
                icon={<ExternalLinkSquareAltIcon />}
                iconPosition="end"
            >
                Link
            </Button>
            <Button variant="link" isInline>
                Inline link
            </Button>
            <Button variant="link" isDanger>
                Danger link
            </Button>
            <Button variant="plain" aria-label="Action" icon={<TimesIcon />} />
        </Flex>
        <br />
        <Flex
            columnGap={{
                default: "columnGapSm",
            }}
        >
            <Button variant="control">Control</Button>
            <Button variant="control" aria-label="Copy" icon={<CopyIcon />} />
        </Flex>
        <br />
        <Flex
            columnGap={{
                default: "columnGapSm",
            }}
        >
            <Button variant="stateful" icon={<BellIcon />} state="read">
                Stateful read
            </Button>
            <Button variant="stateful" icon={<BellIcon />} state="unread">
                Stateful unread
            </Button>
            <Button variant="stateful" icon={<BellIcon />} state="attention">
                Stateful attention
            </Button>
        </Flex>

        {/* Disabled Buttons */}
        <Flex columnGap={{ default: 'columnGapSm' }} style={{ marginTop: 20 }}>
            <Button isDisabled>Primary</Button>
            <Button variant="secondary" isDisabled>
                Secondary
            </Button>
            <Button variant="secondary" isDanger isDisabled>
                Danger secondary
            </Button>
            <Button isDisabled variant="tertiary">
                Tertiary
            </Button>
            <Button isDisabled variant="danger">
                Danger
            </Button>
            <Button isDisabled variant="warning">
                Warning
            </Button>
        </Flex>
        <br />
        <Flex columnGap={{ default: 'columnGapSm' }}>
            <Button isDisabled variant="link" icon={<PlusCircleIcon />}>
                Link
            </Button>
            <Button isDisabled variant="link" isInline>
                Inline link
            </Button>
            <Button variant="link" isDanger isDisabled>
                Danger link
            </Button>
            <Button isDisabled variant="plain" aria-label="Action" icon={<TimesIcon />} />
        </Flex>
        <br />
        <Flex columnGap={{ default: 'columnGapSm' }}>
            <Button isDisabled variant="control">
                Control
            </Button>
            <Button isDisabled variant="control" aria-label="Copy" icon={<CopyIcon />} />
        </Flex>

        {/* Call to action */}
        <Flex columnGap={{ default: 'columnGapSm' }} style={{ marginTop: 20 }}>
            <Button variant="primary" size="lg">
                Call to action
            </Button>
            <Button variant="secondary" size="lg">
                Call to action
            </Button>
            <Button variant="tertiary" size="lg">
                Call to action
            </Button>
            <Button variant="link" size="lg" icon={<ArrowRightIcon />} iconPosition="end">
                Call to action
            </Button>
        </Flex>
    </>
);

export default PfButton