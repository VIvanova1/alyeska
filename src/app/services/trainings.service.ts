import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class TrainingsService {
  constructor(private firestore: AngularFirestore) {}

  getAllTrainings() {
    return this.firestore.collection('/Trainings').snapshotChanges();
  }


  getOneTraining(path: string) {
    return this.firestore.doc(path).valueChanges();
  }


}
