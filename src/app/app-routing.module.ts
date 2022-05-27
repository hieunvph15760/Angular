import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: ClientLayoutComponent,
    children:[
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'user',
        component:UserComponent
      }
    ]
  },
  // {
  //   path:'user',
  //   component:UserComponent,
  //   children:[
  //     // {
  //     //   path:'',
  //     //   component: UserComponent
  //     // },
  //     {
  //       path:'create',
  //       component:UserFormComponent
  //     },
  //     {
  //       path:'edit',
  //       component:UserComponent
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
