import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutWithMenuComponent } from './components/layout-with-menu/layout-with-menu.component';

const routes: Routes = [
  { path: '', redirectTo: '/screen/search', pathMatch: 'full' },
  {
    path: 'screen',
    component: LayoutWithMenuComponent,
    children: [
      { path: 'search', loadChildren: './features/search/search.module#SearchModule' },
      { path: 'collection', loadChildren: './features/collection/collection.module#CollectionModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
