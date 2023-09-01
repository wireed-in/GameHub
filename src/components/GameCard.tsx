import { Card, CardBody, Heading, Image, Stack } from "@chakra-ui/react";

interface Props {
  title: string;
  background: string;
}

const GameCard = ({ title, background }: Props) => {
  return (
    <>
      <Card>
        <Image
          src={background}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <CardBody>
          <Heading size="md">{title}</Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
