import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {MatButtonToggleModule} from '@angular/material';

const maerialComponents = [
  MatButtonModule,
  MatButtonToggleModule
]

@NgModule({
  imports: [maerialComponents
  ],
  exports:[
    maerialComponents
  ]
})
export class MaterialModule { }
