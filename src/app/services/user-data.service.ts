import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { EmployeeData } from '../model/user-data';
import { map } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export default class UserDataService {
  userId!:string;
  user!: EmployeeData[];
  constructor(
    private firestore: AngularFirestore,
    private router: Router,
    private toastr: ToastrService
  ) {}

  createEmployee(employee: any) {
    this.firestore
      .collection('/Employees')
      .add(employee)
      .then((res) => {
        this.toastr.success('Successfully add new employee!');
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
            this.userId=id;
            console.log('id', id);
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

  updateEmployee(data: object, id: string) {
    this.firestore
      .collection('/Employees')
      .doc(id)
      .update(data)
      .then(() => {
        this.toastr.success('Employee information is UPDATED successfully!');
        this.router.navigate(['/user/personnel']);
      })
      .catch((err) => {
        return alert(err);
      });
  }

  async delete(id: string) {
    await this.firestore.collection('/Employees').doc(id).delete();
    this.toastr.success('Employee information is DELETED successfully!');
  }

  addAditionalInfo(id:string, subCollectionName:string,data:object) {
   return this.firestore.collection('/Employees').doc(id).collection(subCollectionName).add(data);
  }

  getAditionalInfo(id:string, subCollectionName:string){
   return this.firestore.collection('/Employees').doc(id).collection(subCollectionName);
  }
}
