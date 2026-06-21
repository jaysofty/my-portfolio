import { Card, CardHeader, Heading, CardBody } from "@chakra-ui/react";

interface Props {
  children: any;
  text: string;
}

const ReusableCard = ({ children, text }: Props) => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">{children}</Heading>
      </CardHeader>
      <CardBody>{text}</CardBody>
    </Card>
  );
};

export default ReusableCard;
