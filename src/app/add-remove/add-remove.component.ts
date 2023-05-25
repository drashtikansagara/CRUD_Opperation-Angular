import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ConfirmPasswordValidator } from '../custom-validator';
  

@Component({
  selector: 'app-add-remove',
  templateUrl: './add-remove.component.html',
  styleUrls: ['./add-remove.component.css']
})
export class AddRemoveComponent implements OnInit{
  constructor(private fb:FormBuilder,private userService:UserService,private router:Router){}
  userForm!:FormGroup;
  submitted = false;
  get users(){
    return this.userForm.get('users') as FormArray;
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
        users : this.fb.array([this.fb.group({
          id:new FormControl(Math.floor(Math.random()*1000)),
          Name:['', Validators.required],
          Email:new FormControl('',[
            Validators.required, 
            Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
          mobileNumber :['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
          password : ['', Validators.required],
          cpassword : ['', Validators.required]
        },
        {
          validator: ConfirmPasswordValidator("password", "cpassword")
        })])
    })
  }

  get control(){
    return this.userForm.controls;
  }
  

  addUser(){
    this.users.push(this.fb.group({
      id:new FormControl(Math.floor(Math.random()*1000)),
      Name:['', Validators.required],
          Email:new FormControl('',[
            Validators.required, 
            Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
          mobileNumber :['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
          password : ['', Validators.required],
          cpassword : ['', Validators.required]
    },
    {
      validator: ConfirmPasswordValidator("password", "cpassword")
    }));
  }

  removeUser(i:number){
    this.users.removeAt(i);
  }

  onSubmit(){
    this.userService.addUsers(this.userForm.value);
    // console.log(this.userForm.value);
    this.router.navigate(['details']);
  }
}
