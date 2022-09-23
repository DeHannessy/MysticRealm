import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PathFinderComponent } from './components/path-finder/path-finder.component';
import { RealmCreatorComponent } from './components/realm-creator/realm-creator.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'path-finder', pathMatch: 'full',
  },
  { path: 'path-finder', component: PathFinderComponent,
  },
  { path: 'realm-creator', component: RealmCreatorComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
