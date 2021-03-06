import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ViewRoutingModule } from './view-routing.module'
import { ViewComponent } from './view.component'
import { MaterialComponentsModule } from '../shared/material-components/material-components.module'
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component'
import { SidenavContentComponent } from './components/sidenav-content/sidenav-content.component'
import { HomeModule } from './home/home.module';
import { FooterComponent } from './components/footer/footer.component'

@NgModule({
  declarations: [ViewComponent, NavigationBarComponent, SidenavContentComponent, FooterComponent],
  imports: [CommonModule, ViewRoutingModule, MaterialComponentsModule, HomeModule]
})
export class ViewModule {}
