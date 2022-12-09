/* eslint-disable react/no-unstable-nested-components */
import { Button, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface ButtonProps {
  text: string;
}

export function ButtonForm({ text }: ButtonProps) {
  return (
    <Button
      as={motion.button}
      whileHover={{ scale: 1.050 }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: '0.90',
        delay: '0.5',
        ease: '[0, 0.71, 0.2, 1.01]',
      }}
      type="submit"
      w={['200px', '257px']}
      h={['55px', '68px']}
      borderRadius={16}
      bg="orange.900"
      colorScheme={'orange'}
    >
      <Text fontWeight="medium" fontSize={[20, 24]} color="gray.50">
        {text}
      </Text>
    </Button>
  );
}
