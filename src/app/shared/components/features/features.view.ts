import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "bldg-features",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./features.view.html",
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeaturesView {
  constructor() {}
}
