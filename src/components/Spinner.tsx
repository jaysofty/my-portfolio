import { Center, Spinner } from "@chakra-ui/react";

const SpinnerComponent = () => {
  return (
    <Center h="200px" w="full">
      <Spinner size="xl" thickness="4px" speed="0.65s" color="blue.500" />
    </Center>
  );
};

export default SpinnerComponent;