export interface UserDetails{
    id: number,
    firstName: string,
    middleName: string,
    lastName: string,
    gender: string,
    age: number,
    dateOfBirth: Date,
    hobbies: Hobbies[]
    }

    interface Hobbies{
        hobbie:string 
    }