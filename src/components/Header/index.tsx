import { Flex, Avatar } from '@chakra-ui/react'
import { Logo } from './Logo'
import { NotificationNav } from './NotificationNav'
import { SearchBox } from './SearchBox'

export function Header() {
  return (
    <Flex
      as="header"
      align="center"
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"
      mb="4"
      px="6"
    >
      <Logo />
      
      <SearchBox />

      <Flex align="center" ml="auto" >
        <NotificationNav />
        <Avatar />
      </Flex>
    </Flex>
  )
}