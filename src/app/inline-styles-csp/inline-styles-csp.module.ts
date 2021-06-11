import { NgModule } from '@angular/core';
import { CustomDomSharedStylesHost } from '../inline-styles-csp/shared_styles_host';
import { ɵDomSharedStylesHost } from '@angular/platform-browser';

@NgModule({
  providers: [
    { provide: 'cspMetaSelector', useValue: 'meta[name="CSP-NONCE"]' },
    { provide: ɵDomSharedStylesHost, useClass: CustomDomSharedStylesHost },
  ],
})
export class InlineStylesCSPModule {}
