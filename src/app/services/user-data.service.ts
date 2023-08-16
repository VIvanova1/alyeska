import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UserData } from '../model/user-data';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  user!: UserData[];
  constructor(private firestore: AngularFirestore) {}

  createEmployee(employee: any) {
    this.firestore
      .collection('/Employees')
      .add(employee)
      .then((res) => {
        console.log(res);
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
      .snapshotChanges()
      .pipe(
        map((act) => {
          return act.map((a) => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, data };
          });
        })
      );
  }
}
