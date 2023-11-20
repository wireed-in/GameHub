import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

const SortSelector = () => {
    const sortFilter = [
        { label: "Relevance", value: "relevance" },
        { label: "Date added", value: "-added" },
        { label: "Name", value: "name" },
        { label: "Release Date", value: "-released" },
        { label: "Popularity", value: "-metacritic" },
        { label: "Average rating", value: "-rating" },
    ];

    const selectedSortOrder = useGameQueryStore(
        (x) => x.gameQuery.selectedSortOrder
    );

    const setSelectedSortOrder = useGameQueryStore(
        (x) => x.setSelectedSortOrder
    );

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order by:{" "}
                {sortFilter.find((x) => x.value === selectedSortOrder)?.label ||
                    "Relevance"}
            </MenuButton>
            <MenuList>
                {sortFilter.map((item) => (
                    <MenuItem
                        value={item.value}
                        onClick={() => setSelectedSortOrder(item.value)}
                        key={item.value}
                    >
                        {item.label}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default SortSelector;
