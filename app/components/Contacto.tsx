"use client";
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Stack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Textarea,
  chakra,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { ReactNode } from "react";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg="#e590a7"
      target="_blank"
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Contacto() {
  return (
    <Container bg="#e590a7" maxW="full" mt={0} centerContent overflow="hidden">
      <Flex justify="center" w="full">
        <Box
          bg="#f3a8a8"
          color="white"
          borderRadius="lg"
          m={4}
          p={{ base: 5, md: 10 }}
          maxW={{ base: "90%", sm: "80%", md: "full" }}
        >
          <Box p={4}>
            <Wrap
              spacing={{ base: 5, sm: 3, md: 5, lg: 20 }}
              justify="center"
              align="center"
            >
              <WrapItem>
                <Box textAlign="center">
                  <Heading>Contáctame</Heading>
                  <Text
                    mt={3}
                    color="#ffffff"
                    fontWeight="bold"
                  >
                    Puedes dejarme un mensaje
                  </Text>
                  <Box py={5}>
                    <VStack spacing={3} alignItems="center">
                      <Button
                        size="md"
                        height="48px"
                        width="80%"
                        variant="ghost"
                        color="#ffffff"
                        leftIcon={<MdPhone color="#ffffff" size="20px" />}
                      >
                        6682056133
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="80%"
                        variant="ghost"
                        color="#ffffff"
                        leftIcon={<MdEmail color="#ffffff" size="20px" />}
                      >
                        muerte_rosa@hotmail.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="80%"
                        variant="ghost"
                        color="#ffffff"
                        leftIcon={<MdLocationOn color="#ffffff" size="20px" />}
                      >
                        Culiacán, Sinaloa
                      </Button>
                    </VStack>
                  </Box>
                  <Stack direction={"row"} spacing={6} justify="center">
                    <SocialButton
                      label={"Facebook"}
                      href={"https://www.facebook.com/Natzu66"}
                    >
                      <FaFacebook />
                    </SocialButton>
                    <SocialButton
                      label={"Instagram"}
                      href={"https://www.instagram.com/muerte_rosa/"}
                    >
                      <FaInstagram />
                    </SocialButton>
                  </Stack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="#ffffff" borderRadius="lg" p={5}>
                  <VStack spacing={4}>
                    <FormControl id="name">
                      <FormLabel color={"#000000"}>Tu Nombre</FormLabel>
                      <InputGroup border={"solid 1px"} borderColor={"gray.400"}>
                        <Input type="text" size="md" width="100%" color={"#000000"}/>
                      </InputGroup>
                    </FormControl>
                    <FormControl id="email">
                      <FormLabel color={"#000000"}>Correo Electrónico</FormLabel>
                      <InputGroup border={"solid 1px"} borderColor={"gray.400"}>
                        <Input type="text" size="md" width="100%" color={"#000000"}/>
                      </InputGroup>
                    </FormControl>
                    <FormControl id="message">
                      <FormLabel color={"#000000"}>Mensaje</FormLabel>
                      <Textarea
                        border={"solid 1px"}
                        borderColor={"gray.400"}
                        color={"#000000"}
                        width="181px"
                        placeholder="Escribe aquí tu mensaje.."
                      />
                    </FormControl>
                    <FormControl id="submit">
                      <Button
                        variant="solid"
                        bg="#e590a7"
                        padding="10px"
                        borderRadius={120}
                        color="#ffffff"
                        _hover={{ bg: "#ffa0a0" }}
                        width="100%"
                      >
                        Envíar Mensaje
                      </Button>
                    </FormControl>
                  </VStack>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
