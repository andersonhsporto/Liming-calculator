import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataInterface } from '../../../data-interface';
import { DataService } from '../../../service/saturation /data.service';

@Component({
  selector: 'app-calc-input',
  templateUrl: './calc-input.component.html',
  styleUrls: ['./calc-input.component.css'],
})
export class CalcInputComponent {
  calcForm = new FormGroup({
    inputCTC: new FormControl('', Validators.required || Validators.min(0)),
    inputV1: new FormControl('', Validators.required || Validators.min(0)),
    inputV2: new FormControl('', Validators.required || Validators.min(0)),
    inputPRNT: new FormControl('', Validators.required || Validators.min(0)),
  });

  constructor(private data: DataService) {

  }

  ngOnInit(): void {
    this.data.currentCTC.subscribe(
      message => this.calcForm.value.inputCTC = message,
    );
  }

  onSubmit(): void {
    this.validateAllFormFields(this.calcForm);
    if (this.calcForm.valid) {
      this.data.getLimingNecessity(this.formToInterface());
    }
  }

  validateAllFormFields(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);

      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });

        if (control.value < 0) {
          control.setErrors({ incorrect: true });
        }
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
