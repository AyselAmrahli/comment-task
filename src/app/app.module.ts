import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';

import { PickerModule } from '@ctrl/ngx-emoji-mart';

import { ReactiveFormsModule } from '@angular/forms';




import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommentBoxComponent } from './comment-box/comment-box.component';

const materialModules = [
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatMenuModule
];

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    CommentBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    PickerModule,
    ReactiveFormsModule,
    ...materialModules
  ],
  exports: [
    ...materialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
