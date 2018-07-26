import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CreateCompanyComponent } from './components/create-company/create-company.component';
import { GetAllCompaniesComponent } from './components/get-all-companies/get-all-companies.component';
import { GetCompanyComponent } from './components/get-company/get-company.component';
import { UpdateCompanyComponent } from './components/update-company/update-company.component';
import { RemoveCompanyComponent } from './components/remove-company/remove-company.component';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { RemoveCustomerComponent } from './components/remove-customer/remove-customer.component';
import { GetCustomerComponent } from './components/get-customer/get-customer.component';
import { GetAllCustomersComponent } from './components/get-all-customers/get-all-customers.component';

import {CompanyService} from './services/company.service'
import {CustomerService} from './services/customer.service';
import { HeaderComponent } from './components/header/header.component'

@NgModule({
  declarations: [
    AppComponent,
    CreateCompanyComponent,
    GetAllCompaniesComponent,
    GetCompanyComponent,
    UpdateCompanyComponent,
    RemoveCompanyComponent,
    CreateCustomerComponent,
    UpdateCustomerComponent,
    RemoveCustomerComponent,
    GetCustomerComponent,
    GetAllCustomersComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
    {
      path: 'createcompany',
      component: CreateCompanyComponent
  },

      {
          path: 'updatecompany',
          component: UpdateCompanyComponent
      },

      {
        path: 'removecompany',
        component: RemoveCompanyComponent
    },

    {
      path: 'getcompany',
      component: GetCompanyComponent
  },
      {
          path: 'getallcompanies',
          component: GetAllCompaniesComponent
      },

      {
        path: 'createcustomer',
        component: CreateCustomerComponent
    },
  
        {
            path: 'updatecustomer',
            component: UpdateCustomerComponent
        },
  
        {
          path: 'removecustomer',
          component: RemoveCustomerComponent
      },
  
      {
        path: 'getcustomer',
        component: GetCustomerComponent
    },
        {
            path: 'getallcustomers',
            component: GetAllCustomersComponent
        }

  ])
  ],

  providers: [CompanyService, CustomerService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
