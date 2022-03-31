import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable } from '@angular/core';
import { UserFormPresentationComponent } from '../user-list-presentation/user-form-presentation/user-form-presentation.component';

@Injectable()

export class UserListPresenterService {
  
  constructor(private overlay: Overlay) { }
  
  public componentRef!: ComponentRef<UserFormPresentationComponent>

  public overlayRef!: OverlayRef;
  
  openForm(){
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

    this.overlayRef.backdropClick().subscribe(()=>
    this.overlayRef.detach())

  }
}
