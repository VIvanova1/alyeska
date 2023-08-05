import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UserData } from '../model/user-data';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor(private firestore: AngularFirestore) {}

  createEmployee(employee: UserData) {
    employee.id = this.firestore.createId();
    return this.firestore.collection('/Employees').add(employee);
  }

  findEmployee(email: string) {
    return this.firestore
      .collection('/Employees', (ref: any) =>
        ref.where('email', '==', email).limit(1)
      )
      .valueChanges();
  }

  addRefTrainings(path: string) {}
}
