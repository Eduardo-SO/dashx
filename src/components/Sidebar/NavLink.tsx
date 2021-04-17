import { ElementType } from "react";
import { Icon, Link, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";

interface NavSectionProps extends ChakraLinkProps {
  title: string
  icon: ElementType
}

export function NavLink({ title, icon, ...rest }: NavSectionProps) {
  return(
    <Link display="flex" align="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">{title}</Text>
    </Link>
  )
}