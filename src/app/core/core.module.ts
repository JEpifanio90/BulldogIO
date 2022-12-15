import { CommonModule } from "@angular/common";
import { isDevMode, NgModule, Optional, SkipSelf } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ServiceWorkerModule } from "@angular/service-worker";

@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    // EffectsModule.forRoot([]),
    CommonModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: !isDevMode(),
      registrationStrategy: "registerWhenStable:30000"
    })
    // StoreModule.forRoot({ router: routerReducer }, {
    //   runtimeChecks: {
    //     strictStateImmutability: true,
    //     strictActionImmutability: true,
    //     strictStateSerializability: true,
    //     strictActionSerializability: true,
    //     strictActionWithinNgZone: true,
    //     strictActionTypeUniqueness: true
    //   }
    // }),
    // !environment.production ? StoreDevtoolsModule.instrument({ name: "JesterIO Global State" }) : [],
    // StoreRouterConnectingModule.forRoot()
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error(
        "Core Module is already loaded. Import it in the AppModule only");
    }
  }
}
