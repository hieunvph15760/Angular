import { AdminOrderDetailsComponent } from './pages/admin/admin-order-details/admin-order-details.component';
import { UsersFormComponent } from './pages/admin/admin-users/users-form/users-form.component';
import { ListUsersComponent } from './pages/admin/admin-users/list-users/list-users.component';
import { CheckOutComponent } from './pages/client/check-out/check-out.component';
import { CartComponent } from './pages/client/cart/cart.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { ProductsComponent } from './pages/client/products/products.component';
import { CanAccessAdminGuard } from './guards/can-access-admin.guard';
import { CategoriesFormComponent } from './pages/admin/admin-categories/categories-form/categories-form.component';
import { CategoriesListComponent } from './pages/admin/admin-categories/categories-list/categories-list.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { ProductDetailsComponent } from './pages/client/product-details/product-details.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { HomeComponent } from './pages/client/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminOrderComponent } from './pages/admin/admin-order/admin-order.component';

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
        path:'products',
        component:ProductsComponent
      },
      {
        path:'productDetails/:_id',
        component:ProductDetailsComponent
      },
      {
        path:'cart',
        component:CartComponent
      },
      {
        path:'checkOut',
        component:CheckOutComponent
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
      },
      {
        path:'users',
        children:[
          {
            path:'',
            component:ListUsersComponent
          },
          {
            path:'create',
            component:UsersFormComponent
          }
        ]
      },
      {
        path:'order',
        children:[
          {
            path:'',
            component:AdminOrderComponent
          },
          {
            path:'orderDetails/:_id',
            component:AdminOrderDetailsComponent
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
