import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UserData } from '../model/user-data';
import { map } from 'rxjs';
import { Route } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  user!: UserData[];
  constructor(private firestore: AngularFirestore, private router:Route) {}

  createEmployee(employee: any) {
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

  getAll(){
    return this.firestore
    .collection('/Employees')
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
