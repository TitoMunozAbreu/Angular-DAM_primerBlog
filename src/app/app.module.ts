import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListadoComponent } from './vista/listado/listado.component';
import { EntradaComponent } from './vista/listado/entrada/entrada.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListadoComponent,
    EntradaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
