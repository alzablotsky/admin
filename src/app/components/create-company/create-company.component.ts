import { Component, OnInit } from '@angular/core';
//import { Http  } from '@angular/http';
//import 'rxjs/add/operator/map';
import { Company } from '../common/Company';
import {CompanyService} from '../../services/company.service';
import swal,{ SweetAlertOptions } from 'sweetalert2';


@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

public company :  Company= new Company();

public companyForm: HTMLFormElement;

 
  constructor( private _service: CompanyService ) {}
//private _http : Http,

  ngOnInit() {
    this.companyForm = <HTMLFormElement>document.getElementById("companyForm");
 }
   
   
public createCompany () {
 var self = this;
this._service.postCompany(this.company)
.subscribe(
             response =>
              {
               console.log(response);
               //alert("Company " + self.company.companyName + " was successfully created.");
               swal({
                type: 'success',
                title:'Congratulations!',
                text:'Company ' + self.company.companyName + ' was created.'
                });
               self.reset();
              },
             error =>
                {
                console.log(error);  
                //alert("Error occured. Company " + self.company.companyName + "  cannot be created.");
                swal({
                  type: 'error',
                  title: 'Error occured!',
                  text: 'Company ' + self.company.companyName + ' cannot be created.'
                  });
                self.reset();
              }  
              );
 }

 public reset () {
   this.companyForm.reset();
}

}
