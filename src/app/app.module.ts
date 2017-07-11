import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FirebaseService } from './services/firebase.service';
import { ContentComponent } from './content/content.component';
import { EmployeeListComponent } from './content/employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    EmployeeListComponent,
    EmployeeFormComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBV5r1gbdH83l5PhFYkzviiMeJ3Ba3KzHA",
      authDomain: "ng-training-a4c3c.firebaseapp.com",
      databaseURL: "https://ng-training-a4c3c.firebaseio.com",
      projectId: "ng-training-a4c3c",
      storageBucket: "ng-training-a4c3c.appspot.com",
      messagingSenderId: "144733850818"
    }),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [AngularFireDatabase, FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
