import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserFilterPresenterService } from '../user-filter-presenter/user-filter-presenter.service';

@Component({
  selector: 'app-user-filter-presentation',
  templateUrl: './user-filter-presentation.component.html',
  styleUrls: ['./user-filter-presentation.component.scss'],
  viewProviders: [UserFilterPresenterService]
})
export class UserFilterPresentationComponent implements OnInit {



  @Output() close: EventEmitter<Event>;

  @Output() filterFormData: EventEmitter<FormGroup>;



  public filteredForm: FormGroup;

  constructor(private filterService: UserFilterPresenterService) {

    this.filteredForm = this.filterService.buildForm();
    this.close = new EventEmitter<Event>();
    this.filterFormData = new EventEmitter<FormGroup>();
  }

  ngOnInit(): void {
  }

  OnClose() {
    this.close.emit();
  }

  onSubmit() {
    this.filterService.submitForm(this.filteredForm)
    this.OnClose()
    this.filterFormData.emit(this.filteredForm);

  }
}
