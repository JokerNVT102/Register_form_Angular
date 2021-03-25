import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogUserComponent } from '../dialog-user/dialog-user.component';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  hide = true;
  numberphone: string = '';
  public frmUser: FormGroup;
  constructor(private _formBuilder: FormBuilder, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.frmUser = this._formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.maxLength(30),
          Validators.pattern(/^[a-zA-Z0-9\+]*$/),
        ],
      ],
      password: ['', Validators.required],
      fullname: ['', [Validators.required, Validators.maxLength(50)]],
      email: [
        '',
        [Validators.required, Validators.pattern(/^[^s@]+@[^s@]+.[^s@]{2,}$/)],
      ],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9()-\+]/)]],
    });
    // this.frmUser.valueChanges.subscribe((data) => {
    //   console.log(this.numberphone);
    //   this.numberphone = data['phone'];
    //   // this.formatNumberPhone(data['phone']);
    // });
  }
  onResetForm() {
    this.frmUser.reset();
  }
  onSubmitForm() {
    this.dialog.open(DialogUserComponent, {
      data: this.frmUser.value,
    });
    console.log(this.frmUser.value);
  }
}
