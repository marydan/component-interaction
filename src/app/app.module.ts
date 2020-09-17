import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MymaterialsModule } from './mymaterials/mymaterials.module';
 
import  {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewsComponent } from './news/news.component';
import {HttpClient,HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MycanactivateGuard } from './mycanactivate.guard';
import { NewstakerComponent } from './newstaker/newstaker.component';
import { NewslistviewComponent } from './newslistview/newslistview.component';
import { NewsgridviewComponent } from './newsgridview/newsgridview.component';
import { NewscardComponent } from './newscard/newscard.component';
import {MatDialogModule} from '@angular/material/dialog';
import { EditnewsdialogComponent } from './editnewsdialog/editnewsdialog.component';
import { EditnewsopenerComponent } from './editnewsopener/editnewsopener.component';
import { MytestComponent } from './mytest/mytest.component';
import { RegisterComponent } from './register/register.component';
const rout : Routes =[
 
  {
    path:'dashbrd',
    component:DashboardComponent,
    canActivate:[MycanactivateGuard],
    children:[
          {
            path:'view/list',
            component:NewslistviewComponent
          },
          {
            path:'view/grid',
            component:NewsgridviewComponent
          },
          {
            path:'',
            redirectTo:'view/grid',
            pathMatch:'full'
          },
          {
            path:'news/:newsid/edit',component:EditnewsopenerComponent,
            outlet:'newsEditoutlet'
          }
    ]
  },
  {
    path:'login',
    component:LoginComponent
  },
   {
     path:'',
     redirectTo:'login',
     pathMatch:'full'
   }


]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    NewstakerComponent,
    NewslistviewComponent,
    NewsgridviewComponent,
    NewscardComponent,
    EditnewsdialogComponent,
    EditnewsopenerComponent,
    MytestComponent,
    RegisterComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MymaterialsModule,
    FormsModule,
    HttpClientModule,
      MatDialogModule,

    ReactiveFormsModule,
    RouterModule,
    RouterModule.forRoot(rout)

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[EditnewsdialogComponent]
})
export class AppModule { }
