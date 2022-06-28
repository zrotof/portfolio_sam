import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

const routes: Routes = [
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: "enabled",
  onSameUrlNavigation: 'reload',
  initialNavigation: 'enabled'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
