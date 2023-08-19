import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UserData } from '../model/user-data';
import { map } from 'rxjs';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  user!: UserData[];
  constructor(private firestore: AngularFirestore, private router: Router) {}

  createEmployee(employee: any) {
    this.firestore
      .collection('/Employees')
      .add(employee)
      .then((res) => {
        alert('Successfully add new employee!');
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

  getAll() {
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

  getOneEmployee(id: string) {
    return this.firestore.collection('/Employees').doc(id).valueChanges();
  }

  updateEmployee( data: object,id:string) {
    this.firestore
      .collection('/Employees')
      .doc(id)
      .update(data)
      .then(() => {
        alert('Employee information is updated successfully!');
        this.router.navigate(['/user/personnel']);
      })
      .catch((err) => {
        return alert(err);
      });
  }
}
