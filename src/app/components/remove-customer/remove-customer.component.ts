import { Component, OnInit } from '@angular/core';
import { Customer } from '../common/Customer';
import {CustomerService} from '../../services/customer.service';
import swal,{ SweetAlertOptions } from 'sweetalert2';

@Component({
  selector: 'app-remove-customer',
  templateUrl: './remove-customer.component.html',
  styleUrls: ['./remove-customer.component.css']
})
export class RemoveCustomerComponent implements OnInit {

  public _customers :  Customer[];

  public customer :  Customer= new Customer(); 
  
  public id: number;

  public customerForm: HTMLFormElement; 
  
  constructor(private _service: CustomerService) {}

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

public removeCustomer() {
  var self = this;
  swal({
    title: 'Are you sure?',
    text: 'Do you want to remove customer ' + this.customer.customerName +'?',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, remove!'
  }).then((result) => {
    if (result.value) {
      this._service.deleteCustomer(this.id)
      .subscribe(
                   response =>
                    {
                     console.log(response);
                     swal(
                      'Deleted!',
                      'The customer was removed.',
                      'success'
                    );
                     self.reset();
                    },
                   error =>
                      {
                      console.log(error);  
                      swal(
                        'Error Occured',
                        'The customer was not removed.',
                        'error'
                      );
                      self.reset();
                    }  
                    );
    }
    else if (result.dismiss === swal.DismissReason.cancel) {
      swal(
        'Cancelled',
        'The customer was not removed.',
        'error'
      );
      self.reset(); 
    }
  })
} 

  public reset () {
    this.getAllCustomers();
    this.customerForm.reset();
    }


}
