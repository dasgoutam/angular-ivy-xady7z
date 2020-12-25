import { Component, OnInit } from "@angular/core";
import { DepserviceService } from "../depservice.service";

@Component({
  selector: "app-newcomp",
  templateUrl: "./newcomp.component.html",
  styleUrls: ["./newcomp.component.css"],
  providers: [DepserviceService]
})
export class NewcompComponent implements OnInit {
  constructor(private depservice: DepserviceService) {}

  ngOnInit() {
    this.depservice.letitstream.subscribe(value => {
      console.log("new comp dep is", value);
    });
  }

  newcompdep() {
    this.depservice.adddep(2000);
    // console.log("newcomp", this.depservice.letitstream.getValue());
  }
}
