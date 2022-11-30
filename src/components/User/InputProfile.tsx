/* eslint-disable react/no-children-prop */
/* eslint-disable react/function-component-definition */
import { EditIcon } from '@chakra-ui/icons';
import {
  FormErrorMessage, FormControl, InputRightElement, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps, InputGroup,
} from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

interface InputFormProps extends ChakraInputProps{
  label?: string;
  type: string;
  mt?: string[] | string;
  errors?: FieldError;
}

const InputDataEditable : ForwardRefRenderFunction<HTMLInputElement, InputFormProps> = ({
  label, type, mt, errors, ...rest 
}, ref) => {
  return (
    <FormControl isInvalid={!!errors}>
      
        <FormLabel fontWeight="light" fontSize={18} color="gray.900">
          {label}:
        <InputGroup>
          <ChakraInput
            type={type}
            w="448px"
            fontSize="26"
            variant="flushed"
            focusBorderColor="orange.900"
            border="none"
            autoComplete="on" 
            ref={ref}
            {...rest} 
          />
          <InputRightElement
            children={<EditIcon width="24px" height="24px" mt="10px" color="gray.700" />} 
          />
        </InputGroup>
        {!!errors && <FormErrorMessage>{errors.message}</FormErrorMessage>}
        </FormLabel>
      
    </FormControl>
    
  );
};

export const InputEditable = forwardRef(InputDataEditable);
