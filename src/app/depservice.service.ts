import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class DepserviceService {
  constructor() {}

  letitstream = new BehaviorSubject(10);
  streamob = this.letitstream.asObservable();

  adddep(anewone) {
    this.letitstream.next(anewone);
  }
}
