import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ComponentComponent } from './component/component.component';
import { HomeComponent } from './pages/client/home/home.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';
import {HttpClientModule} from "@angular/common/http";
import { ProductsComponent } from './pages/client/products/products.component';
import { ProductDetailsComponent } from './pages/client/product-details/product-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/auth/login/login.component';
import { CategoriesListComponent } from './pages/admin/admin-categories/categories-list/categories-list.component';
import { CategoriesFormComponent } from './pages/admin/admin-categories/categories-form/categories-form.component';
import { ToastrModule } from 'ngx-toastr';
import { RegisterComponent } from './pages/auth/register/register.component';
import { CartComponent } from './pages/client/cart/cart.component';
import { CheckOutComponent } from './pages/client/check-out/check-out.component';
import { ListUsersComponent } from './pages/admin/admin-users/list-users/list-users.component';
import { UsersFormComponent } from './pages/admin/admin-users/users-form/users-form.component';
import { AdminOrderComponent } from './pages/admin/admin-order/admin-order.component';
import { AdminOrderDetailsComponent } from './pages/admin/admin-order-details/admin-order-details.component';


registerLocaleData(en);
@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    HomeComponent,
    ClientLayoutComponent,
    AdminLayoutComponent,
    AdminProductListComponent,
    AdminProductFormComponent,
    AdminProductDetailComponent,
    ProductsComponent,
    ProductDetailsComponent,
    LoginComponent,
    CategoriesListComponent,
    CategoriesFormComponent,
    RegisterComponent,
    CartComponent,
    CheckOutComponent,
    ListUsersComponent,
    UsersFormComponent,
    AdminOrderComponent,
    AdminOrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
