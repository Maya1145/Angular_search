
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routing } from './app.router';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { AppLayoutModule } from "./app-layout/app-layout.module";
import { SearchService } from "./app-layout/serviceFloder/search.service";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppLayoutModule,
    Routing,
    ReactiveFormsModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule {}
