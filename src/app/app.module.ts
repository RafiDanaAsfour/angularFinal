import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {LogModule} from "./log/log.module";
import { LoginRoutingModule } from './log/login-routing.module';





@NgModule({
    declarations: [
        AppComponent


    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        BrowserModule,
        LogModule,
        LoginRoutingModule
    ],
    providers: [],
    exports: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
