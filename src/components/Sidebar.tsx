import { Box, Stack, Text, Link, Icon } from '@chakra-ui/react'
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri'

export default function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack align="flex-start" spacing="12">
        <Box>
          <Text color="gray.400" fontWeight="bold" fontSize="small" textTransform="uppercase">Geral</Text>
          <Stack align="stretch" spacing="4" mt="8">
            <Link display="flex" align="center">
              <Icon as={RiDashboardLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">Dashboard</Text>
            </Link>
            <Link display="flex" align="center">
              <Icon as={RiContactsLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">Usuários</Text>
            </Link>
          </Stack>
        </Box>
        <Box>
          <Text color="gray.400" fontWeight="bold" fontSize="small" textTransform="uppercase">Automação</Text>
          <Stack align="stretch" spacing="4" mt="8">
            <Link display="flex" align="center">
              <Icon as={RiInputMethodLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">Formulários</Text>
            </Link>
            <Link display="flex" align="center">
              <Icon as={RiGitMergeLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">Automação</Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}