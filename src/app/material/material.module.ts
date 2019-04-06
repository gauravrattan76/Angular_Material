import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material';

const maerialComponents = [
  MatButtonModule
]

@NgModule({
  imports: [maerialComponents
  ],
  exports:[
    maerialComponents
  ]
})
export class MaterialModule { }
