// [Sarit Center, Karuna Road, Nairobi]
// [TRM, Thika Rd, Nairobi]
// [Garden City, Thika Rd, Nairobi]
// [Kencom House, City-Hall Way, Nairobi]
// [Kencom Sacco, Moi Avenue, Nairobi]
// [Kenchic Outlet, Rungiri, Kenya]
// [Kencom Homes Swimming Pool, Kiambu, kenya]
// [Kenyatta University, Uhuru Lane, Nairobi]
// [Carnivore grounds, Langata Rd, Nairobi]

export type Place = {
    id: string;
    name: string;
    location: string;
    type: string;
    popular: boolean;
}

export const places: Place[] = [
    {
        id: '1',
        name: 'Sarit Center',
        location: 'Karuna Road, Nairobi',
        type: 'mall',
        popular: false,
    },
    {
        id: '2',
        name: 'TRM',
        location: 'Thika Rd, Nairobi',
        type: 'hotel',
        popular: false,
    },
    {
        id: '3',
        name: 'Garden City',
        location: 'Thika Rd, Nairobi',
        type: 'hospital',
        popular: false,
    },
    
    {
        id: '4',
        name: 'Kencom House',
        location: 'City-Hall Way, Nairobi',
        type: 'mall',
        popular: true,
    },
    
    {
        id: '5',
        name: 'Kenchic Outlet',
        location: 'Rungiri, Kenya',
        type: 'hotel',
        popular: true,
    },
    {
        id: '6',
        name: 'Kencom Homes Swimming Pool',
        location: 'Kiambu, kenya',
        type: 'club',
        popular: false,
    },
    {
        id: '7',
        name: 'Kenyatta University',
        location: 'Uhuru Lane, Nairobi',
        type: 'mall',
        popular: false,
    },

    {
        id: '8',
        name: 'Carnivore grounds',
        location: 'Langata Rd, Nairobi',
        type: 'club',
        popular: false,
    },
]


// [Ummoinner / Utimo, 45/60, 1, Tusker/Ronald Ngala, 10:00am-10:45am|45 min, 60-100, 4:00pm-8:00pm]
// [Huruma Sacco, 46H, 1, Tea Room, 10:00am-10:45am|45 min, 60-100, 4:00pm-8:00pm]
// [Super Metro, 120,1, Bus Station, 10:00am-10:45am|45 min, 60-100, 4:00pm-8:00pm]
// [Kibera Liner, 10B,1, Bus Station, 10:00am-10:45am|45 min, 60-100, 4:00pm-8:00pm]
// [North Rift, 13A,1, Afya Center, 10:00am-10:45am|45 min, 60-100, 4:00pm-8:00pm]
// [Mood,13C,1, GPO, 10:00am-10:45am|45 min, 60-100, 4:00pm-8:00pm]

export type FromAndDestinationCombination = {
    id: string;
    routeNo: string;
    name: string;
    from: string;
    to: string;
    time: string;
    travelMins: number;
    cost: number;
    peakTime: string;
}

export type MatatuRoute = {
    id: string;
    name: string;
    route: string;
    travelTime: string;
    travelMins: number;
    start: string;
    fare: string;
    peakTime: string;
    mainDestination: string
    secondaryDestination: string[]
}

export const matatuRoutes: MatatuRoute[] = [
    {
        id: '1',
        name: 'Ummoinner / Utimo',
        route: '45A',
        travelTime: '10:00am-10:45am',
        travelMins: 45,
        start: 'Tusker/Ronald Ngala',
        fare: '60-100',
        peakTime: '4:00pm-8:00pm',
        mainDestination: '1',
        secondaryDestination: ['2', '3']
    },
    {
        id: '2',
        name: 'Huruma Sacco',
        route: '46H',
        travelTime: '10:00am-10:45am',
        travelMins: 50,
        start: 'Tea Room',
        fare: '60-100',
        peakTime: '4:00pm-8:00pm',
        mainDestination: '2',
        secondaryDestination: ['1', '3']
    },
    {
        id: '3',
        name: 'Super Metro',
        route: '120',
        travelTime: '10:00am-10:45am',
        travelMins: 20,
        start: 'Bus Station',
        fare: '60-100',
        peakTime: '4:00pm-8:00pm',
        mainDestination: '3',
        secondaryDestination: ['1', '2']
    },
    {
        id: '4',
        name: 'Kibera Liner',
        route: '10B',
        travelTime: '10:00am-10:45am',
        travelMins: 40,
        start: 'Bus Station',
        fare: '60-100',
        peakTime: '4:00pm-8:00pm',
        mainDestination: '4',
        secondaryDestination: ['1', '2']
    },
    {
        id: '5',
        name: 'North Rift',
        route: '13A',
        travelTime: '10:00am-10:45am',
        travelMins: 40,
        start: 'Afya Center',
        fare: '60-100',
        peakTime: '4:00pm-8:00pm',
        mainDestination: '5',
        secondaryDestination: ['1', '2']
    },
    {
        id: '6',
        name: 'Mood',
        route: '13C',
        travelTime: '10:00am-10:45am',
        travelMins: 40,
        start: 'GPO',
        fare: '60-100',
        peakTime: '4:00pm-8:00pm',
        mainDestination: '6',
        secondaryDestination: ['1', '2']
    },
]

