import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataInterface } from '../../data-interface';
import { CalcServiceService } from '../../service/calc-service.service';

@Component({
  selector: 'app-calc-input',
  templateUrl: './calc-input.component.html',
  styleUrls: ['./calc-input.component.css']
})
export class CalcInputComponent {
  calcForm = new FormGroup({
    inputCTC: new FormControl('', Validators.required),
    inputV1: new FormControl('', Validators.required),
    inputV2: new FormControl('', Validators.required),
    inputPRNT: new FormControl('', Validators.required),
  });

  constructor(private calcServiceService : CalcServiceService ) {

  }

  onSubmit():void {
    console.log('submit');
    console.log(this.calcForm.value.inputCTC);
    this.validateAllFormFields(this.calcForm);
    console.log(this.calcServiceService.getLimingNecessity(this.formToInterface()))
  }

  validateAllFormFields(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({onlySelf: true});
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  formToInterface(): DataInterface {
    return {
      inputCTC: Number(this.calcForm.value.inputCTC),
      inputV1: Number(this.calcForm.value.inputV1),
      inputV2: Number(this.calcForm.value.inputV2),
      inputPRNT: Number(this.calcForm.value.inputPRNT),
    };
  }
}
