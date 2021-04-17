import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  pageNumber: number
  isCurrent?: boolean
}

export function PaginationItem({
  isCurrent = false,
  pageNumber
}: PaginationItemProps) {
  if(isCurrent) {
    return (
      <Button
        w="4"
        size="sm"
        fontSize="xs"
        colorScheme="pink"
        disabled
        _disabled={{
          bg: 'pink.500',
          cursor: 'default'
        }}
      >
        {pageNumber}
      </Button>
    )
  }

  return (
    <Button
      w="4"
      size="sm"
      fontSize="xs"
      bg="gray.700"
      _hover={{
        bg: 'gray.500'
      }}
    >
      {pageNumber}
    </Button>
  )
}