import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SearchPipe } from './search.pipe';


@NgModule({
  declarations: [
    SearchPipe
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
