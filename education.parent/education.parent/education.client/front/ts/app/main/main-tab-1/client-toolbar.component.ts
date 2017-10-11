import {Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges} from "@angular/core";
import {HttpService} from "../../../service/HttpService";
import {MdDialog} from "@angular/material";
import {ClientEditWindowComponent} from "./client_edit_window.component";
import {ClientInfo} from "../../../model/main.main-tab-1/ClientInfo";
import {error} from "util";

@Component({
    selector:"client-toolbar",
    inputs:["clientInfo"],
    template:`
        <md-toolbar style="background: none;">
            <button md-icon-button>
                <md-icon class="material-icons" (click)="addNewClient()">add</md-icon>
            </button>
        </md-toolbar>
        <md-toolbar style="background: none;">
            <button md-icon-button [disabled]="disabled">
              <md-icon class="material-icons" (click)="editClient()">edit</md-icon>
            </button>
        </md-toolbar>
        <md-toolbar style="background: none;">
            <button md-icon-button [disabled]="disabled">
              <md-icon class="material-icons" (click)="deleteClient()">delete</md-icon>
            </button>
        </md-toolbar>
    `
})
export class ClientToolbarComponent implements OnChanges,OnInit{
    public animal:string;
    public clientInfoChange: ClientInfo|null;
    public disabled: boolean=true;

    @Output() updateList=new EventEmitter<any>();

    constructor(private httpService:HttpService, private dialog:MdDialog){
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.clientInfo) {
            this.clientInfoChange = changes.clientInfo.currentValue;
            if (this.clientInfoChange) {
                this.disabled = false;
            }
        }
    }

    ngOnInit(): void {

    }

    addNewClient(): void {
        let dialogRef=this.dialog.open(ClientEditWindowComponent);

        dialogRef.afterClosed().subscribe(res=>{
            this.save(res);
        })
    }

    editClient():void{
        let dialogRef=this.dialog.open(ClientEditWindowComponent);

        dialogRef.afterOpen().subscribe( result=> {
            if (this.clientInfoChange) {
                this.httpService.post("/client/info",
                    {clientId: this.clientInfoChange.id}).toPromise().then(result => {
                    dialogRef.componentInstance.setValue(result.json() as ClientInfo);
                }, error => {
                    console.log(error);
                });
            }
        }, error=>{
            console.log(error)
        });

        dialogRef.afterClosed().subscribe(res=>{
            this.save(res);
        })
    }

    save(client:ClientInfo|null){
        if(client){
            this.httpService.post("/client/save", client)
                .toPromise().then(result=>{
                    let ret=result.json() as ClientInfo;
                    this.updateList.emit(ret);
                },error=>{
                    console.log(error);
                });
        }
    }

    deleteClient(){
        if(this.clientInfoChange){
            this.httpService.post("/client/delete", {clientId:this.clientInfoChange.id})
                .toPromise().then(result=>{
                this.updateList.emit(this.clientInfoChange);
            },error=>{
                console.log(error);
            });
        }
    }
}
