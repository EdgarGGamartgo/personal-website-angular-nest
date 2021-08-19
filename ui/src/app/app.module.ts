import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageSidebarComponent } from './image-sidebar/image-sidebar.component';
import { HamburguerSidebarComponent } from './hamburguer-sidebar/hamburguer-sidebar.component';
import { MenuIconComponent } from './menu-icon/menu-icon.component';
import { HeaderComponent } from './header/header.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageSidebarComponent,
    HamburguerSidebarComponent,
    MenuIconComponent,
    HeaderComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
