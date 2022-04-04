import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SearchPipe } from './search.pipe';
import { FileDragAndDropDirective } from './directives/file-drag-and-drop.directive';
import { FileUploadPresentationComponent } from './file-upload/file-upload-presentaion/file-upload-presentaion.component';


@NgModule({
  declarations: [
    SearchPipe,
    FileUploadPresentationComponent,
    FileDragAndDropDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [FormsModule,
    ReactiveFormsModule,
    OverlayModule,
    DragDropModule,
    SearchPipe
  ]
})
export class SharedModule { }
