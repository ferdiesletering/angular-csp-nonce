import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AppComponent } from './app.component';
import { MatSliderModule } from '@angular/material/slider';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { InlineStylesCSPModule } from './inline-styles-csp/inline-styles-csp.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    InlineStylesCSPModule,
    TooltipModule.forRoot(),
    NoopAnimationsModule,
    MatSliderModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
