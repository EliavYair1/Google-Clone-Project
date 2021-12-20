//we gonna use "faker" module to generate fake information into our app
import faker from 'faker';
import { Mappable } from './CustomMap';
//next we gonna install the type defintion module to fake typing npm i @types/faker
//so type script will not return error on the import
export class User implements Mappable {
  firstName: string;
  lastName: string;
  color: string = 'blue';
  location: {
    //location props
    lat: number;
    lng: number;
  };
  constructor() {
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    //we can find "firstName()" on the on the docs or ctrl + click on te command
    this.location = {
      //because lat and lng inside the index.d.ts file declare as "string" we gonna ...
      //convert them into number as we declare in the definition class above using parseFloat()
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `<strong>User Name: ${this.firstName} &nbsp;${this.lastName}</strong>`;
  }
}
