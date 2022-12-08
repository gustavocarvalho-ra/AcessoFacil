import {
  Tr, Td, Icon, Link,
} from '@chakra-ui/react';
import { TbExternalLink, TbTrash } from 'react-icons/tb';

export interface PropsID {
  id: string;
  value: string;
}

export interface ItemsProps {
  id: string;
  selectedTable: PropsID[];
  setSelectedTable: React.Dispatch<React.SetStateAction<PropsID[]>>;
}

export function TableQrCode({ id, selectedTable, setSelectedTable } : ItemsProps) {
  const selectChange = (event: React.ChangeEvent<HTMLTableRowElement>) => {
    const { value } : any = event.target;
    
    const found = selectedTable.find((table: { id: string; }) => table.id === id);
    
    const map = selectedTable.map((table: { id: string; value: string; }) => {
      if (table.id === id) {
        // eslint-disable-next-line no-param-reassign
        table.value = value;
      }
      return table;
    });

    if (!found) {
      setSelectedTable([...selectedTable, { id, value }]);
    } else {
      setSelectedTable(map);
    }
  };

  const handleDeleteSelect = () => {
    const newSelectedTable = [...selectedTable];
    const removeIndex = selectedTable.map((document) => document.id).indexOf(id);    
    if (removeIndex !== -1) {
      newSelectedTable.splice(removeIndex, 1);
      setSelectedTable(newSelectedTable);
    }
  };

  return (
    <Tr onChange={selectChange}>
      <Td>Cadastro</Td>
      <Td>CPF, RG, Data de Nascimento</Td>
      <Td textAlign="center">2</Td>
      <Td w="100px">
        <Link>
          <Icon as={TbExternalLink} color="gray.700" w="20px" h="20px" mr="20px" />
        </Link>
        <Link onClick={handleDeleteSelect}>
          <Icon as={TbTrash} color="gray.700" w="20px" h="20px" />
        </Link>
      </Td>
    </Tr>
  );
}
