import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {MatButtonToggleModule,MatIconModule} from '@angular/material';

const maerialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule
]

@NgModule({
  imports: [maerialComponents
  ],
  exports:[
    maerialComponents
  ]
})
export class MaterialModule { }
