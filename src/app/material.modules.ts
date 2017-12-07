import { NgModule } from '@angular/core';
import { 

			MatMenuModule,
			MatButtonModule,
			MatIconModule,
			MatSidenavModule,
			MatButtonToggleModule,
			MatGridListModule,
      MatListModule,
      MatProgressBarModule

		} from '@angular/material';

@NgModule({
  exports: [
  	MatMenuModule,
  	MatButtonModule,
  	MatIconModule,
  	MatSidenavModule,
  	MatButtonToggleModule,
  	MatGridListModule,
    MatListModule,
    MatProgressBarModule
  ]
})
export class MaterialModules {}