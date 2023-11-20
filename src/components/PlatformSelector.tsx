import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
    const { data: platforms, error, isLoading } = usePlatforms();
    const selectedPlatformId = useGameQueryStore(
        (x) => x.gameQuery.selectedPlatformId
    );
    const setSelectedPlatformId = useGameQueryStore(
        (x) => x.setSelectedPlatformId
    );

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
                        onClick={() => setSelectedPlatformId(platform.id)}
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
