import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent {
  constructor(private userService:UserService,private fb:FormBuilder, private router: Router,private route:ActivatedRoute){}
  id!:number;
  users!:any[];
  user:any;
  editForm!:FormGroup;

  editUser(user:any){
    
    this.id=user.id;
  }

  ngOnInit(){
    this.editForm =this.fb.group({
      Name:['', Validators.required],
          Email:new FormControl('',[
            Validators.required, 
            Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
          mobileNumber :['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    });
    this.id = this.route.snapshot.params['id'];
    this.users = this.userService.getUsers();
    this.user= this.users.find((user)=>user.id==this.id);
    this.editForm.setValue({
      Name:this.user.Name,
      Email:this.user.Email,
      mobileNumber:this.user.mobileNumber
    });
  }

  onSubmit(){
    this.userService.editUser(this.user.id,this.editForm.value);
    console.log(this.editForm.value);
    //this.editForm.reset();
    this.router.navigate(['details']);
  }
}
