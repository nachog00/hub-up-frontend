"use client";
import { Flex, Input, Button, Avatar, Box, AbsoluteCenter, Textarea, Alert, AlertIcon,} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import events from "@/mock/events";
import BaseLayout from '@/components/BaseLayout';

export default function EditableProfile() {
    const data = events[0];
    const [showAlert, setShowAlert] = useState(false)
    const [isEditing, setIsEditing] = useState({
        name: false,
        location: false,
        interests: false,
    });
    
    const [formData, setFormData] = useState({
        name: data.host.name,
        location: data.location.address,
        interests: data.interests.map(interest => interest.name).join(', '),
    });
    const [isModified, setIsModified] = useState(false);
    const handleEditClick = (field) => {
        setIsEditing((prevState) => ({
            ...prevState,
            [field]: !prevState[field],
        }));
    };
    
    const handleInputChange = (e, field) => {
        setFormData({
            ...formData,
            [field]: e.target.value,
        });
        setIsModified(true); 
    };
    

    const handleSave = () => {
        console.log('Datos guardados:', formData);
        setIsModified(false);

        setIsEditing({
            name: false,
            location: false,
            interests: false,
        });
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 2000);
    };
    
    return (
        <BaseLayout>
            <Flex alignItems="center" mb={4}>
                <Avatar name={data.host.name} src='https://bit.ly/broken-link' />
                <h1 style={{ marginLeft: '10px' }}>{data.host.id}</h1>
            </Flex>
            
            <Flex direction="column" gap={4}>
                <Flex alignItems="center" gap={4}>
                    <h2 style={{ width: '100px' }}>Name:</h2>
                    <Input
                        value={formData.name}
                        size="md"
                        isReadOnly={!isEditing.name}
                        onChange={(e) => handleInputChange(e, 'name')}
                    />
                    <Button onClick={() => handleEditClick('name')}>
                        <EditIcon />
                    </Button>
                </Flex>
                
                <Flex alignItems="center" gap={4}>
                    <h2 style={{ width: '100px' }}>Location:</h2>
                    <Input
                        value={formData.location}
                        size="md"
                        isReadOnly={!isEditing.location}
                        onChange={(e) => handleInputChange(e, 'location')}
                    />
                    <Button onClick={() => handleEditClick('location')}>
                        <EditIcon />
                    </Button>
                </Flex>
                
                <Flex alignItems="center" gap={4}>
                    <h2 style={{ width: '100px' }}>Interests:</h2>
                    <Textarea
                        value={formData.interests}
                        size="md"
                        isReadOnly={!isEditing.interests}
                        onChange={(e) => handleInputChange(e, 'interests')}
                    />
                    <Button onClick={() => handleEditClick('interests')}>
                        <EditIcon />
                    </Button>
                </Flex>
                
                <Box position='relative' h='60px'>
                    <AbsoluteCenter>
                       <Button
                           colorScheme='blue'
                           disabled={!isModified}
                           onClick={handleSave}
                       >
                           Guardar
                       </Button>
                    </AbsoluteCenter>
                </Box>
                {showAlert && (
                    <Alert status='success' variant='subtle' mb={4}>
                        <AlertIcon />
                        Modified data saved
                    </Alert>
                )}
            </Flex>
        </BaseLayout>
    );
}
