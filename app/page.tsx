import { Image, Container, Text, Box, Flex } from "@chakra-ui/react";
import Contacto from "./components/Contacto";
import Categorias from "./components/Categorias";

export default function Home() {
  return (
    <Container centerContent marginTop={10} marginBottom={10}>
      <Image 
        src="/img/portada.png" 
        alt="Portada Muerte Rosa" 
        w={{ base: "100%", sm: "100%", md: "75%", lg: "50%" }} 
        marginBottom={20} 
      />
      
      <Flex align="center" width="100%" marginBottom={5}>
        <Box flex="1" borderBottom="2px solid" borderColor="gray.300" />
        <Text fontSize={"26px"} px={4} textAlign="center">
          Categorías
        </Text>
        <Box flex="1" borderBottom="2px solid" borderColor="gray.300" />
      </Flex>

      <Categorias/>

      <Flex align="center" width="100%" marginBottom={5} marginTop={10}>
        <Box flex="1" borderBottom="2px solid" borderColor="gray.300" />
        <Text fontSize={"26px"} px={4} textAlign="center">
          Contácto
        </Text>
        <Box flex="1" borderBottom="2px solid" borderColor="gray.300" />
      </Flex>

      <Contacto/>
    </Container>
  );
}
