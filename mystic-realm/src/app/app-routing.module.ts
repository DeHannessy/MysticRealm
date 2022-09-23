import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PathFinderComponent } from './components/path-finder/path-finder.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'path-finder', pathMatch: 'full',
  },
  { path: 'path-finder', component: PathFinderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
