import { Image, Container } from "@chakra-ui/react";
import Contacto from "./components/Contacto";
import Categorias from "./components/Categorias";

export default function Home() {
  return (
    <Container centerContent marginTop={10} marginBottom={10}>
      <Image src="/img/portada.png" alt="Portada Muerte Rosa" w={{base: "100%", sm: "100%", md: "75%", lg: "50%"}} marginBottom={5} />
      <Categorias/>
      <Contacto/>
    </Container>
  );
}
