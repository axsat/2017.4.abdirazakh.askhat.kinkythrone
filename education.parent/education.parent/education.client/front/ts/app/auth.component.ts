import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from "@angular/core";
import {HttpService} from "../service/HttpService";
import {error} from "util";
import {AuthInfo} from "../model/AuthInfo";

@Component({
    selector: 'auth-component',
    styles: [`
    `],
    template: `
    <div class="container">
        <div class="row" style="height: 300px"></div>
        <div class="row">
            <div class="center-block" style="width:400px; background-color:#ccc;">
                <md-card flex="flex" flex-gt-sm="50" flex-gt-md="33">
                    <md-toolbar>
                        <div>
                            <h2><span>Login Form</span></h2>
                        </div>
                    </md-toolbar>
                    <md-card-content>
                        <form name="Form">
                            <md-input-container class="md-block" style="width: 100%">
                                <input mdInput #inputLogin placeholder="Login" name="fieldLogin"
                                  [(ngModel)]="fieldLogin"  [disabled]="disabled" required>
                                  <md-error>This field is required</md-error>
                            </md-input-container>
                            <md-input-container class="md-block" style="width: 100%">
                                <input mdInput #inputPassword placeholder="Password"  name="fieldPassword"
                                  [(ngModel)]="fieldPassword" [disabled]="disabled" required>
                                  <md-error>This field is required</md-error>
                            </md-input-container> 
                            <button md-button (click)="enter()">Enter</button>
                            <md-error class="" *ngIf="errorMessage && !disabled">
                              {{errorMessage}}
                            </md-error>
                        </form>
                    </md-card-content>
                </md-card>
            </div>
        </div>
    </div>
    `
})
export class AuthComponent implements AfterViewInit, OnInit {

    errorMessage: string | null;

    fieldLogin: string = '';
    fieldPassword: string | null;

    disabled: boolean = false;

    @Output() finish = new EventEmitter<void>();

    constructor(private httpService: HttpService) {
    }

    ngOnInit(): void {
        console.log("AuthComponent 1")
    }

    ngAfterViewInit(): void {
        console.log("AuthComponent 2")
    }

    enter(): void {
        this.errorMessage = null;

        if (this.fieldLogin && this.fieldPassword) {
            this.disabled = true;
            this.httpService.post("/auth/login", {
                login: this.fieldLogin,
                password: this.fieldPassword
            }).toPromise().then(res => {
                this.disabled = false;
                let responce = res.json() as AuthInfo;
                this.httpService.token = responce.token;
                this.httpService.personId = responce.personId;

                this.finish.emit();

            }, error => {
                this.disabled = false;
                if (error.status == 470) {
                    this.errorMessage = error.text();
                } else {
                    console.error("AUTHENTICATION_UNKNOWN_ERROR", error);
                    this.errorMessage = error;
                }
            });

            this.fieldPassword = null;
        }
    }
}
