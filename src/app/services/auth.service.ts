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
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

  register(email: string, password: string) {
    return this.fireAuth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    this.fireAuth.signOut().then(
      () => {
        localStorage.clear();
        this.loggedIn = false;
        // this.isLogged = false;
        this.router.navigate(['/']);
      },
      (err) => {
        this.toastr.error(err.message);
      }
    );
  }

  // isAdmin(){
  //   const user = localStorage.getItem('user');
  //   if(user && user == 'admin@admin.com'){
  //     return true;
  //   }else{
  //     return false;
  //   }
  // }

  isLogged(){
    if(localStorage.getItem('uid')){
      return true;
    }else{
      return false;
    }
  }
}
