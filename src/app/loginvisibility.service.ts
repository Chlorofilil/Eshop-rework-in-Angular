import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginvisibilityService {
  private isHidden = new BehaviorSubject<boolean>(false);
  isHidden$ = this.isHidden.asObservable();

  constructor() { }

  setHiddenState(hidden: boolean): void {
    this.isHidden.next(hidden);
  }
}
