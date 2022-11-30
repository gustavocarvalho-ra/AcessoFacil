/* eslint-disable react/function-component-definition */
import {
  FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps, FormControl,
} from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

interface InputFormProps extends ChakraInputProps{
  type: string;
  label: string;
  errors?: FieldError;
}

const InputBase : ForwardRefRenderFunction<HTMLInputElement, InputFormProps> = ({
  type, label, errors, ...rest 
}, ref) => {
  return (
    <FormControl isInvalid={!!errors}>
      <FormLabel
        fontSize={18}
        w={['260px', '347px']}
        fontWeight="regular"
        mr={0}
      >
        {label}:
        <ChakraInput
          type={type}
          h={['55px', '66px']}
          mt={[1.5]}
          variant="Outline" 
          fontSize={22}
          borderRadius={16}
          bg="gray.200"
          ref={ref}
          {...rest}
          required
          autoComplete="on" 
        />
        
        {!!errors && <FormErrorMessage>{errors.message}</FormErrorMessage>}
      </FormLabel>
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
