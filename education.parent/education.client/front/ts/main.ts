import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule);

(<any>window).canI = function (key) {
    for (let x of (<any>window).roleCans) {
        if (x === key) return true;
    }
    return false;
};
