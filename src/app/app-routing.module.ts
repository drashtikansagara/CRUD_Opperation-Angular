import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRemoveComponent } from './add-remove/add-remove.component';
import { ShowdetailsComponent } from './showdetails/showdetails.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';

const routes: Routes = [
  {
    path:'',
    component:AddRemoveComponent
  },
  {
    path:'details',
    component:ShowdetailsComponent
  },
  {
    path:'edit/:id',
    component:EditDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
