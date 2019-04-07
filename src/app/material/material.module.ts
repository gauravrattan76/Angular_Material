import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {MatButtonToggleModule,MatIconModule} from '@angular/material';
import {MatBadgeModule} from '@angular/material/badge';

const maerialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule
]

@NgModule({
  imports: [maerialComponents
  ],
  exports:[
    maerialComponents
  ]
})
export class MaterialModule { }
