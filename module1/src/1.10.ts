// union types 

// type FrontendDeveloper = 'fakibazDeveloper' |'juniorDeveloper';

// type FullstackDeveloper = 'fakibazDeveloper' |'expertDeveloper';

// type Developer = FrontendDeveloper | FullstackDeveloper 

// const newDeveloper : FrontendDeveloper = 'fakibazDeveloper'

// type User = {
//     name: string;
//     email?: string;
//     gneder: "male" | "female";
//     bloodGroup: "O+" | "AB+";
// }

// const user1: User = {
//     name: 'persian',
//     gneder: 'male',
//     bloodGroup: 'O+'
// }


// ------------intections types ------------


type FrontendDeveloper  = {
    skills: string[];
    designation1: 'Frontend Developer'
}
type BackendDeveloper  = {
    skills: string[];
    designation2: 'Backend Developer'
}
type FullstackDeveloper  = FrontendDeveloper & BackendDeveloper

const fullstackDeveloper : FullstackDeveloper = {
    skills: ['Html', 'Css', 'JavaScript', 'Express'],
    designation1: 'Frontend Developer',
    designation2: 'Backend Developer'
}