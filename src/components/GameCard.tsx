import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface Props {
  title: string;
  background: string;
  platforms: string[];
}

const GameCard = ({ title, background, platforms }: Props) => {
  return (
    <>
      <Card>
        <Image src={background} borderRadius="lg" />
        <CardBody>
          <PlatformIconList platforms={platforms} />
          <Heading size="md">{title}</Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
