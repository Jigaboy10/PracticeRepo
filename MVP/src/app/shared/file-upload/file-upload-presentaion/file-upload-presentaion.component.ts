import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FileUploadPresenterService, } from '../file-upload-presenter/file-upload-presenter.service';

@Component({
  selector: 'app-file-upload-presentation',
  templateUrl: './file-upload-presentaion.component.html',
  styleUrls: ['./file-upload-presentaion.component.scss']
})
export class FileUploadPresentationComponent implements OnInit {
  @Output() filesList:EventEmitter<any> = new EventEmitter<any>();


  //files array
  public files: any[] = [];
  constructor(private fileUploadPresenterService:FileUploadPresenterService,private cdr:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.fileUploadPresenterService.files$.subscribe(res=>{
      this.filesList.emit(res);
      this.cdr.markForCheck();
      this.files = res;
      console.log(res);
    });
  }

  onFileChange(file:any){
    this.fileUploadPresenterService.getFiles(file);
  }
  
  openConfirmDialog(index:number){
    alert(index);
  }
  
  removeFiles(filename:string){
    this.fileUploadPresenterService.removeFiles(filename,this.files)
  }

}
