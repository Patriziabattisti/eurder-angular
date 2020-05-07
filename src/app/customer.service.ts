import {Injectable} from '@angular/core';
import {Customer} from './customer';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customerUrl = 'http://localhost:9000/customers';

  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

  constructor(private http: HttpClient) {
  }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customerUrl);
  }

  addCustomer(customer: Customer): Observable<Customer> {

    return this.http.post<Customer>(this.customerUrl, customer, this.httpOptions);
  }
}
