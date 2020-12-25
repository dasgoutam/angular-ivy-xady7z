import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { FormComponent } from "./form/form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ProjectionComponent } from './projection/projection.component';
import { DepserviceService } from './depservice.service';
import { NewcompComponent } from './newcomp/newcomp.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, HelloComponent, FormComponent, ProjectionComponent, NewcompComponent],
  bootstrap: [AppComponent],
  providers: [DepserviceService]
})
export class AppModule {}
