import { NgModule } from '@angular/core';
import { BrowserModule, ɵDomSharedStylesHost } from '@angular/platform-browser';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AppComponent } from './app.component';
import { CustomDomSharedStylesHost } from './shared_styles_host';
import { MatSliderModule } from '@angular/material/slider';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    TooltipModule.forRoot(),
    NoopAnimationsModule,
    MatSliderModule,
  ],
  providers: [
    { provide: 'cspMetaSelector', useValue: 'meta[name="CSP-NONCE"]' },
    { provide: ɵDomSharedStylesHost, useClass: CustomDomSharedStylesHost },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
