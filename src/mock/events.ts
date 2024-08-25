import type { MeetupEvent } from "@/interfaces/Event";

   // mock values
const events : MeetupEvent[] = [
    {
        id: 1,
        date: '2024-08-29',
        maxParticipants: 5,
        minParticipants: 2,
        description: 'This is a test event',
        atendeeLockupAmount: 5,
        price: 10,
        costDescription: 'Gotta pay the booking',
        duration: 2,
        protocol: 'avalanche',
        location: {
            name: 'Cafe Martinez',
            address: 'Ayacucho 1240, Buenos Aires, Argentina',
            coordinates: [-34.58774894,-58.38931571],
            id: 1,
        },
        host: {
            id: '0x1234567890abcdef',
            name: 'Manuel Araoz',
            rating: 4.5,
            bio: 'I like to meet cryptopunks and talk about zk',
        },
        interests: [
            { id: 1, name: 'Politics' },
            { id: 2, name: 'Economics' },
        ]
    },
    {
        id:2,
        date: '2024-08-28',
        location: {
            name: 'Cowork Palermo',
            address: 'Jeronimo Salguero 3172, Buenos Aires, Argentina',
            coordinates: [-34.61476574, -58.39989369],
        },
        host: {
            id: '0x1234567890abcdef',
            name: 'Xi Jinping',
            rating: 4.5,
        },
        interests: [
            { id: 1, name: 'Politics' },
            { id: 3, name: 'Technology' },
        ]
    },
    {
        id:3,
        date: '2024-08-27',
        location: {
            name: 'Cafe Monserrat',
            address: 'Bernardo de Irigoyen 330, Buenos Aires, Argentina',
            coordinates: [-34.60476574, -58.38589369],
        },
        host: {
            id: '0x1234567890abcdef',
            name: 'Fernando Lluberes',
            rating: 4.5,
        },
        interests: [
            { id: 1, name: 'Politics' },
            { id: 2, name: 'Economics' },
        ]
    },
    {
        id:4,
        date: '2024-08-30',
        location: {
            name: 'La Estadia',
            address: 'Av. Rivadavia 6100, Buenos Aires, Argentina',
            coordinates: [-34.61476574, -58.37589369],
        },
        host: {
            id: '0x1234567890abcdef',
            name: 'Felix Lluberes',
            rating: 4.5,
        },
        interests: [
            { id: 1, name: 'Politics' },
            { id: 3, name: 'Web3' },
        ]
    },
]

export default events;