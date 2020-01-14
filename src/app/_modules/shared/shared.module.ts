import { NgModule } from "@angular/core";
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AlertComponent } from './alert/alert.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './modal/modal.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LogoComponent } from './logo/logo.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
    declarations: [ AlertComponent , FooterComponent , HeaderComponent , ModalComponent ,
                    SlideShowComponent, LogoComponent, NotFoundComponent ],
    exports: [AlertComponent , FooterComponent , HeaderComponent , ModalComponent , 
              SlideShowComponent , LogoComponent, NotFoundComponent ],
    imports: [CommonModule , RouterModule, NgbModule ],
    entryComponents:[ ModalComponent ],
    providers: [ NgbActiveModal ]
})

export class SharedModule {}