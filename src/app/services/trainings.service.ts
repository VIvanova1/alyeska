import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class TrainingsService {
  constructor(private firestore: AngularFirestore) {}

  getAllTrainings() {
    return new Promise<any>((resolve) => {
      this.firestore
        .collection('Trainings')
        .valueChanges({ idField: 'id' })
        .subscribe((training) => resolve(training));
    });
  }

  getOneTraining(path: string):Observable<any> {
    return this.firestore.doc(path).valueChanges()
  }
}
