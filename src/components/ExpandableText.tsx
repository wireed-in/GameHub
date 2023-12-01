import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
    children: string;
}

const ExpandableText = ({ children }: Props) => {
    const limit = 300;
    if (!children) return null;
    if (children.length <= limit) return <Text>{children}</Text>;

    const [expanded, setExpanded] = useState(false);

    const displayText = expanded
        ? children
        : children.substring(0, limit) + "...";

    return (
        <Text>
            {displayText}
            <Button
                marginLeft={2}
                onClick={() => setExpanded(!expanded)}
                size={"xs"}
                fontWeight={"bold"}
                colorScheme={"yellow"}
            >
                {expanded ? "Display less" : "Display more"}
            </Button>
        </Text>
    );
};

export default ExpandableText;
