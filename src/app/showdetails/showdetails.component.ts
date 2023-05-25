import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-showdetails',
  templateUrl: './showdetails.component.html',
  styleUrls: ['./showdetails.component.css']
})
export class ShowdetailsComponent {
  editForm: any;
  constructor(private userService:UserService,private fb:FormBuilder, private router: Router){}
  id!:number;
  users:any=[];
  //editForm!:FormGroup;

  ngOnInit(){
    this.users = this.userService.getUsers();

  }

  onEdit(user:any){
    //this.userService.editUser(this.id,this.editForm.value);
    //console.log(this.editForm.value);
    this.router.navigate(['/edit',user.id]);
  }
}
