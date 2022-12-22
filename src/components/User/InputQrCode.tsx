/* eslint-disable react/function-component-definition */
import {
  FormErrorMessage, FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps,
} from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

interface InputFormProps extends ChakraInputProps{
  label?: string | boolean;
  type: string;
  mt?: string[] | string;
  errors?: FieldError;
  value: any;
}

const InputData : ForwardRefRenderFunction<HTMLInputElement, InputFormProps> = ({
  label, type, mt, errors, value, ...rest 
}, ref) => {
  return (
    <FormControl w="auto" isInvalid={!!errors}>
      <FormLabel
        fontWeight="regular"
        fontSize={20}
        color="gray.500"
        w={['290px', '500px']}
        css={{
          borderBottom: '2px solid #9D5C0D',
        }}>
        {label} :
        <ChakraInput
          required
          type="text"
          defaultValue={value}
          color="gray.900"
          fontSize="26"
          variant="flushed"
          focusBorderColor="orange.900"
          border="none"
          autoComplete="on" 
          ref={ref}
          {...rest}
        />
      
      </FormLabel>
      {!!errors && <FormErrorMessage>{errors.message}</FormErrorMessage>}
  
    </FormControl>
  );
};

export const InputQrCode = forwardRef(InputData);
