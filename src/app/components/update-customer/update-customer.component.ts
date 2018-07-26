import { Component, OnInit } from '@angular/core';
import { Customer } from '../common/Customer';
import {CustomerService} from '../../services/customer.service';
import swal,{ SweetAlertOptions } from 'sweetalert2';


@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  public _customers :  Customer[];

  public customer :  Customer= new Customer(); 
  
  public id: number;

  public customerForm: HTMLFormElement; 
  
  constructor( private _service: CustomerService) {}

  ngOnInit() 
  {
    this.customerForm = <HTMLFormElement>document.getElementById("customerForm");
    this.getAllCustomers();
  }

  public getAllCustomers() {
    var self = this;
   this._service.getAllCustomers()
     .subscribe(
         customers =>
         {
         for(let c of customers) {
               console.log(c);
             }
             self._customers = customers;
           },
         error =>  console.log(error) 
        );
    }

public getCustomer() {
var self = this;
this._service.getCustomer(this.id)
   .subscribe(
       customer => {
         console.log(customer);
         self.customer=customer;
       }, 
        error =>  console.log(error) 
      );
  }
  
  public updateCustomer ()
  {
var self = this;
this._service.putCustomer(this.id, this.customer)
.subscribe(
  Customer => {
    console.log(Customer);
    swal({
      type: 'success',
      title:'Congratulations!',
      text:'Customer ' + self.customer.customerName + ' was updated.'
      }); 
    self.reset();
  }, 
   error =>  {
    console.log(error);
    swal({
      type: 'error',
      title: 'Error occured!',
      text:'Customer ' + self.customer.customerName + ' cannot be updated.',
      });
    self.reset();    
   }
  );   
  }

public reset () {
this.getAllCustomers();
this.customerForm.reset();
}


}
