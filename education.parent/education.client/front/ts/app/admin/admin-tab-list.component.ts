import {Component, EventEmitter, OnInit, Output} from "@angular/core";
@Component({
    selector:'admin-tab-nav',
    template:`
        <nav>
            <h3>Administration Menu</h3>
            <ul>
                <li *ngFor="let r of getAvailableTabList(); let idx = index"
                > <a (click)="drawContent(r.id, idx)" 
                     [ngClass]="checkActive(r.id, idx)?'docs-component-viewer-sidenav-item-selected':''">{{r.name}}</a>
                </li>
            </ul>
        </nav>
    `
})
export class AdmiTabComponent implements OnInit{
    private adminTabList: {id:string, name:string, can:string}[] = [
        {id: 'TAB_1', name: 'TAB 1', can:'can_see_admin_tab_1'},
        {id: 'TAB_2', name: 'TAB 2', can:'can_see_admin_tab_2'},
        {id: 'TAB_3', name: 'TAB 3', can:'can_see_admin_tab_3'},
        {id: 'TAB_4', name: 'TAB 4', can:'can_see_admin_tab_4'},
        {id: 'TAB_5', name: 'TAB 5', can:'can_see_admin_tab_5'},
        {id: 'TAB_6', name: 'TAB 6', can:'can_see_admin_tab_6'},
        {id: 'TAB_7', name: 'TAB 7', can:'can_see_admin_tab_7'},
    ];
    private activeTabIndex: number=-1;

    @Output() clickedTabId = new EventEmitter<string | null>();

    ngOnInit(): void {
        console.log('AdmiTabComponent')
    }

    getAvailableTabList(): {id:string, name:string, can:string}[] {
        let ret:{id:string, name:string, can:string}[]=[];

        for(let x of this.adminTabList){
            if((<any>window).canI(x.can)) ret.push(x);
        }

        return ret;
    }

    drawContent(id:string, index:number){
        this.activeTabIndex=index;

        this.clickedTabId.emit(id);
    }

    checkActive(id:string, index:number):boolean{

        for(let x of this.getAvailableTabList()){
            if(x.id===id && this.activeTabIndex===index) return true;
        }
        return false;
    }
}
