import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  constructor(private fireAuth: AngularFireAuth, private router: Router) {}

  login(email: string, password: string) {
    this.fireAuth.signInWithEmailAndPassword(email, password).then(
      () => {
      this.fireAuth.authState.subscribe(u=>{
        const user = JSON.parse(JSON.stringify(u));
        localStorage.setItem('user', email);
      })
      this.router.navigate(['/']);
      },
      err => {
        alert(err.message);
      }
    );
  }

  register(email: string, password: string) {
    this.fireAuth.createUserWithEmailAndPassword(email, password).then(
      () => {
        localStorage.setItem('user', email);
        this.router.navigate(['/']);
      },
      err => {
        alert(err.message);
      }
    );
  }

  logout() {
    this.fireAuth.signOut().then(
      () => {
        localStorage.removeItem('user');
        this.router.navigate(['/']);
      },
      err => {
        alert(err.message);
      }
    );
  }
}
