import { NgModule } from "@angular/core";

import { AppRoutingModule } from "@bulldog/app/app-routing.module";
import { AppComponent } from "@bulldog/app/app.component";
import { CoreModule } from "@bulldog/core/core.module";
import { FeaturesView } from "@bulldog/shared/components/features/features.view";
import { HeaderView } from "@bulldog/shared/components/header/header.view";
import { IntroView } from "@bulldog/shared/components/intro/intro.view";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    HeaderView,
    IntroView,
    FeaturesView
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
