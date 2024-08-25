export type MeetupEvent = {
    id: number;
    date: ReturnType<Date['toISOString']>;
    location: {
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