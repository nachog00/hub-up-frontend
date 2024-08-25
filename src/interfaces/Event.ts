export type MeetupEvent = {
    id: number;
    date: ReturnType<Date['toISOString']>;
    duration: number;
    minParticipants: number;
    maxParticipants: number;
    description: string;
    atendeeLockupAmount: number;
    price: number;
    costDescription: string;
    protocol: 'avalanche' | 'polygon' | 'arbitrum';
    location: {
        id: number;
        name: string;
        address: string;
        coordinates: [number, number];
    };
    host: {
        name: string;
        id: string;
        rating: number;
        bio?: string;
    };
    interests: Interest[];
}

type Interest = {
    id: number;
    name: string;
}