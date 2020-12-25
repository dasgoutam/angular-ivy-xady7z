import { Component, VERSION, OnInit, ViewChild } from "@angular/core";
import { ProjectionComponent } from "./projection/projection.component";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular " + VERSION.major;
  colors = "#33333";

  @ViewChild(ProjectionComponent) projection: ProjectionComponent;
  ngOnInit() {
    this.updateColor("#2222");
  }

  updateColor(coloring) {
    let rocket = {
      color: "#234556",
      something: 23
    };
    let rocket2 = { ...rocket, coloring };
    console.log(rocket2);
  }

  dekh() {
    let lol = this.projection.propertyl;
    console.log(lol, "nor not");
  }
}
