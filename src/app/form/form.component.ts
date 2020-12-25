import { Component, OnInit } from "@angular/core";
import {
  FormControl,
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
      })
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
}
