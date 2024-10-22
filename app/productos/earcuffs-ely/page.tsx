"use client";
import { useEffect, useState } from "react";
import {
  Box,
  Center,
  Link,
  Heading,
  Text,
  Stack,
  Flex,
  Image,
  Container,
  Button,
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

export default function PLPearcuffely() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [noProductsMessage, setNoProductsMessage] = useState<string>("");

  useEffect(() => {
    fetch("/productos/allProducts.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Error al cargar el archivo JSON: " + response.status
          );
        }
        return response.json();
      })
      .then((data) => {
        const earcuffsElyCategory = data.categorias.find(
          (category: Category) => category.nombre === "Earcuffs Ely"
        );
        if (earcuffsElyCategory) {
          setProducts(earcuffsElyCategory.productos);
          setFilteredProducts(earcuffsElyCategory.productos);
        }
      })
      .catch((error) => console.error("Error al cargar el JSON:", error));
  }, []);

  const showAll = () => {
    if (filteredProducts.length === products.length) {
      setNoProductsMessage("Ya estás visualizando todos los productos.");
      return;
    }
    setFilteredProducts(products);
    setNoProductsMessage("");
  };

  const filterByPriceUnder100 = () => {
    const filtered = products.filter((product) => product.price < 100);
    if (filteredProducts.length === filtered.length) {
      setNoProductsMessage(
        "Ya se están visualizando productos que cumplen con esta condición."
      );
      return;
    }
    applyFilterResult(filtered);
  };

  const filterByPriceAbove100 = () => {
    const filtered = products.filter((product) => product.price > 100);
    if (filteredProducts.length === filtered.length) {
      setNoProductsMessage(
        "Ya se están visualizando productos que cumplen con esta condición."
      );
      return;
    }
    applyFilterResult(filtered);
  };

  const sortAscending = () => {
    const sorted = [...filteredProducts].sort((a, b) => a.price - b.price);
    if (JSON.stringify(sorted) === JSON.stringify(filteredProducts)) {
      setNoProductsMessage(
        "Los productos ya están ordenados de menor a mayor."
      );
      return;
    }
    setFilteredProducts(sorted);
    setNoProductsMessage("");
  };

  const sortDescending = () => {
    const sorted = [...filteredProducts].sort((a, b) => b.price - a.price);
    if (JSON.stringify(sorted) === JSON.stringify(filteredProducts)) {
      setNoProductsMessage(
        "Los productos ya están ordenados de mayor a menor."
      );
      return;
    }
    setFilteredProducts(sorted);
    setNoProductsMessage("");
  };

  const applyFilterResult = (filtered: Product[]) => {
    if (filtered.length === 0) {
      setNoProductsMessage("No hay productos que coincidan con este filtro.");
      setTimeout(showAll, 3000);
    } else {
      setFilteredProducts(filtered);
      setNoProductsMessage("");
    }
  };

  if (filteredProducts.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <Center py={12} flexDirection="column" alignItems="center">
      <Box mb={20} textAlign="center">
        <Center>
          <Text fontSize={["2xl", "4xl"]} fontWeight="bold">
            Todos los productos
          </Text>
        </Center>
      </Box>
      <Box mb={5}>
        <Button
          onClick={showAll}
          mr={2}
          bgColor={"#f3a7a9"}
          padding={"6px"}
          borderRadius={80}
          color="#ffffff"
          _hover={{
            transform: "scale(1.05)",
            boxShadow: "lg",
            bg: "#e54f74",
          }}
        >
          Mostrar Todo
        </Button>
        <Button
          onClick={filterByPriceUnder100}
          mr={2}
          bgColor={"#f3a7a9"}
          padding={"6px"}
          borderRadius={80}
          color="#ffffff"
          _hover={{
            transform: "scale(1.05)",
            boxShadow: "lg",
            bg: "#e54f74",
          }}
        >
          Menos de $100
        </Button>
        <Button
          onClick={filterByPriceAbove100}
          mr={2}
          bgColor={"#f3a7a9"}
          padding={"6px"}
          borderRadius={80}
          color="#ffffff"
          _hover={{
            transform: "scale(1.05)",
            boxShadow: "lg",
            bg: "#e54f74",
          }}
        >
          Más de $100
        </Button>
        <Button
          onClick={sortAscending}
          mr={2}
          bgColor={"#f3a7a9"}
          padding={"6px"}
          borderRadius={80}
          color="#ffffff"
          _hover={{
            transform: "scale(1.05)",
            boxShadow: "lg",
            bg: "#e54f74",
          }}
        >
          Precio: Menor a Mayor
        </Button>
        <Button
          onClick={sortDescending}
          bgColor={"#f3a7a9"}
          padding={"6px"}
          borderRadius={80}
          color="#ffffff"
          _hover={{
            transform: "scale(1.05)",
            boxShadow: "lg",
            bg: "#e54f74",
          }}
        >
          Precio: Mayor a Menor
        </Button>
      </Box>

      {noProductsMessage && (
        <Box mb={4} p={4} bg="red.100" color="red.800" borderRadius="md">
          {noProductsMessage}
        </Box>
      )}

      <Container maxWidth={["100%", 1200]}>
        <Flex
          wrap="wrap"
          gap={4}
          justifyContent={{ base: "center", md: "center", lg: "center" }}
        >
          {filteredProducts.map((product, index) => (
            <Box
              key={index}
              mb={4}
              flex={{
                base:
                  filteredProducts.length <= 2
                    ? "0 0 calc(50% - 10px)"
                    : "0 0 calc(33% - 10px)",
              }}
              maxW={["100%", "48%", "330px"]}
              minHeight="400px"
            >
              <Link href={product.url}>
                <Box
                  role={"group"}
                  p={[4, 6]}
                  w={"full"}
                  bg={"#e590a7"}
                  boxShadow={"2xl"}
                  rounded={"lg"}
                  pos={"relative"}
                  zIndex={1}
                  transition="all 0.3s ease"
                  _hover={{
                    transform: "scale(1.05)",
                    boxShadow: "lg",
                    bg: "#e54f74",
                  }}
                >
                  <Box
                    rounded={"lg"}
                    mt={-12}
                    pos={"relative"}
                    height={["200px", "250px"]}
                    _after={{
                      transition: "all .3s ease",
                      content: '""',
                      w: "full",
                      h: "full",
                      pos: "absolute",
                      top: 5,
                      left: 0,
                      backgroundImage: `url(${product.image})`,
                      filter: "blur(70px)",
                      zIndex: -1,
                    }}
                    _groupHover={{
                      _after: {
                        filter: "blur(20px)",
                      },
                    }}
                  >
                    <Image
                      rounded={"lg"}
                      height={["180px", "230px"]}
                      width={["100%", "282px"]}
                      objectFit={"cover"}
                      src={product.image}
                      alt={product.name}
                      mt={45}
                    />
                  </Box>
                  <Stack pt={10} align={"center"}>
                    <Heading
                      fontSize={{ base: "20px", md: "14px" }}
                      fontFamily={"body"}
                      fontWeight={500}
                    >
                      {product.name}
                    </Heading>
                    <Stack direction={"row"} align={"center"}>
                      <Text
                        fontWeight={800}
                        fontSize={["lg", "xl"]}
                        color={"#e50f2e"}
                        sx={{
                          WebkitTextStrokeWidth: "1px",
                          WebkitTextStrokeColor: "#ffffff",
                        }}
                      >
                        ${product.price.toFixed(2)}
                      </Text>
                      {product.originalPrice > 0 && (
                        <Text textDecoration={"line-through"} color={"#000000"}>
                          ${product.originalPrice.toFixed(2)}
                        </Text>
                      )}
                    </Stack>
                  </Stack>
                </Box>
              </Link>
            </Box>
          ))}
        </Flex>
      </Container>
    </Center>
  );
}
