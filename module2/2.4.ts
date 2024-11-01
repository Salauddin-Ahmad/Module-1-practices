// 2-4: Using Generics with Interfaces

// Define a generic interface 'Developer' that can be customized
// with two types: T for 'smartWatch' and X for 'bike', with X defaulting to 'null' if not provided
interface Developer<T, X = null> {
    name: string; // Developer's name

    // Nested 'computer' object containing developer's computer details
    computer: {
        brands: string; // Computer brand
        model: string; // Computer model
        releaseYear: string; // Release year of the computer
    };

    // 'smartWatch' property defined with generic type T
    // The type T will be specified when using the interface
    smartWatch: T;

    // Optional 'bike' property defined with generic type X
    // '?' makes it optional, so it might be undefined
    // Type X is provided at usage, or defaults to 'null'
    bike?: X;
}

// Define a specific type 'EmilabWatch' to represent a smartwatch
type EmilabWatch = {
    brand: string;
    model: string;
    display: string;
};

// Create an object 'poorDeveloper' using the Developer interface
// with 'EmilabWatch' as the type for 'smartWatch' and 'null' for 'bike'
const poorDeveloper: Developer<EmilabWatch, null> = {
    name: 'persian',
    computer: {
        brands: 'asus',
        model: 'x-sfsef',
        releaseYear: '2021',
    },

    // 'smartWatch' follows the 'EmilabWatch' type structure
    smartWatch: {
        brand: 'emilab',
        model: 'watch-33',
        display: 'oled',
    }
    // 'bike' is not included here since it is 'null' and optional
}

// Define an interface 'AppleWatch' with additional smartwatch details
interface AppleWatch {
    brand: string;
    model: string;
    display: string;
    heartTrack: boolean;
    sleepTrack: boolean;
    releaseYear: number;
}

// Define an interface 'YamahaBike' representing bike details
interface YamahaBike {
    model: string;
    engineCapacity: string;
}

// Create an object 'richDeveloper' using the Developer interface
// with 'AppleWatch' as the type for 'smartWatch' and 'YamahaBike' for 'bike'
const richDeveloper: Developer<AppleWatch, YamahaBike> = {
    name: 'Rich Developer',

    // Computer details nested within the developer object
    computer: {
        brands: 'Alienware',
        model: 'x-sfsef',
        releaseYear: '2021',
    },

    // 'smartWatch' follows the 'AppleWatch' interface structure
    smartWatch: {
        brand: 'apple',
        model: 'watchseries7',
        releaseYear: 2022,
        display: 'oled',
        heartTrack: true,
        sleepTrack: true,
    },

    // 'bike' follows the 'YamahaBike' interface structure
    bike: {
        model: 'Yamaha',
        engineCapacity: '100cc',
    }
}
