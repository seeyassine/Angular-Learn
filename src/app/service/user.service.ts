import { Injectable } from "@angular/core"

// Injectable ({
//     providedIn: 'root',
// } )

export class UserService {
    users: Array<any> = [
        {name:'amine', age:30 , email:'seeyassine@gmail.com'},
        {name:'anas', age:20 , email:'anas@gmail.com'},
    ]

    constructor(){
        console.log('User Service new instance created.');
    }
}