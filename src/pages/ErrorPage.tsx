import { Box, Center, Icon, Text } from "@chakra-ui/react";
import { TbError404 } from "react-icons/tb";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";
import { GiHammerBreak } from "react-icons/gi";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <>
            <NavBar />
            <Center>
                <Box>
                    {isRouteErrorResponse(error) ? (
                        <>
                            <Icon as={TbError404} boxSize={180}></Icon>
                            <Text>This page does not exist.</Text>
                        </>
                    ) : (
                        <>
                            <Icon as={GiHammerBreak} boxSize={180}></Icon>
                            <Text>Unexpected error occured.</Text>
                        </>
                    )}
                </Box>
            </Center>
        </>
    );
};

export default ErrorPage;
