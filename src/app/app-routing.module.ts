import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "src/app/home/home.component";
import { SettingsComponent } from "src/app/settings/settings.component";
import { ProfileComponent } from "src/app/profile/profile.component";

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
   {
    path:'settings',
    component:SettingsComponent
  },
    {
    path:'profile',
    component:ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
