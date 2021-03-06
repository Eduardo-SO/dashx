import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Eduardo Souza</Text>
          <Text color="gray.300">
            eduardo.sool07@gmail.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Eduardo Souza" src="https://github.com/eduardo-so.png"/>
    </Flex>
  )
}