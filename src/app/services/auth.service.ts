import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  isLoggled: boolean = false;
  constructor(private fireAuth: AngularFireAuth, private router: Router) {}

  login(email: string, password: string) {
    this.fireAuth.signInWithEmailAndPassword(email, password).then(
      () => {
        localStorage.setItem('user', email);
        this.router.navigate(['/user/profile']);
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
        this.isLoggled=true;
        this.router.navigate(['/user/profile']);
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
        this.isLoggled=false;
        this.router.navigate(['/login']);
      },
      err => {
        alert(err.message);
      }
    );
  }
}
