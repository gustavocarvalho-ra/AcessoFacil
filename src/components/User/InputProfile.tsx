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
  value: string | number |undefined;
}

const InputDataEditable : ForwardRefRenderFunction<HTMLInputElement, InputFormProps> = ({
  label, type, mt, errors, value, ...rest 
}, ref) => {
  return (
    <FormControl isInvalid={!!errors}>
      
        <FormLabel
          fontWeight="regular"
          fontSize={20}
          color="gray.500"
          css={{
            borderBottom: '2px solid #9D5C0D',
          }}>
          {label}:
        <InputGroup>
          <ChakraInput
            type={type}
            defaultValue={value}
            w="448px"
            color="gray.900"
            fontSize="26"
            variant="flushed"
            focusBorderColor="orange.900"
            border="none"
            autoComplete="on" 
            ref={ref}
            {...rest} 
          />
          <InputRightElement
            children={
              <EditIcon
                width="24px"
                height="24px"
                mt="10px"
                color="gray.500"
                cursor="pointer"
                _hover={{
                  color: 'orange.900',
                }} 
              />
            } 
          />
        </InputGroup>
        
        </FormLabel>
        {!!errors && <FormErrorMessage>{errors.message}</FormErrorMessage>}
      
    </FormControl>
    
  );
};

export const InputEditable = forwardRef(InputDataEditable);
