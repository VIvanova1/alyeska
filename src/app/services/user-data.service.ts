import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UserData } from '../model/user-data';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  user!: UserData[];
  constructor(private firestore: AngularFirestore) {}

  createEmployee(employee: any) {
    // employee.id = this.firestore.createId()
    this.firestore
      .collection('/Employees')
      .add(employee)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return alert(err);
      });
  }

  findEmployee(email: string) {
    return this.firestore
      .collection('/Employees', (ref: any) =>
        ref.where('email', '==', email || email.toLowerCase()).limit(1)
      )
      .valueChanges()
  }
}
