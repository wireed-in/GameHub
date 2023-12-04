import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FormEvent, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";
import { Navigate, useNavigate } from "react-router-dom";

const SearchInput = () => {
    const setSelectedSearchText = useGameQueryStore(
        (x) => x.setSelectedSearchText
    );
    const searchRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (searchRef.current !== null) {
            setSelectedSearchText(searchRef.current.value);
            navigate("/");
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
