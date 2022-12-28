import { NgModule } from "@angular/core";

import { AppRoutingModule } from "@bulldog/app/app-routing.module";
import { AppComponent } from "@bulldog/app/app.component";
import { CoreModule } from "@bulldog/core/core.module";
import { HeaderComponent } from "@bulldog/shared/components/header/header.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    HeaderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
