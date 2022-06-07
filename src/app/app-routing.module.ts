import { RegisterComponent } from './pages/auth/register/register.component';
import { ProductsComponent } from './pages/client/products/products.component';
import { CanAccessAdminGuard } from './guards/can-access-admin.guard';
import { CategoriesFormComponent } from './pages/admin/admin-categories/categories-form/categories-form.component';
import { CategoriesListComponent } from './pages/admin/admin-categories/categories-list/categories-list.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { ProductDetailsComponent } from './pages/client/product-details/product-details.component';
import { ContactComponent } from './pages/client/contact/contact.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
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
        path:'products',
        component:ProductsComponent
      },
      {
        path:'productDetails/:_id',
        component:ProductDetailsComponent
      }
    ]
  },
  {
    path:'auth',
    children:[
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'register',
        component:RegisterComponent
      }
    ]
  },
  {
    path:"admin",
    component:AdminLayoutComponent,
    canActivate: [CanAccessAdminGuard],
    children:[
      {
        path:'',
        redirectTo: 'users',
        pathMatch:'full'
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
            path:'edit/:_id',
            component:AdminProductFormComponent
          },
          {
            path:':_id',
            component:AdminProductDetailComponent
          }
        ]
      },
      {
        path:'categories',
        children:[
          {
            path:'',
            component:CategoriesListComponent
          },
          {
            path:'create',
            component:CategoriesFormComponent
          },
          {
            path:'edit/:_id',
            component:CategoriesFormComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanAccessAdminGuard]
})
export class AppRoutingModule { }
