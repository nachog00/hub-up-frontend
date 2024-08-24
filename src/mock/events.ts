import type { MeetupEvent } from "@/interfaces/Event";

   // mock values
const events : MeetupEvent[] = [
    {
        date: '2022-01-01:14:30:00Z',
        location: {
            name: 'The White House',
            address: '1600 Pennsylvania Ave NW, Washington, DC 20500',
            coordinates: [37.5977, -77.0365],
        },
        host: {
            id: '0x1234567890abcdef',
            name: 'Jackie Chan',
            rating: 4.5,
        },
        
    },
    {
        date: '2022-01-02:14:30:00Z',
        location: {
            name: 'The White House',
            address: '1600 Pennsylvania Ave NW, Washington, DC 20500',
            coordinates: [35.8977, -77.0365],
        },
        host: {
            id: '0x1234567890abcdef',
            name: 'Xi Jinping',
            rating: 4.5,
        },
    },
    {
        date: '2022-01-03:14:30:00Z',
        location: {
            name: 'The White House',
            address: '1600 Pennsylvania Ave NW, Washington, DC 20500',
            coordinates: [38.8977, -77.0365],
        },
        host: {
            id: '0x1234567890abcdef',
            name: 'Joe Biden',
            rating: 4.5,
        },
    },
    {
        date: '2022-01-04:14:30:00Z',
        location: {
            name: 'The White House',
            address: '1600 Pennsylvania Ave NW, Washington, DC 20500',
            coordinates: [34.8977, -77.0365],
        },
        host: {
            id: '0x1234567890abcdef',
            name: 'Donald Trump',
            rating: 4.5,
        },
    },
]

export default events;