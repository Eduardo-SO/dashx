import { ReactNode } from "react";
import { Box, Stack, Text } from "@chakra-ui/react";

interface NavSectionProps {
  title: string
  children: ReactNode
}

export function NavSection({ title, children }: NavSectionProps ) {
  return(
    <Box>
      <Text color="gray.400" fontWeight="bold" fontSize="small" textTransform="uppercase">{title}</Text>
      <Stack align="stretch" spacing="4" mt="8">
        {children}
      </Stack>
    </Box>
  )
}