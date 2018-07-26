import { Component, OnInit } from '@angular/core';
//import { Http } from '@angular/http';
import { Customer } from '../common/Customer';
import {CustomerService} from '../../services/customer.service';
import swal,{ SweetAlertOptions } from 'sweetalert2';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

public customer :  Customer= new Customer();

public customerForm: HTMLFormElement;

constructor(private _service : CustomerService) {}
//private _http : Http, 

ngOnInit() {
 this.customerForm = <HTMLFormElement>document.getElementById("customerForm");
 }
   
   
 public createCustomer () {
  var self = this;
 this._service.postCustomer(this.customer)
 .subscribe(
              response =>
               {
                console.log(response);
                //alert("Customer " + self.customer.customerName + " was successfully created.");
                swal({
                  type: 'success',
                  title:'Congratulations!',
                  text:'Customer ' + self.customer.customerName + ' was created.'
                  });
                  self.reset();
               },
              error =>
                 {
                 console.log(error);  
                 //alert("Error occured. Customer " + self.customer.customerName + "  cannot be created.");
                 swal({
                  type: 'error',
                  title: 'Error occured!',
                  text: 'Customer ' + self.customer.customerName + ' cannot be created.'
                  });
                 self.reset();
               }  
               );
  }
 
public reset () {
  this.customerForm.reset();
 }

}
