import { Component, OnInit } from '@angular/core';
import { Customer } from '../common/Customer';
import {CustomerService} from '../../services/customer.service';

@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.css']
})
export class GetAllCustomersComponent implements OnInit {

  public _customers : Customer[];
  
    constructor(private _service: CustomerService) {}
 

    ngOnInit() 
    {
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
  

  

}
