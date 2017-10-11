import {Component, OnInit} from "@angular/core";
import "rxjs/add/operator/toPromise";
import {HttpService} from "../service/HttpService";
import {IntroduceInfo} from "../model/IntroductionInfo";
import {error} from "util";
import {UserInfo} from "../model/UserInfo";

@Component({
    selector: 'helpdesk-app',
    template: `
        <auth-component *ngIf="authVisibility" (finish)="startApp()"></auth-component>
          
        <main-tab-set *ngIf="mainTabSetVisibility" (exit)="exit()"></main-tab-set>
        <admin-tab-set class="app-component-sidenav" *ngIf="adminTabSetVisibility" (exit)="exit()"></admin-tab-set>
        `
})
export class AppComponent implements OnInit {
    authVisibility: boolean = false;
    mainTabSetVisibility: boolean = false;
    adminTabSetVisibility: boolean = false;

    ngOnInit(): void {
        if (this.httpService.token) {
            this.startApp();
        } else {
            this.authVisibility = true;
        }
    }

    constructor(private httpService: HttpService) {
    }

    startApp() {
        this.authVisibility = false;
        this.httpService.post("/user/info",{personId:this.httpService.personId}).toPromise().then(
            result => {
                let userInfo = result.json() as UserInfo;
                (<any>window).roleCans = userInfo.cans;

                this.mainTabSetVisibility = false;
                this.adminTabSetVisibility = false;

                if ((<any>window).canI('admin'))
                    this.adminTabSetVisibility = true;
                else if ((<any>window).canI('main'))
                    this.mainTabSetVisibility = true;
            },
            error => {
                console.log(error);
                this.mainTabSetVisibility = false;
                this.adminTabSetVisibility = false;
                this.authVisibility = false;
            }
        )
    }

}
