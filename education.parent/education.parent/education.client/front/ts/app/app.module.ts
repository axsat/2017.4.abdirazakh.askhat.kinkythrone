import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {HttpService} from "../service/HttpService";
import {HttpModule} from "@angular/http";
import {
    MdButtonModule, MdCardModule, MdDialogContent, MdDialogModule, MdFormFieldModule, MdIconModule, MdInputModule,
    MdSidenavModule,
    MdTableModule, MdTabsModule,
    MdToolbarModule
} from "@angular/material";
import {AuthComponent} from "./auth.component";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AdminComponent} from "./admin/admin.component";
import {MainComponent} from "./main/main.component";
import {AdminContentComponent} from "./admin/admin-content.component";
import {AdmiTabComponent} from "./admin/admin-tab-list.component";
import {MainTab1Component} from "./main/main-tab-1.component";
import {MainTab2Component} from "./main/main-tab-2.component";
import {ClientToolbarComponent} from "./main/main-tab-1/client-toolbar.component";
import {ClientTableComponent} from "./main/main-tab-1/client-table.component";
import {ClientEditWindowComponent} from "./main/main-tab-1/client_edit_window.component";

@NgModule({
    imports: [BrowserModule,
        HttpModule,
        FormsModule,
        MdButtonModule,
        MdInputModule,
        MdToolbarModule,
        MdCardModule,
        MdFormFieldModule,
        MdSidenavModule,
        MdTabsModule,
        MdTableModule,
        MdIconModule,
        MdDialogModule,
        BrowserAnimationsModule
    ],
    declarations: [AppComponent,
        AuthComponent,
        AdminComponent,
        AdmiTabComponent,
        AdminContentComponent,
        MainComponent,
        MainTab1Component,
        ClientTableComponent,
        ClientToolbarComponent,
        ClientEditWindowComponent,
        MainTab2Component
    ],
    entryComponents: [ClientEditWindowComponent],
    bootstrap: [AppComponent],
    providers: [HttpService]
})
export class AppModule {

}
