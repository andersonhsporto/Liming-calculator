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

  // NC (ton/ha) = (V2 - V1) x CTC / PRNT
  getLimingNecessity(dataInterface: DataInterface) {
    const v1: number = dataInterface.inputV1;
    const v2: number = dataInterface.inputV2;
    const ctc: number = dataInterface.inputCTC;
    const prnt: number = dataInterface.inputPRNT;

    this.changeCTC(ctc);
    this.changeV(v1, v2);
    this.changePRNT(prnt);
    this.limingNecessitySource.next((v2 - v1) * ctc / prnt);
  }

  private changeCTC(msg?: any): void  {
    if (msg === undefined) {
      msg = "";
    }
    this.ctcSource.next(msg);
  }

  private changeV(v1: number, v2: number): void {
    this.v1Source.next(String(v1));
    this.v2Source.next(String(v2));
  }

  private changePRNT(prnt: number): void {
    this.prntSource.next(String(prnt));
  }
}
