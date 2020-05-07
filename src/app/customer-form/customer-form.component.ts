import {Component, OnInit} from '@angular/core';

import {Customer} from '../customer';
import {Address} from '../address';
import {Email} from '../email';
import {PhoneNumber} from '../phoneNumber';

import {CustomerService} from '../customer.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  customers: Customer[];
  checkoutForm;
  newCustomer: Customer;
  newAddress: Address;

  constructor(private customerService: CustomerService, private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
      address: this.formBuilder.group({
        streetName: '',
        houseNumber: '',
        postalCode: '',
        country: ''
      }),
      phoneNumber: ''
    });
  }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(): void {
    this.customerService.getCustomers().subscribe(customers => this.customers = customers);
  }

  onSubmit(customerData) {
    console.log(customerData);
    this.newAddress.streetName = customerData.address.streetName;
    this.newAddress.houseNumber = customerData.address.houseNumber;
    this.newAddress.postalCode = customerData.address.postalCode;
    this.newAddress.country = customerData.address.country;

    this.newCustomer.firstName = customerData.firstName;
    this.newCustomer.lastName = customerData.lastName;
    this.newCustomer.email = customerData.email;
    this.newCustomer.address = this.newAddress;
    this.newCustomer.phoneNumber = customerData.phoneNumber;
    // console.log(this.newAddress);
    // this.customerService.addCustomer(newCustomer).subscribe(customer => this.customers.push(customer));
  }

}
