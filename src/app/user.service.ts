import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  users:any[] = [];

  getUsers(){
    return this.users;
  }

  addUsers(data:any){
    console.log(data.users);
    this.users.push(...data.users)
    console.log('users',this.users);
  }

  editUser(id:number,data:any){
    let index = this.users.findIndex((user)=>user.id==id);
    this.users[index].Name=data.Name;
    this.users[index].Email=data.Email;
    this.users[index].Mno=data.Mno;
  }
}
