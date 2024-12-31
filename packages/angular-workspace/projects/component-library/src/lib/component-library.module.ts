import { NgModule, provideAppInitializer } from '@angular/core';
import { DIRECTIVES } from './stencil-generated';
import { defineCustomElements } from 'stencil-library/loader';

@NgModule({
  providers: [    
    provideAppInitializer(() => defineCustomElements())
  ],
  imports: [...DIRECTIVES],
  exports: [...DIRECTIVES],
})
export class ComponentLibraryModule {}
