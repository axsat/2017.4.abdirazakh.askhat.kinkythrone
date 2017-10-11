import {Component, OnInit} from "@angular/core";
@Component({
    selector:'main-tab-2',
    template:`
        <div><h3>Main Tab 2 content</h3></div>
    `
})
export class MainTab2Component implements OnInit{
    ngOnInit(): void {
        console.log('MainTab2');
    }


}
