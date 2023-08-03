import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataInterface } from '../../data-interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private ctcSource = new BehaviorSubject<string>("");
  private v1Source = new BehaviorSubject<string>("");
  private v2Source = new BehaviorSubject<string>("");
  private prntSource = new BehaviorSubject<string>("");
  private limingNecessitySource = new BehaviorSubject<number>(-1);

  currentCTC = this.ctcSource.asObservable();
  currentV1 = this.v1Source.asObservable();
  currentV2 = this.v2Source.asObservable();
  currentPRNT = this.prntSource.asObservable();
  currentLimingNecessity = this.limingNecessitySource.asObservable();

  constructor() {
  }

  changeCTC(msg?: any): void  {
    if (msg === undefined) {
      msg = "";
    }
    this.ctcSource.next(msg);
  }

  changeV(v1: string, v2: string): void {
    this.v1Source.next(v1);
    this.v2Source.next(v2);
  }

  changePRNT(prnt: string): void {
    this.prntSource.next(prnt);
  }

  // NC (ton/ha) = (V2 - V1) x CTC / PRNT
  getLimingNecessity(dataInterface: DataInterface) {
    const v1: number = dataInterface.inputV1;
    const v2: number = dataInterface.inputV2;
    const ctc: number = dataInterface.inputCTC;
    const prnt: number = dataInterface.inputPRNT;

    this.limingNecessitySource.next((v2 - v1) * ctc / prnt);
    return (v2 - v1) * ctc / prnt;
  }

}
