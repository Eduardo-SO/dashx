import { Box, Stack } from '@chakra-ui/react'
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri'
import { NavLink } from './NavLink'
import { NavSection } from './NavSection'

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack align="flex-start" spacing="12">
        <NavSection title="Geral">
          <NavLink title="Dashboard" icon={RiDashboardLine} />
          <NavLink title="Usuários" icon={RiContactsLine} />
        </NavSection>
        <NavSection title="Automação">
          <NavLink title="Formulários" icon={RiInputMethodLine} />
          <NavLink title="Automação" icon={RiGitMergeLine} />
        </NavSection>
      </Stack>
    </Box>
  )
}