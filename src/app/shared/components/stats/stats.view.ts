import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "bldg-stats",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./stats.view.html",
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatsView {

}
