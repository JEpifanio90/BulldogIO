import { isDevMode, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ServiceWorkerModule } from "@angular/service-worker";

import { AppRoutingModule } from "@bulldog/app/app-routing.module";
import { AppComponent } from "@bulldog/app/app.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: !isDevMode(),
      registrationStrategy: "registerWhenStable:30000"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
