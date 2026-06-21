import {
  Button,
  Text,
  Box,
  Collapse,
  useColorModeValue,
} from "@chakra-ui/react";

import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
  color?: string;
}


const ExpandableText = ({
  children,
  maxChars = 250,
  color,
}: Props) => {

  const [isExpanded, setExpanded] = useState(false);


  const buttonBg = useColorModeValue(
    "purple.500",
    "purple.400"
  );

  const buttonHover = useColorModeValue(
    "purple.600",
    "purple.300"
  );


  const isLongText = children.length > maxChars;


  const displayText = isExpanded
    ? children
    : children.slice(0, maxChars);



  return (

    <Box>

      <Collapse
        startingHeight={80}
        in={isExpanded || !isLongText}
        animateOpacity
      >

        <Text
          color={color}
          fontSize="md"
          lineHeight="1.8"
        >

          {displayText}

          {!isExpanded && isLongText && "..."}


        </Text>


      </Collapse>



      {isLongText && (

        <Button

          mt={4}

          size="sm"

          borderRadius="full"

          bg={buttonBg}

          color="white"

          px={6}

          _hover={{
            bg: buttonHover,
            transform:"translateY(-2px)"
          }}

          transition="0.2s"

          onClick={() =>
            setExpanded(!isExpanded)
          }

        >

          {isExpanded
            ? "Show Less"
            : "Read More"
          }


        </Button>

      )}


    </Box>

  );
};


export default ExpandableText;