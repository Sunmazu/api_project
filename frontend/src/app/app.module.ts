﻿import { ObservableComponent } from './app-shell/observable/observable.component';
import { PictureService } from './shared/picture.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MasterDetailModule } from './app-shell/master-detail/master-detail.module';
import { ListModule } from './app-shell/list/list.module';
import { GridModule } from './app-shell/grid/grid.module';
import { NavBarComponent } from './app-shell/nav-bar/nav-bar.component';
import { FooterComponent } from './app-shell/footer/footer.component';
import { ServiceInterceptor } from './service.interceptor';

@NgModule({
  declarations: [
    AppComponent, 
    NavBarComponent, 
    FooterComponent,
    ObservableComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MasterDetailModule,
    ListModule,
    GridModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServiceInterceptor,
      multi: true
    },
    PictureService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
