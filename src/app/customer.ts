import {Email} from './email';
import {Address} from './address';
import {PhoneNumber} from './phoneNumber';

export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: Email;
  address: Address;
  phoneNumber: PhoneNumber;
}
