import { ElementType } from "react";
import { Icon, Link as ChakraLink, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ActiveLink } from "../ActiveLink";

interface NavSectionProps extends ChakraLinkProps {
  title: string
  icon: ElementType
  href: string
}

export function NavLink({ title, icon, href, ...rest }: NavSectionProps) {
  return(
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">{title}</Text>
      </ChakraLink>
    </ActiveLink>
  )
}