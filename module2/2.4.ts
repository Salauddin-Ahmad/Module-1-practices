// 2-4: Generic with Interface

// generic interface

interface Developer<T , X = null > {
    name: string;
    computer: {
        brands: string;
        model: string;
        releaseYear: string;
    }
    smartWatch: T;
    bike? : X
}




type EmilabWatch = {

    brand: string;
    model: string;
    display: string;
 

}


const poorDeveloper : Developer<EmilabWatch, null> = {
name: 'persian',
computer: {
    brands: 'asus',
    model: 'x-sfsef',
    releaseYear: '2021'
},

smartWatch: {
    brand: 'emilab',
    model: 'watch-33',
    display:'oled',
}

}

interface AppleWatch {
        brand: string;
        model: string;
        display: string;
        heartTrack: boolean;
        sleepTrack: boolean;
        releaseYear: number;
    
}

interface YamahaBike {
    model: string;
    engineCapacity: string;
}


const richDeveloper : Developer<AppleWatch, YamahaBike> = {
name: 'Rich Developer',
computer: {
    brands: 'Alienware',
    model: 'x-sfsef',
    releaseYear: '2021',

},

smartWatch: {
    brand: 'apple',
    model: 'watchseries7',
    releaseYear: 2022,
    display:'oled',
    heartTrack: true,
    sleepTrack: true,
},
bike: {
    model: 'Yamaha',
    engineCapacity: '100cc',

}

}