import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import { BsChevronDown } from "react-icons/bs";

interface Props {
    selectedPlatformId?: number;
    onPlatformSelect: (selectedPlatformId: number) => void;
}

const PlatformSelector = ({ selectedPlatformId, onPlatformSelect }: Props) => {
    const { data: platforms, error, isLoading } = usePlatforms();

    if (error) return null;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {platforms?.results.find(
                    (platform) => platform.id === selectedPlatformId
                )?.name || "Platforms"}
            </MenuButton>
            <MenuList>
                {platforms?.results.map((platform) => (
                    <MenuItem
                        onClick={() => onPlatformSelect(platform.id)}
                        key={platform.id}
                    >
                        {platform.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;
