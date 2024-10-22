"use client";
import { Image, HStack, Box, Link } from "@chakra-ui/react";

export default function Header() {
  return (
    <HStack padding={5} gap={{base: "5", sm: "5", md: "20"}} marginBottom={5}>
      <Box maxWidth={{base: "100%", sm: "100%", md: "190px", lg: "250px"}} >
        <Link href="/productos/earcuffs-ely"><Image src="/img/image-earcuff-ely.jpg" alt="Imagen de la categoría de earcuff ely." /></Link>
      </Box>
      <Box maxWidth={{base: "100%", sm: "100%", md: "190px", lg: "250px"}}>
        <Link href="/productos/aretes"><Image src="/img/imagen-aretes.jpg" alt="Imagen de la categoría de aretes." /></Link>
      </Box>
    </HStack>
  );
}
