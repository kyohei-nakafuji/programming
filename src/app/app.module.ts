import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {MaterialModule} from '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { MainComponent } from './top/main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DescriptionComponent } from './top/description/description.component';
import { CourseIntroductionComponent } from './top/course-introduction/course-introduction.component';
import { TopComponent } from './top/top/top.component';
import { CourseIntroductionDetailComponent } from './top/course-introduction-detail/course-introduction-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    DescriptionComponent,
    CourseIntroductionComponent,
    TopComponent,
    CourseIntroductionDetailComponent
  ],
  imports: [
    MaterialModule,
    FlexLayoutModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
