"use client";
import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  Center,
  List,
  ListItem,
} from "@chakra-ui/react";

type Product = {
  name: string;
  price: number;
  originalPrice: number;
  description: string;
  image: string;
  url: string;
};

type Category = {
  nombre: string;
  productos: Product[];
};

export default function PDPearcuffsEly() {
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/productos/allProducts.json");
        if (!response.ok) {
          throw new Error("Error al cargar el archivo JSON: " + response.status);
        }
        const data = await response.json();
        
        const currentPath = window.location.pathname;
        // Buscamos el producto en todas las categorías
        let foundProduct: Product | undefined = undefined;

        // Se recorren las categorías para encontrar el producto
        data.categorias.forEach((category: Category) => {
          const productInCategory = category.productos.find(
            (item: Product) => item.url === currentPath
          );
          if (productInCategory) {
            foundProduct = productInCategory;
          }
        });

        if (foundProduct) {
          setProduct(foundProduct);
          setError(null);
        } else {
          setError("Producto no encontrado");
        }
      } catch (error) {
        console.error("Error al cargar el JSON:", error);
        setError("Error al cargar los datos del producto");
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Center py={10} flexDirection="column" alignItems="center">
      <Container maxW={1200}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 16 }}
          alignItems="center"
        >
          <Flex justify="center">
            <Box
              overflow="hidden"
              width="100%"
              height={{ base: "100%", sm: "400px", lg: "500px" }}
              position="relative"
            >
              <Image
                rounded={"md"}
                alt={"product image"}
                src={product.image}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={"100%"}
                transition="transform 0.3s ease"
                _hover={{
                  transform: "scale(1.6)",
                }}
              />
              <Text
                position="absolute"
                bottom="10px"
                left="50%"
                transform="translateX(-50%)"
                width={{ base: 300, sm: 300, md: 300, lg: 370 }}
                fontSize={{ base: "13px", lg: "15px" }}
                color={"#000000"}
                fontWeight={"400"}
                backgroundColor="rgba(255, 255, 255, 0.8)"
                padding="5px 10px"
                borderRadius="5px"
                mt={5}
              >
                Pasa el cursor sobre la imagen para hacer zoom
              </Text>
            </Box>
          </Flex>
          <Stack spacing={{ base: 6, md: 4 }} align="center">
            <Box as={"header"} textAlign="center">
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5x2" }}
              >
                {product.name}
              </Heading>
              <Stack direction={"row"} align={"center"} justify="center">
                <Text
                  fontWeight={800}
                  fontSize="26px"
                  color={"#e50f2e"}
                  sx={{
                    WebkitTextStrokeWidth: "1px",
                    WebkitTextStrokeColor: "#000000",
                  }}
                >
                  ${product.price.toFixed(2)}
                </Text>
                {product.originalPrice > 0 && (
                  <Text
                    textDecoration={"line-through"}
                    color={"#000000"}
                    fontSize={"22px"}
                  >
                    ${product.originalPrice.toFixed(2)}
                  </Text>
                )}
              </Stack>
            </Box>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={<StackDivider borderColor={"#000000"} />}
            >
              <Box textAlign="center">
                <Text
                  fontSize={{ base: "16px", lg: "22px" }}
                  color={"#e590a7"}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Detalles del producto
                </Text>
                <List spacing={2}>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Descripción:
                    </Text>{" "}
                    {product.description}
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Between lugs:
                    </Text>{" "}
                    20 mm
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Bracelet:
                    </Text>{" "}
                    leather strap
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Case:
                    </Text>{" "}
                    Steel
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Case diameter:
                    </Text>{" "}
                    42 mm
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Dial color:
                    </Text>{" "}
                    Black
                  </ListItem>
                </List>
              </Box>
            </Stack>
            <Button
              rounded={"none"}
              w={"full"}
              mt={8}
              size={"lg"}
              fontWeight={"bold"}
              py={"7"}
              bg={"#e590a7"}
              color={"#ffffff"}
              textTransform={"uppercase"}
              _hover={{
                bg: "#ffa0a0",
                boxShadow: "lg",
              }}
            >
              Añadir al carrito
            </Button>
          </Stack>
        </SimpleGrid>
      </Container>
    </Center>
  );
}
