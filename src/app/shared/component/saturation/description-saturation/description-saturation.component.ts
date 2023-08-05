import { Component } from '@angular/core';
import * as jsonData from '../../../../../assets/data.json';
@Component({
  selector: 'app-description-saturation',
  templateUrl: './description-saturation.component.html',
  styleUrls: ['./description-saturation.component.css']
})
export class DescriptionSaturationComponent {
  data: any = jsonData;
  constructor() {
  }
}
