import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root',
})
export class DocumentsService {
  constructor(private fireStorage: AngularFireStorage) {}

  uploadDoc(path: any, file: any) {
    return this.fireStorage.upload(path, file);
  }

  getRef(filePath: any) {
    return this.fireStorage.ref(filePath);
  }

}
