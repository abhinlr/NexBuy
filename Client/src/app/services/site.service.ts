import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  public loading:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }


}
