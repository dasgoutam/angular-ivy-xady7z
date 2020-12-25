import { Component, OnInit } from "@angular/core";
import { DepserviceService } from "../depservice.service";

@Component({
  selector: "app-projection",
  templateUrl: "./projection.component.html",
  styleUrls: ["./projection.component.css"],
  providers: [DepserviceService]
})
export class ProjectionComponent implements OnInit {
  propertyl = 20000;
  constructor(private depservice: DepserviceService) {}

  ngOnInit() {
    this.depservice.letitstream.subscribe(value => {
      console.log("dep is", value);
    });
  }

  adddep() {
    this.depservice.adddep(40);
  }
}
