/* eslint-disable react/function-component-definition */
import {
  RadioGroup, Stack, Radio, Text, RadioProps as ChakraRadioProps, FormErrorMessage,
} from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

interface InputRadioProps extends ChakraRadioProps{
  errors?: FieldError;
}

const InputRadio: ForwardRefRenderFunction<HTMLInputElement, InputRadioProps> = ({ errors, ...rest }, ref) => {
  return (
    <RadioGroup defaultValue="2" colorScheme="blackAlpha" size="lg">
      <Stack spacing={5} direction="column">
        <Text fontSize={18} fontWeight="regular">Você é um:</Text>
        <Radio value="usuario" css={{ padding: '8px', borderRadius: '3px' }} {...rest} ref={ref}>
          <Text fontWeight="medium" fontSize={21}>Usuário</Text>
        </Radio>
        <Radio value="solicitante" css={{ padding: '8px', borderRadius: '3px' }} {...rest} ref={ref}>
          <Text fontWeight="medium" fontSize={21}>Solicitante</Text>
        </Radio>
        {!!errors && <FormErrorMessage>{errors.message}</FormErrorMessage>}
      </Stack>
    </RadioGroup>
  );
};

export const RadioInput = forwardRef(InputRadio);
