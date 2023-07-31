import { Injectable } from '@angular/core';
import { DataInterface } from '../data-interface';

@Injectable({
  providedIn: 'root',
})
export class CalcServiceService {

  constructor() {
  }

  // NC (ton/ha) = (V2 - V1) x CTC / PRNT
  getLimingNecessity(dataInterface: DataInterface) {

    const v1: number = dataInterface.inputV1;
    const v2: number = dataInterface.inputV2;
    const ctc: number = dataInterface.inputCTC;
    const prnt: number = dataInterface.inputPRNT;

    return (v2 - v1) * ctc / prnt;
  }
}
