import { Component } from '@angular/core';
import { DataService } from '../../../service/saturation /data.service';

@Component({
  selector: 'app-data-saturation',
  templateUrl: './data-saturation.component.html',
  styleUrls: ['./data-saturation.component.css']
})
export class DataSaturationComponent {


  ctc?: string;
  v1?: string;
  v2?: string;
  prnt?: string;
  limingNeeded: number;

  constructor(private data: DataService) {
    this.limingNeeded = -1;
  }

  ngOnInit(): void {
    this.data.currentCTC.subscribe(message => this.ctc = message);
    this.data.currentV1.subscribe(message => this.v1 = message);
    this.data.currentV2.subscribe(message => this.v2 = message);
    this.data.currentPRNT.subscribe(message => this.prnt = message);
    this.data.currentLimingNecessity.subscribe(message => this.limingNeeded = message);
  }

  protected readonly NaN = NaN;
  protected readonly isNaN = isNaN;
}
