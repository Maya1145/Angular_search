
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrgRouting } from './app-layout.routing';
import { AppLayoutComponent } from './app-layout.component';
import { SearchService } from "./serviceFloder/search.service";
import { HttpModule } from "@angular/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppParentDashComponent } from "./app-parent-dash/app-parent-dash.component";
import { AppChildDashComponent } from "./app-child-dash/app-child-dash.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    PrgRouting,
    ReactiveFormsModule
  ],
  declarations: [AppLayoutComponent, AppParentDashComponent, AppChildDashComponent],
  providers: [SearchService]
})
export class AppLayoutModule { }
