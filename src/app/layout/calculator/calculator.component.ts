import { Component } from '@angular/core';
import { DataService } from '../../shared/service/saturation /data.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {

  ctc?: string;
  v1?: string;
  v2?: string;
  prnt?: string;
  limingNecessity?: string;

  constructor(private data: DataService) {
  }

  ngOnInit(): void {
    this.data.currentCTC.subscribe(message => this.ctc = "");
    this.data.currentV1.subscribe(message => this.ctc = "");
    this.data.currentV2.subscribe(message => this.ctc = "");
    this.data.currentPRNT.subscribe(message => this.ctc = "");
    this.data.currentLimingNecessity.subscribe(message => this.ctc = "");
  }


}
