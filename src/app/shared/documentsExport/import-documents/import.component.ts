import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, finalize } from 'rxjs';
import { DocumentsService } from 'src/app/services/documents.service';
import UserDataService from 'src/app/services/user-data.service';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css'],
})
export class ImportComponent implements OnInit, OnChanges {
  id: any;
  // uploadPercent!: Observable<number>;
  // downloadURL: Observable<string>;
  uploadPercent: any;
  downloadURL: any;
  urls: any;

  constructor(
    private docService: DocumentsService,
    private router: ActivatedRoute,
    private userService: UserDataService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes", changes);

  }

  ngOnInit(): void {
    this.router.queryParamMap.subscribe((params) => {
      this.id = params.get('id');
    });
    this.allUrls();
  }

  uploadFile($event: Event) {
    const htmlElement = $event.target! as HTMLInputElement;
    const file = htmlElement.files![0];
    const fileName = file.name.split('.')[0];
    const filePath = `${this.id}/${fileName}`;
    const fileRef = this.docService.getRef(filePath);
    const task = this.docService.uploadDoc(filePath, file);

    this.uploadPercent = task.percentageChanges();

    task
      .snapshotChanges()
      .pipe(
        finalize(
          () =>
            (this.downloadURL = fileRef.getDownloadURL().forEach((url: any) => {
              this.userService.addDocUrls(this.id, 'documentsUrls', {
                'url': url,
                'name': fileName
              });
              this.allUrls();
            }))
        )
      )
      .subscribe();
  }

  allUrls() {
    this.userService
      .getDocUrls(this.id, 'documentsUrls')
      .valueChanges()
      .subscribe((res)=>{
        this.urls = res;
      })
  }
}
