import {Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges} from "@angular/core";
import {HttpService} from "../../../service/HttpService";
import {ClientDataSource} from "./data-source/client.data-source";
import {ClientInfo} from "../../../model/main.main-tab-1/ClientInfo";

@Component({
    selector:'client-table',
    inputs:["updateClientInfo"],
    template:`
        <md-table #table [dataSource]="dataSource">
            <ng-container mdColumnDef="id">
                <md-header-cell *mdHeaderCellDef> ID </md-header-cell>
                <md-cell *mdCellDef="let row"> {{row.id}} </md-cell>
            </ng-container>
            
            <ng-container mdColumnDef="surname">
                <md-header-cell *mdHeaderCellDef> Surname </md-header-cell>
                <md-cell *mdCellDef="let row"> {{row.surname}} </md-cell>
            </ng-container>
            
            <ng-container mdColumnDef="name">
                <md-header-cell *mdHeaderCellDef> Name </md-header-cell>
                <md-cell *mdCellDef="let row"> {{row.name}} </md-cell>
            </ng-container>
            
            <ng-container mdColumnDef="patronymic">
                <md-header-cell *mdHeaderCellDef> Patronymic </md-header-cell>
                <md-cell *mdCellDef="let row"> {{row.patronymic}} </md-cell>
            </ng-container>
            
            <ng-container mdColumnDef="age">
                <md-header-cell *mdHeaderCellDef> Age </md-header-cell>
                <md-cell *mdCellDef="let row"> {{row.age}} </md-cell>
            </ng-container>

            <md-header-row *mdHeaderRowDef="displayedColumns"></md-header-row>
            <md-row *mdRowDef="let row; columns: displayedColumns;"
                    class="md-row" 
                    [ngClass]="{'highlight': selectedId == row.id}" 
                    (click)="selectRow(row)"></md-row>
        </md-table>
    `
})
export class ClientTableComponent implements OnChanges,OnInit{

    private displayedColumns = ['id', 'surname', 'name', 'patronymic', 'age'];
    private dataSource:ClientDataSource|null;
    private selectedId:string;

    @Output() selectedRow = new EventEmitter<ClientInfo | null>();

    constructor(private httpService:HttpService){

    }

    ngOnInit(): void {
        this.updateTableList();
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log("dadasdas");
        console.log(changes.updateClientInfo);
        let updateClientInfoChange=changes.updateClientInfo;
        if(updateClientInfoChange){
            this.updateTableList();
        }
    }

    updateTableList():void{
        this.dataSource=new ClientDataSource(this.httpService);
    }

    selectRow(row:ClientInfo): void{
        if(row) {
            console.log(row.id);
            this.selectedId = row.id;
        }
        this.selectedRow.emit(row);
    }
}
