import { PhoneMaskDirective } from './phone-mask.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { AppComponent } from './app.component';
import { ShareMaterialModule } from './share-material/share-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorValidateComponent } from './components/error-validate/error-validate.component';
import { DialogUserComponent } from './components/dialog-user/dialog-user.component';
import { FormatNumberPhonePipe } from './pipes/format-number-phone.pipe';
@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    ErrorValidateComponent,
    DialogUserComponent,
    FormatNumberPhonePipe,
    PhoneMaskDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ShareMaterialModule,
  ],
  exports: [PhoneMaskDirective],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
