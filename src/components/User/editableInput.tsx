/* eslint-disable react/function-component-definition */
/* eslint-disable no-unused-vars */
import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons';
import {
  ButtonGroup, Editable, EditablePreview, Flex, IconButton, Input, useEditableControls, Text, EditableInput,
} from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';

export function EditableControls() {
  const {
    isEditing,
    getSubmitButtonProps,
    getCancelButtonProps,
    getEditButtonProps,
  } = useEditableControls();

  return isEditing ? (
    <ButtonGroup size="sm">
      <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
      <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
    </ButtonGroup>
  ) : (
    <ButtonGroup>
      <IconButton icon={<EditIcon width="24px" height="24px" mt="10px" />} {...getEditButtonProps()} />
    </ButtonGroup>
    
  );
}

interface EditableInputProps{
  label?: string;
  defaultValue: string;
  type: string;
  mt?: string[] | string;
}

const InputDataEditable : ForwardRefRenderFunction<HTMLInputElement, EditableInputProps> = ({
  defaultValue, label, type, mt, ...rest 
}, ref) => {
  return (
    <Editable
      mt={mt}
      defaultValue={defaultValue}
      fontSize="25"
      color="gray.500"
      w="100%"
      isPreviewFocusable={false}
      borderBottom="2px solid #9D5C0D" 
      textAlign="start"
    >
    <Text fontWeight="light" fontSize={18} color="gray.900">{label}:</Text>
    <Flex>
      <EditablePreview w="100%" color="gray.900" />
        <Input
          type={type}
          as={EditableInput}
          w="448px"
          fontSize="26"
          variant="flushed"
          focusBorderColor="orange.900"
          border="none"
          ref={ref}
          {...rest} 
        />
      <EditableControls />
    </Flex>
    </Editable>
  );
};

export const InputEditable = forwardRef(InputDataEditable);
