import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { MockComponent } from "ng-mocks";

import { AppComponent } from "./app.component";

import { FeaturesView } from "@bulldog/shared/components/features/features.view";
import { HeaderView } from "@bulldog/shared/components/header/header.view";
import { IntroView } from "@bulldog/shared/components/intro/intro.view";
import { StatsView } from "@bulldog/shared/components/stats/stats.view";


describe("App Component", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MockComponent(HeaderView),
        MockComponent(IntroView),
        MockComponent(StatsView),
        MockComponent(FeaturesView)
      ],
      declarations: [
        AppComponent
      ]
    }).compileComponents();
  });

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
