import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../../user-model/user.model';
import { UserFilterPresentationComponent } from '../user-list-presentation/user-filter-presentation/user-filter-presentation.component';
import { UserFormPresentationComponent } from '../user-list-presentation/user-form-presentation/user-form-presentation.component';

@Injectable()

export class UserListPresenterService {

  private _userFromData: Subject<User>;

  public userFromData$: Observable<User>;

  private _filteredData: Subject<User[]>;

  public filteredData$: Observable<User[]>;

  public componentRef!: ComponentRef<UserFormPresentationComponent>

  public filterComponentRef!: ComponentRef<UserFilterPresentationComponent>

  public overlayRef!: OverlayRef;


  constructor(private overlay: Overlay) {

    this._userFromData = new Subject<User>();
    this.userFromData$ = this._userFromData.asObservable()

    this._filteredData = new Subject();
    this.filteredData$ = this._filteredData.asObservable();

  }

  openForm(userdata?: User) {


    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically()
        .width('75%')

    });


    const component = new ComponentPortal(UserFormPresentationComponent);
    this.componentRef = this.overlayRef.attach(component);
    if (userdata) {
      this.componentRef.instance.editData = userdata;
    }

    this.componentRef.instance.userFormData.subscribe((data) => {
      console.log(data);
      this._userFromData.next(data)
    })
  
    this.componentRef.instance.close.subscribe(() => {
      this.overlayRef.detach()
    })

    this.overlayRef.backdropClick().subscribe(() =>
      this.overlayRef.detach())

  }
  // filter overlay
  
   openFilterForm( userList: User[]) {
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay
      .position()
        .global()
        .right(),

    });
    
    const component = new ComponentPortal(UserFilterPresentationComponent);
    this.filterComponentRef = this.overlayRef.attach(component);
    
    
    
    this.filterComponentRef.instance.filterFormData.subscribe((data) => {
      this.myfilter(userList!, data)
      
      // console.log("from list presentor",data.value)
    })
     this.filterComponentRef.instance.close.subscribe(() =>
     this.overlayRef.detach()
     )
    

    this.overlayRef.backdropClick().subscribe(() =>
    this.overlayRef.detach())
  }
  
  myfilter(list: User[], filters: any) {
    console.log(filters.value)
    if (filters.value.gender) {
      list = list.filter(user => {
        // console.log(user.gender);
        return user.gender?.toLowerCase() == filters.value.gender.toLowerCase();
      })
    }
    
    console.log(list);
    this.filteredData(list);
  }

  getfilterValue(data: any) {
    console.log("from list presentor", data)
    
  }
  
    public filteredData(filteredData: User[]) {
      this._filteredData.next(filteredData);
    }
}

