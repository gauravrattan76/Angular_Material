import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {MatButtonToggleModule,MatIconModule,MatProgressSpinnerModule} from '@angular/material';
import {MatBadgeModule} from '@angular/material/badge';

const maerialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule
]

@NgModule({
  imports: [maerialComponents
  ],
  exports:[
    maerialComponents
  ]
})
export class MaterialModule { }
