import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { ChangeEvent, FormEvent, useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
    onSearchInput: (searchText: string) => void;
}

const SearchInput = ({ onSearchInput }: Props) => {
    const searchRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (searchRef.current !== null) {
            onSearchInput(searchRef.current.value);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputGroup>
                <InputLeftElement>
                    <BsSearch />
                </InputLeftElement>
                <Input
                    ref={searchRef}
                    borderRadius={20}
                    placeholder="Search games..."
                    variant="filled"
                />
            </InputGroup>
        </form>
    );
};

export default SearchInput;
