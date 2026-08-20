import { Card, CardBody, Skeleton, SkeletonText, useColorModeValue } from "@chakra-ui/react";

const CardSkeleton = () => {
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.200");

  return (
    <Card variant="outline" borderColor={borderColor} borderRadius="xl" overflow="hidden">
      <Skeleton height="180px" />
      <CardBody>
        <SkeletonText mt="4" noOfLines={3} spacing="4" skeletonHeight="2" />
      </CardBody>
    </Card>
  );
};

export default CardSkeleton;