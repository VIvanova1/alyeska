import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class TrainingsService {
  constructor(private db:AngularFirestore) {}

  getAllTrainings(){
    return new Promise<any>((resolve)=> {
      this.db.collection('Trainings').valueChanges({ idField: 'id' }).subscribe(training => resolve(training));
    })

  }
}
