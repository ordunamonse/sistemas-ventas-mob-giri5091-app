import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.modules';
import { MaterialModule } from '../../material.modules';

@NgModule({
  declarations: [
    UserComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
    MaterialModule
  ]
})
export class UserModule { }