import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
@Injectable()
export class GlobalEventsService {

private _showNavBar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
    public showNavBarEmitter: Observable<boolean> = this._showNavBar.asObservable();

    constructor() {}

    showNavBar(ifShow: boolean) {
        this._showNavBar.next(ifShow);
    }

}
