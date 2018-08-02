import { Injectable } from '@angular/core';
import { Company } from '../components/common/Company';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { FormGroup, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';


@Injectable()
export class CompanyService {

public url = 'getcompany';

// dependency injection for http object
constructor(private _http : Http) {
 }

public getAllCompanies()  {
 return this._http.get(this.url)
    .map(response=> response.json());
}

public getCompany (id: number) {
   return this._http.get(this.url +'/'+id)
   .map(response=> response.json());
}

public postCompany (company: Company) {
  return this._http.post(this.url, company)
}

public putCompany (id: number, company: Company) {
  return this._http.put(this.url +'/'+id, company);
}

public deleteCompany (id: number) {
  return this._http.delete(this.url +'/'+id);
}  


}
