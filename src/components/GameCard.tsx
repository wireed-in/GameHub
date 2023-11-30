import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface Props {
    title: string;
    slug: string;
    background: string;
    platforms: string[];
    metacritic: number;
}

const GameCard = ({
    title,
    slug,
    background,
    platforms,
    metacritic,
}: Props) => {
    return (
        <>
            <Card
                _hover={{
                    transform: "scale(1.05)",
                    transition: "transform .15s ease-in",
                }}
            >
                <Image src={background} borderRadius="lg" />
                <CardBody>
                    <HStack justifyContent={"space-between"}>
                        <PlatformIconList platforms={platforms} />
                        <CriticScore score={metacritic} />
                    </HStack>
                    <Heading paddingTop={"20px"} size="md">
                        <Link to={`games/${slug}`}>{title}</Link>
                    </Heading>
                </CardBody>
            </Card>
        </>
    );
};

export default GameCard;
