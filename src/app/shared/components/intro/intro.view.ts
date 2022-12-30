import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "bldg-intro",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./intro.view.html",
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroView {
  constructor() { }
}
