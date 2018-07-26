import { Component, OnInit } from '@angular/core';
import { Company } from '../common/Company';
import {CompanyService} from '../../services/company.service'
import swal,{ SweetAlertOptions } from 'sweetalert2';

@Component({
  selector: 'app-remove-company',
  templateUrl: './remove-company.component.html',
  styleUrls: ['./remove-company.component.css']
})
export class RemoveCompanyComponent implements OnInit {

  public  _companies: Company[];  

  public id: number;

  public company :  Company= new Company();

  public companyForm: HTMLFormElement;
   
  constructor( private _service :CompanyService) {}
//private _http: Http, 

  ngOnInit() {
    this.getAllCompanies();
    this.companyForm = <HTMLFormElement>document.getElementById("companyForm");
   }

   public getAllCompanies() {
    var self = this;
   this._service.getAllCompanies()
     .subscribe(
         companies =>
         {
         for(let c of companies) {
               console.log(c);
             }
             self._companies = companies;
           },
         error =>  console.log(error) 
        );
    }

public getCompany() {
    var self = this;
    this._service.getCompany(this.id)
       .subscribe(
           company => {
             console.log(company);
             self.company=company;
           }, 
            error =>  console.log(error) 
          );
      }

      public removeCompany() {
      var self = this;
      swal({
        title: 'Are you sure?',
        text: 'Do you want to remove company ' + this.company.companyName +'?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, remove!'
      }).then((result) => {
        if (result.value) {
          this._service.deleteCompany(this.id)
          .subscribe(
                       response =>
                        {
                         console.log(response);
                         swal(
                          'Deleted!',
                          'The company was removed.',
                          'success'
                        );
                         self.reset();
                        },
                       error =>
                          {
                          console.log(error);  
                          swal(
                            'Error Occured',
                            'The comapny was not removed.',
                            'error'
                          );
                          self.reset();
                        }  
                        );
        }
        else if (result.dismiss === swal.DismissReason.cancel) {
          swal(
            'Cancelled',
            'The company was not removed.',
            'error'
          );
          self.reset(); 
        }
      })
    } 

public reset () {
  this.getAllCompanies();
  this.companyForm.reset();
}


}
  


