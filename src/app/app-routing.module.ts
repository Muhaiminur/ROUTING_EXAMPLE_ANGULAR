import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AndroidComponent } from './android/android.component';
import { JavaComponent } from './java/java.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AndroidDetailsComponent } from './android-details/android-details.component';
import { AndroidTenComponent } from './android-ten/android-ten.component';
import { AndroidNineComponent } from './android-nine/android-nine.component';


const routes: Routes = [
  { path: '', redirectTo: '/android', pathMatch: 'full'},
  { path: 'android', component: AndroidComponent},
  { path: 'java', component: JavaComponent} ,
  { path: 'android/:num', 
    component: AndroidDetailsComponent,
    children :[
      {path: 'nine',component :AndroidNineComponent},
      {path: 'ten',component :AndroidTenComponent}
    ]
  } ,
  { path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [AndroidComponent,JavaComponent,PageNotFoundComponent,AndroidDetailsComponent];