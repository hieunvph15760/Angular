import { ProductDetailsComponent } from './pages/client/product-details/product-details.component';
import { ContactComponent } from './pages/client/contact/contact.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './pages/client/home/home.component';
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
        path:'contact',
        component:ContactComponent
      },
      {
        path:'productDetails',
        component:ProductDetailsComponent
      }
    ]
  },
  {
    path:"admin",
    component:AdminLayoutComponent,
    children:[
      {
        path:'',
        redirectTo: 'users',
        pathMatch:'full'
      },
      {
        path:'users',
        component: UserComponent
      },
      {
        path:'products',
        children:[
          {
            path:'',
            component: AdminProductListComponent
          },
          {
            path:'create',
            component:AdminProductFormComponent
          },
          {
            path:'edit/:id',
            component:AdminProductFormComponent
          },
          {
            path:':_id',
            component:AdminProductDetailComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
