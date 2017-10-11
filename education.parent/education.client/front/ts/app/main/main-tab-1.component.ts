import {Component, OnInit} from "@angular/core";
@Component({
    selector:'main-tab-1',
    template:`
        <div><h3>Main Tab 1 content</h3></div>
    `
})
export class MainTab1Component implements OnInit{
    ngOnInit(): void {
        console.log('MainTab1');
    }


}
