import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';
import {
  FormsModule
} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import {
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatToolbarModule,
  MatButtonModule,
  MatExpansionModule
} from '@angular/material';
import {
  AppComponent
} from './app.component';
import {
  HomeComponent
} from './home/home.component';
import {
  FormComponent
} from './form/form.component';
import { LoadingComponent } from './loading/loading.component';
import { ResultsComponent } from './results/results.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    LoadingComponent,
    ResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
