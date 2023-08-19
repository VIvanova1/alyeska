import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root',
})

export class AuthService {
  constructor(private fireAuth: AngularFireAuth, private router: Router,  private toastr: ToastrService) {}

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
        this.toastr.error('Email or password is incorrect!')
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
        this.toastr.error(err.message)
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
        this.toastr.error(err.message)
      }
    );
  }
}
