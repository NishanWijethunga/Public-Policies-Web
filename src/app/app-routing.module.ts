import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PageNotFoundComponent } from './core/error-page/page-not-found/page-not-found.component'

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./view/view.module').then(m => m.ViewModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
