import { Button, Text } from '@chakra-ui/react';

interface ButtonProps {
  text: string;
}

export function ButtonForm({ text }: ButtonProps) {
  return (
    <Button
      type="submit"
      w="257px"
      h="68px"
      borderRadius={16}
      bg="orange.900"
      colorScheme={'orange'}
    >
      <Text fontWeight="medium" fontSize={24} color="gray.50">
        {text}
      </Text>
    </Button>
  );
}
