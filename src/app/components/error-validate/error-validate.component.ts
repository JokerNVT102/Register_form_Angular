import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-validate',
  templateUrl: './error-validate.component.html',
  styleUrls: ['./error-validate.component.css'],
})
export class ErrorValidateComponent implements OnInit {
  @Input('control') control;
  @Input('name-control') controlName;
  constructor() {}

  ngOnInit(): void {}
  get message(){
    for (const err in this.control.errors) {
      if (this.control.dirty) {
        return this.getErrorMessage(err, this.control.errors[err]);
      }
    }
  }
  getErrorMessage(err, value) {
    let messgae = {
      required: `${this.controlName} is required`,
      maxlength: `Maxlength: ${value.requiredLength} character`,
      pattern: `${this.controlName} invalid !`,
    };
    return messgae[err];
  }}
