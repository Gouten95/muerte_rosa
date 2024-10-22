'use client'

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Image,
  Link
} from '@chakra-ui/react'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import { ReactNode } from 'react'

const Logo = () => {
  return (
    <Link href="/"><Image src="/img/logo-muerte-rosa-2.png" alt="Logo Muerte Rosa" width={85} height={85} border={"solid 6px"} borderRadius={"100%"} borderColor="#ffffff"/></Link>
  )
}

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      bg="#ffffff"
      target='_blank'
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function Footer() {
  return (
    <Box
      bg="#f4b1b1"
      color={useColorModeValue('gray.700', 'gray.200')}display="flex" alignItems="center" justifyContent="center" px={0}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Logo />
        <Text fontWeight="bold">© 2024 Muerte Rosa. Todos los derechos reservados.</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Facebook'} href={'https://www.facebook.com/Natzu66'}>
            <FaFacebook />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'https://www.instagram.com/muerte_rosa/'}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  )
}