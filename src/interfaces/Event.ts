export type MeetupEvent = {
    date: ReturnType<Date['toISOString']>;
    location: {
        name: string;
    };
    host: {
        name: string;
        id: string;
    };
}