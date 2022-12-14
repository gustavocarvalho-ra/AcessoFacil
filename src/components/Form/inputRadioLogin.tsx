/* eslint-disable react/function-component-definition */
import {
  RadioGroup, Radio, Text, RadioProps as ChakraRadioProps, FormErrorMessage, HStack,
} from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

interface InputRadioProps extends ChakraRadioProps{
  errors?: FieldError;
}

const InputRadio: ForwardRefRenderFunction<HTMLInputElement, InputRadioProps> = ({ errors, ...rest }, ref) => {
  return (
    <RadioGroup defaultValue="2" size="lg" colorScheme="orange">
      <HStack>
        <Radio
          value="usuario"
          css={{
            padding: '8px',
            borderRadius: '6px',
            width: '120px',
            height: '50px',
            '&[data-checked]::before': { background: 'none', color: 'white' },
          }}
          {...rest}
          ref={ref}>
          <Text fontWeight="medium" fontSize={21} position="absolute" right="33px" bottom="8px">Usuário</Text>
        </Radio>

        <Radio
          value="solicitante"
          css={{
            padding: '8px',  
            borderRadius: '6px',
            width: '120px',
            height: '50px',
            '&[data-checked]::before': { background: 'none' },
          }}
          {...rest}
          ref={ref}>
          <Text fontWeight="medium" fontSize={21} position="absolute" right="20px" bottom="8px">Solicitante</Text>
        </Radio>

        {!!errors && <FormErrorMessage>{errors.message}</FormErrorMessage>}
      </HStack>
    </RadioGroup>
  );
};

export const RadioInput = forwardRef(InputRadio);
