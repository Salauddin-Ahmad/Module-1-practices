{
//  spread operator

const bros1: string[] = ['Mir' , 'Firoz', "Mizan"] 
const bros2: string[] = ['Tonmoy' , 'Nahid', "Rahat"] 

bros1.push(...bros2)
console.log(bros1)


const mentors1 = {
    typescript: 'Mezba',
    redux: 'Mir',
    dbms: 'mizan',

}

const mentors2 = {
    prisma: 'Firoz',
    next: 'Tanmoy',
    cloud: 'Nahid',
}

const mentorList = {
   ...mentors1,
   ...mentors2
}


// rest operator

const greetFriends = (...friends: string[]) => {
    // console.log(`Hi ${friend1} ${friend2} ${friend3}`)

    friends.forEach((friend: string) => console.log(`Hi ${friend}`))
};

greetFriends('Abul', 'Kabul', 'Babul', 'ubul', 'lablu')




// destructuring operator

}
