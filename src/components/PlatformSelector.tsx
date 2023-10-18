import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import { BsChevronDown } from "react-icons/bs";

interface Props {
    selectedPlatform: number | null;
    onPlatformSelect: (selectedPlatform: Platform) => void;
}

const PlatformSelector = ({ selectedPlatform, onPlatformSelect }: Props) => {
    const { data: platforms, error, isLoading } = usePlatforms();

    if (error) return null;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {platforms?.results.find(
                    (platform) => platform.id === selectedPlatform
                )?.name || "Platforms"}
            </MenuButton>
            <MenuList>
                {platforms?.results.map((platform) => (
                    <MenuItem
                        onClick={() => onPlatformSelect(platform)}
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
