import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private firestore: AngularFirestore) { }
}
