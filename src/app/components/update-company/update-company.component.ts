import { Component, OnInit } from '@angular/core';
import { Company } from '../common/Company';
import {CompanyService} from '../../services/company.service';
import swal,{ SweetAlertOptions } from 'sweetalert2';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  public  _companies: Company[];  

  public id: number;

  public company :  Company= new Company();

  public companyForm: HTMLFormElement;
  
 constructor( private _service :CompanyService) {}

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
      
 public updateCompany ()
      {
    var self = this;
    this._service.putCompany(this.id, this.company)
    .subscribe(
      response => {
        console.log(response);
       swal({
        type: 'success',
        title:'Congratulations!',
        text:'Company ' + self.company.companyName + ' was updated.'
        }); 
        self.reset();
      }, 
       error =>  {
        console.log(error);
        swal({
          type: 'error',
          title: 'Error occured!',
          text: 'Company ' + self.company.companyName + ' cannot be updated.',
          });
        self.reset();    
       }
      );   
      }

public reset () {
  this.getAllCompanies();
  this.companyForm.reset();
}

}
