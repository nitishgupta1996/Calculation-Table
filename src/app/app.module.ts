import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTableComponent } from './create-table/create-table.component';
import { AddRowComponent } from './add-row/add-row.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateTableComponent,
    AddRowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
