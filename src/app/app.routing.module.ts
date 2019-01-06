import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormComponent } from './form/form.component';
import { ResultsComponent } from './results/results.component';

const paths: Routes = [
  {path: '', component: FormComponent},
  {path: 'results', component: ResultsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(paths)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
