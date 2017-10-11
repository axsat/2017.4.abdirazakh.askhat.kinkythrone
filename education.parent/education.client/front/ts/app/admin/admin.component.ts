import {Component, OnInit, ViewChild} from "@angular/core";
import {HttpService} from "../../service/HttpService";

@Component({
    selector: 'admin-tab-set',
    template: `
       <md-sidenav-container class="full-size docs-component-viewer-sidenav-container">
           <md-sidenav class="docs-component-viewer-sidenav" mode="side" opened="true">
               <admin-tab-nav (clickedTabId)="adminTabId = $event"></admin-tab-nav>
           </md-sidenav>
           <admin-content-view [adminTabId]="adminTabId"></admin-content-view>
       </md-sidenav-container>
    `
})
export class AdminComponent implements OnInit {

    ngOnInit(): void {
        console.log('AdminComponent');
    }

    constructor(private httpService:HttpService){}
}
