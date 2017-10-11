import {Component, OnInit} from "@angular/core";

@Component({
    selector: 'main-tab-set',
    template: `
      <div>
          <md-tab-group>
              <md-tab *ngIf="checkCanISeeThisTab('can_see_main_tab_1')" label="Tab 1"><main-tab-1></main-tab-1></md-tab>
              <md-tab *ngIf="checkCanISeeThisTab('can_see_main_tab_2')" label="Tab 2"><main-tab-2></main-tab-2></md-tab>
          </md-tab-group>
      </div>
    `
})
export class MainComponent implements OnInit {
    ngOnInit(): void {
    }

    checkCanISeeThisTab(can:string): boolean{
        return (<any>window).canI(can);
    }
}
