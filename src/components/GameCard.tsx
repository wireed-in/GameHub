import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface Props {
  title: string;
  background: string;
  platforms: string[];
  metacritic: number;
}

const GameCard = ({ title, background, platforms, metacritic }: Props) => {
  return (
    <>
      <Card>
        <Image src={background} borderRadius="lg" />
        <CardBody>
          <HStack justifyContent={"space-between"}>
            <PlatformIconList platforms={platforms} />
            <CriticScore score={metacritic} />
          </HStack>
          <Heading paddingTop={"20px"} size="md">
            {title}
          </Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
