import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn: boolean = false;
  // isLogged: boolean = false;

  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router,
    private toastr: ToastrService
  ) {}

  login(email: string, password: string) {
    this.fireAuth.signInWithEmailAndPassword(email, password).then(
      () => {
        localStorage.setItem('user', email);
        this.loggedIn = true;
        // this.isLogged = true;
        this.router.navigate(['/user/profile']);
      },
      (err) => {
        this.toastr.error('Email or password is incorrect!');
      }
    );
  }

  register(email: string, password: string) {
    this.fireAuth.createUserWithEmailAndPassword(email, password).then(
      () => {
        localStorage.setItem('user', email);
        this.loggedIn = true;
        // this.isLogged = true;
        this.router.navigate(['/user/profile']);
      },
      (err) => {
        this.toastr.error(err.message);
      }
    );
  }

  logout() {
    this.fireAuth.signOut().then(
      () => {
        localStorage.removeItem('user');
        this.loggedIn = false;
        // this.isLogged = false;
        this.router.navigate(['/']);
      },
      (err) => {
        this.toastr.error(err.message);
      }
    );
  }

  isAdmin(){
    const user = localStorage.getItem('user');
    if(user && user == 'venetaivanova@alyeska.com'){
      return true;
    }else{
      return false;
    }
  }

  isLogged(){
    if(localStorage.getItem('user')){
      return true;
    }else{
      return false;
    }
  }
}
