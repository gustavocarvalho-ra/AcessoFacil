import { MenuItem as Item, Link } from '@chakra-ui/react';
import { ReactElement } from 'react';

interface MenuItemProps {
  text: string
  icon: ReactElement
  onClick?: () => Promise<void>
}

export function MenuItemList({ text, icon, onClick }: MenuItemProps) {
  return (
    <Item
      icon={icon}
      w="100px"
      bg="gray.200"
      _hover={{
        color: 'orange.900',
      }}
      onClick={onClick}
    >
      <Link fontWeight="medium" fontSize={24} color="orange.700">
        {text}
      </Link>
    </Item>
  );
}
