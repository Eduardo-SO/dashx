import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack align="flex-start" spacing="12">
      <NavSection title="Geral">
        <NavLink title="Dashboard" href="/dashboard" icon={RiDashboardLine} />
        <NavLink title="Usuários" href="/users" icon={RiContactsLine} />
      </NavSection>
      <NavSection title="Automação">
        <NavLink title="Formulários" href="/forms" icon={RiInputMethodLine} />
        <NavLink title="Automação" href="/automation" icon={RiGitMergeLine} />
      </NavSection>
    </Stack>
  )
}
