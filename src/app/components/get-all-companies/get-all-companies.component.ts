import { Component, OnInit } from '@angular/core';
import { Company } from '../common/Company';
import {CompanyService} from '../../services/company.service';

@Component({
  selector: 'app-get-all-companies',
  templateUrl: './get-all-companies.component.html',
  styleUrls: ['./get-all-companies.component.css']
})


export class GetAllCompaniesComponent implements OnInit {

  _companies: Company[];

  constructor(private _service: CompanyService) {}


  ngOnInit() {
    this.getAllCompanies();
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


}
