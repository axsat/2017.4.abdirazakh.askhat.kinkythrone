import {Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges} from "@angular/core";

@Component({
    selector:'admin-content-view',
    inputs:['adminTabId'],
    template:`
      <div *ngIf="showContent" class="docs-component-sidenav-content"><h3>{{contentText}}</h3></div>
    `
})
export class AdminContentComponent implements OnChanges{
    private showContent:boolean=false;
    private contentText:string;

    private contentTextList:{id,text}[]=[
        {id:'TAB_1',text:"Admin Tab 1 content"},
        {id:'TAB_2',text:"Admin Tab 2 content"},
        {id:'TAB_3',text:"Admin Tab 3 content"},
        {id:'TAB_4',text:"Admin Tab 4 content"},
        {id:'TAB_5',text:"Admin Tab 5 content"},
        {id:'TAB_6',text:"Admin Tab 6 content"},
        {id:'TAB_7',text:"Admin Tab 7 content"}
    ]

    ngOnChanges(changes: SimpleChanges): void {
        const adminTabIdChange=changes.adminTabId;

        console.log(adminTabIdChange);

        if(adminTabIdChange){
            this.showContent=true;
            for(let x of this.contentTextList){
                if(x.id===adminTabIdChange.currentValue){
                    this.contentText=x.text;
                }
            }
        }
    }


}
