export class User{
    id:number;
    firstName:string;
    lastName:string;
    age:number;
    gender:string;
    phoneNo:string;

    constructor(id:number,firstName:string,lastName: string,age:number, gender:string,phoneNo:string){
        this.id = id;
        this.firstName = firstName;
        this.lastName =lastName;
        this.age=age;
        this.gender=gender;
        this.phoneNo=phoneNo
    }
}