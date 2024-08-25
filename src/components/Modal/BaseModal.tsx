import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
  } from '@chakra-ui/react'
import { cloneElement } from 'react';

  type BaseModalProps = {
    title: string;
    children: React.ReactNode;
    target: React.ReactNode;
  }

export default function BaseModal({
    title, children, target
}: BaseModalProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        {cloneElement(target as React.ReactElement, { onClick: onOpen })}
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                {children}  
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }