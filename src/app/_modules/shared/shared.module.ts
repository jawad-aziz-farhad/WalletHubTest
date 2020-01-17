import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {CurrencyPipe, DecimalPipe, PercentPipe} from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './modal/modal.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LogoComponent } from './logo/logo.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DigitOnlyDirective } from './_directives/digitOnly/digit-only.directive';
import { CurrencyFormatterDirective } from './_directives/currency-formatter/currency-formatter.directive';
import { CustomCurrencyPipe } from './_pipes/custom-currency-pipe/custom-currency-pipe.pipe';

@NgModule({
    declarations: [ AlertComponent , FooterComponent , HeaderComponent , ModalComponent ,
                    SlideShowComponent, LogoComponent, NotFoundComponent , DigitOnlyDirective, CurrencyFormatterDirective, CustomCurrencyPipe ],
    exports: [AlertComponent , FooterComponent , HeaderComponent , ModalComponent , 
              SlideShowComponent , LogoComponent, NotFoundComponent , DigitOnlyDirective , CurrencyFormatterDirective , CustomCurrencyPipe ],
    imports: [CommonModule , RouterModule, NgbModule ],
    entryComponents:[ ModalComponent ],
    providers: [ NgbActiveModal,CurrencyPipe, DecimalPipe, PercentPipe ,  CustomCurrencyPipe ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})

export class SharedModule {}