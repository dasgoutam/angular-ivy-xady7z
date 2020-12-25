import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormGroup,
  Validators,
  FormBuilder
} from "@angular/forms";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  user: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.user = this.fb.group({
      name: ["Goutam", Validators.required],
      account: this.fb.group({
        email: ["goutam2475@gmail.com", Validators.email],
        confirm: ["", Validators.email]
      }),
      age: ["", this.ageValidator(20, 30)]
    });
  }

  get name() {
    return this.user.get("name");
  }

  get email() {
    return this.user.get("account").get("confirm");
  }

  submitform() {
    console.log(this.user.value);
    console.log(this.user.valid);
  }

  seeValue() {
    console.log(this.user.value);
  }

  ageValidator(min: number, max: number) {
    //factory function

    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (
        control.value !== null &&
        (isNaN(control.value) || control.value < min || control.value > max)
      ) {
        return { ageValidator: true };
      }
      return null;
    };
  }
}
