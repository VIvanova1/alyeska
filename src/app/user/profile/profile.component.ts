import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { finalize } from 'rxjs';
import { EmployeeData } from 'src/app/model/user-data';
import { DocumentsService } from 'src/app/services/documents.service';
import UserDataService from 'src/app/services/user-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit, OnChanges, OnDestroy {
  currentEmployee!: any;
  trainings: any[] = [];
  id: any;
  moreInfo: any;
  experienceInput: any;
  schoolInput: any;
  adressInput: any;
  editId: any;
  downloadURL:any
  profileImgurl:any;

  constructor(
    private userService: UserDataService,
    private router: ActivatedRoute,
    private Router: Router,
    private docService: DocumentsService
  ) {
    this.adressInput = {
      type: 'Address',
      institution: 'Address type',
      activity: 'Address',
    };

    this.experienceInput = {
      type: 'Experience',
      institution: 'Company name',
      activity: 'Position',
    };

    this.schoolInput = {
      type: 'Education',
      institution: 'School name',
      activity: 'School major',
    };
  }

  ngOnInit(): void {
    this.router.queryParamMap.subscribe((params) => {
      this.id = params.get('id');
    });
    this.fintUserForEdit(this.id);
    this.loadProfileImage()
  }

  fintUserForEdit(id: string) {
    this.userService.getOneEmployee(id).subscribe((res) => {
      this.currentEmployee = res;
    });
  }

  ngOnDestroy(): void {
    console.log('destroy');
    this.currentEmployee = '';
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('change', changes);
  }

  exportContract() {
    this.Router.navigate(['user/profile', this.id, 'contract']);
  }

  uploadFile($event: Event) {
    const htmlElement = $event.target! as HTMLInputElement;
    const file = htmlElement.files![0];
    const filePath = `profileImg/${this.id}`;
    const fileRef = this.docService.getRef(filePath);
    const task = this.docService.uploadProfileImage(filePath, file);

    this.profileImgurl = ''
    task
      .snapshotChanges()
      .pipe(
        finalize(
          () =>
            (this.downloadURL = fileRef.getDownloadURL().subscribe((url: any)=>{
              this.profileImgurl=url;
            }))

        )
      )
      .subscribe();
  }

loadProfileImage(){
this.docService.getProfileImage(`profileImg/${this.id}`).getDownloadURL().subscribe(
  (url: any) => {
    if (url) {
      this.profileImgurl = url;
    }
  },
  (error: any) => {
    this.docService.getProfileImage('assets/no-image.png').getDownloadURL().subscribe(
      (defaultUrl: any) => {
        this.profileImgurl = defaultUrl;
      }
    );
  }
);

}



  //in OnInit
  // let user: any;
  // const email = localStorage.getItem('user');
  // if (email) {
  //   user = this.getUser(email);
  //   console.log('This is profile page');
  // }
}