export const fromAndDestinationCombination: FromAndDestinationCombination[] = [
    {
        id: '1',
        routeNo: '45A',
        name: 'Ummoinner / Utimo',
        from: '1',
        to: '2',
        time: '10:00am-10:45am',
        travelMins: 45,
        cost: 10,
        peakTime: '4:00pm-8:00pm',
    },
    {
        id: '2',
        routeNo: '45B',
        name: 'Kibera Liner',
        from: '1',
        to: '2',
        time: '10:00am-10:45am',
        travelMins: 45,
        cost: 20,
        peakTime: '4:00pm-8:00pm',
    },
    {
        id: '3',
        routeNo: '45C',
        from: '1',
        name: 'Ummoinner / Utimo',
        to: '4',
        time: '10:00am-10:45am',
        travelMins: 45,
        cost: 30,
        peakTime: '4:00pm-8:00pm',
    },
    {
        id: '4',
        routeNo: '45D',
        name: 'Huruma Sacco',
        from: '1',
        to: '5',
        time: '10:00am-10:45am',
        travelMins: 45,
        cost: 40,
        peakTime: '4:00pm-8:00pm',
    },
    {
        id: '5',
        routeNo: '45E',
        name: 'Super Metro',
        from: '1',
        to: '6',
        time: '10:00am-10:45am',
        travelMins: 45,
        cost: 50,
        peakTime: '4:00pm-8:00pm',
    },
    {
        id: '6',
        routeNo: '45F',
        name: 'Kibera Liner',
        from: '1',
        to: '7',
        time: '10:00am-10:45am',
        travelMins: 45,
        cost: 60,
        peakTime: '4:00pm-8:00pm',
    },
    {
        id: '7',
        routeNo: '45G',
        name: 'North Rift',
        from: '1',
        to: '8',
        time: '10:00am-10:45am',
        travelMins: 45,
        cost: 70,
        peakTime: '4:00pm-8:00pm',
    },
    {
        id: '8',
        routeNo: '120A',
        name: 'Ummoinner / Utimo',
        from: '2',
        to: '1',
        time: '10:00am-10:45am',
        travelMins: 45,
        cost: 80,
        peakTime: '4:00pm-8:00pm',
    },
    {
        id: '9',
        routeNo: '120B',
        name: 'Huruma Sacco',
        from: '2',
        to: '3',
        time: '10:00am-10:45am',
        travelMins: 45,
        cost: 90,
        peakTime: '4:00pm-8:00pm',
    },
    {
        id: '10',
        routeNo: '120C',
        name: 'Super Metro',
        from: '2',
        to: '4',
        time: '10:00am-10:45am',
        travelMins: 45,
        cost: 100,
        peakTime: '4:00pm-8:00pm',
    },
    {
        id: '11',
        routeNo: '120D',
        name: 'Kibera Liner',
        from: '2',
        to: '5',
        time: '10:00am-10:45am',
        travelMins: 45,
        cost: 110,
        peakTime: '4:00pm-8:00pm',
    },
    {
        id: '12',
        routeNo: '120E',
        name: 'North Rift',
        from: '2',
        to: '6',
        time: '10:00am-10:45am',
        travelMins: 45,
        cost: 120,
        peakTime: '4:00pm-8:00pm',
    },
    {
        id: '13',
        routeNo: '120F',
        name: 'Mood',
        from: '2',
        to: '7',
        time: '10:00am-10:45am',
        travelMins: 45,
        cost: 130,
        peakTime: '4:00pm-8:00pm',
    },
    {
        id: '14',
        routeNo: '120G',
        name: 'Mood',
        from: '2',
        to: '8',
        time: '10:00am-10:45am',
        travelMins: 45,
        cost: 140,
        peakTime: '4:00pm-8:00pm',
    }, 
    {
        id: '15',
        routeNo: '70H',
        name: 'Ummoinner / Utimo',
        from: '3',
        to: '1',
        time: '10:00am-10:45am',
        travelMins: 45,
        cost: 150,
        peakTime: '4:00pm-8:00pm',
    },
    {
        id: '16',
        routeNo: '70I',
        name: 'Huruma Sacco',
        from: '3',
        to: '2',
        time: '10:00am-10:45am',
        travelMins: 45,
        cost: 160,
        peakTime: '4:00pm-8:00pm',
    },
    {
        id: '17',
        routeNo: '56',
        name: 'Super Metro',
        from: '3',
        to: '4',
        time: '10:00am-10:45am',
        travelMins: 45,
        cost: 170,
        peakTime: '4:00pm-8:00pm',
    },
    {
        id: '18',
        routeNo: '56B',
        name: 'Kibera Liner',
        from: '3',
        to: '5',
        time: '10:00am-10:45am',
        travelMins: 45,
        cost: 180,
        peakTime: '4:00pm-8:00pm',
    },
    {
        id: '19',
        routeNo: '56C',
        name: 'North Rift',
        from: '3',
        to: '6',
        time: '10:00am-10:45am',
        travelMins: 45,
        cost: 190,
        peakTime: '4:00pm-8:00pm',
    },
    {
        id: '20',
        routeNo: '56D',
        name: 'Mood',
        from: '4',
        to: '1',
        time: '10:00am-10:45am',
        travelMins: 45,
        cost: 200,
        peakTime: '4:00pm-8:00pm',
    },
    {
        id: '21',
        routeNo: '56E',
        name: 'Mood',
        from: '4',
        to: '2',
        time: '10:00am-10:45am',
        travelMins: 45,
        cost: 210,
        peakTime: '4:00pm-8:00pm',
    },
    {
        id: '22',
        routeNo: '56F',
        name: 'Mood',
        from: '4',
        to: '3',
        time: '10:00am-10:45am',
        travelMins: 45,
        cost: 220,
        peakTime: '4:00pm-8:00pm',
    },
    {
        id: '23',
        routeNo: '56G',
        name: 'Mood',
        from: '4',
        to: '5',
        time: '10:00am-10:45am',
        travelMins: 45,
        cost: 230,
        peakTime: '4:00pm-8:00pm',
    },
    {
        id: '24',
        routeNo: '56H',
        name: 'Mood',
        from: '4',
        to: '6',
        time: '10:00am-10:45am',
        travelMins: 45,
        cost: 240,
        peakTime: '4:00pm-8:00pm',
    },
    {
        id: '25',
        routeNo: '70',
        name: 'Mood',
        from: '4',
        to: '7',
        time: '10:00am-10:45am',
        travelMins: 45,
        cost: 250,
        peakTime: '4:00pm-8:00pm',
    },
    {
        id: '26',
        routeNo: '34',
        name: 'Ummoinner / Utimo',
        from: '4',
        to: '8',
        time: '10:00am-10:45am',
        travelMins: 45,
        cost: 260,
        peakTime: '4:00pm-8:00pm',
    },
    {
        id: '27',
        routeNo: '48',
        name: 'Huruma Sacco',
        from: '5',
        to: '1',
        time: '10:00am-10:45am',
        travelMins: 45,
        cost: 270,
        peakTime: '4:00pm-8:00pm',
    },
    {
        id: '28',
        routeNo: '45Z',
        name: 'Super Metro',
        from: '5',
        to: '2',
        time: '10:00am-10:45am',
        travelMins: 45,
        cost: 280,
        peakTime: '4:00pm-8:00pm',
    },
    {
        id: '29',
        routeNo: '45Y',
        name: 'Kibera Liner',
        from: '5',
        to: '3',
        time: '10:00am-10:45am',
        travelMins: 45,
        cost: 290,
        peakTime: '4:00pm-8:00pm',
    },
    {
        id: '30',
        routeNo: '45X',
        name: 'North Rift',
        from: '5',
        to: '4',
        time: '10:00am-10:45am',
        travelMins: 45,
        cost: 300,
        peakTime: '4:00pm-8:00pm',
    },
    {
        id: '31',
        routeNo: '45W',
        name: 'Mood',
        from: '5',
        to: '6',
        time: '10:00am-10:45am',
        travelMins: 45,
        cost: 310,
        peakTime: '4:00pm-8:00pm',
    },
    {
        id: '32',
        routeNo: '45V',
        name: 'Huruma Sacco',
        from: '5',
        to: '7',
        time: '10:00am-10:45am',
        travelMins: 45,
        cost: 320,
        peakTime: '4:00pm-8:00pm',
    },
    {
        id: '33',
        routeNo: '45U',
        name: 'Ummoinner / Utimo',
        from: '5',
        to: '8',
        time: '10:00am-10:45am',
        travelMins: 45,
        cost: 330,
        peakTime: '4:00pm-8:00pm',
    },
]