import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TryOneComponent } from './try-one/try-one.component';
import { TryTwoComponent } from './try-two/try-two.component';
import { TryThreeComponent } from './try-three/try-three.component';
import { Lab05Component } from './lab05/lab05.component';



const routes: Routes = [
  {
    path: 'try-one',component: TryOneComponent,
  },
  {
    path: 'try-two', component:TryTwoComponent,
  },
  {
    path: 'try-three', component: TryThreeComponent
  },
  {
    path: 'lab05', component: Lab05Component
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
