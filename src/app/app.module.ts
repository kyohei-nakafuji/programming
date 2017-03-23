import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TopMainComponent } from './top-main/top-main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TopDescriptionComponent } from './top-description/top-description.component';
import { TopCourseIntroductionComponent } from './top-course-introduction/top-course-introduction.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMainComponent,
    HeaderComponent,
    FooterComponent,
    TopDescriptionComponent,
    TopCourseIntroductionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
