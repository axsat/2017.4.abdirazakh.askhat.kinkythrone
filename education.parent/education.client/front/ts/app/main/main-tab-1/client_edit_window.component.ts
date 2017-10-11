import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import { MdDialogRef} from "@angular/material";
import {ClientInfo} from "../../../model/main.main-tab-1/ClientInfo";
@Component({
    selector:'client_edit',
    template:`
        <md-toolbar class="md-default-theme">
            <div class="md-toolbar-tools">Client Info</div>
        </md-toolbar>
        <div md-dialog-content>
            <md-input-container class="md-block" style="width: 100%">
                <input #surname mdInput placeholder="Surname" name="fieldSurname"
                       [(ngModel)]="client.surname"  [disabled]="disabled" required>
                <md-error>This field is required</md-error>
            </md-input-container>
            <md-input-container class="md-block" style="width: 100%">
                <input mdInput placeholder="Name" name="fieldName"
                       [(ngModel)]="client.name"  [disabled]="disabled" required>
                <md-error>This field is required</md-error>
            </md-input-container>
            <md-input-container class="md-block" style="width: 100%">
                <input mdInput placeholder="Patronymic" name="fieldPatronymic"
                       [(ngModel)]="client.patronymic"  [disabled]="disabled" required>
                <md-error>This field is required</md-error>
            </md-input-container>
            <md-input-container class="md-block" style="width: 100%">
                <input mdInput type="number" placeholder="Age" name="fieldAge"
                       [(ngModel)]="client.age"  [disabled]="disabled" required>
                <md-error>This field is required</md-error>
            </md-input-container>
        </div>
        <div md-dialog-actions>
            <button md-button tabindex="2" [mat-dialog-close]="getValue()">Save</button>
            <button md-button (click)="onNoClick()" tabindex="-1">Cancel</button>
        </div>
    `
})
export class ClientEditWindowComponent implements OnInit{
    private client:ClientInfo|null=new ClientInfo();

    @ViewChild("surname") surname: ElementRef;

    constructor(private dialogRef:MdDialogRef<ClientEditWindowComponent>){
    }

    setValue(value:ClientInfo){
        if(value){
            this.client=value;
        }
    }

    getValue():ClientInfo|null{
        return this.client;
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    ngOnInit(): void {
        console.log('ClientEditWindowComponent');
    }

}
