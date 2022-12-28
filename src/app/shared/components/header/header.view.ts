import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "bldg-header",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./header.view.html",
  styles: [
    "#toggle_nav:checked ~ div #hamburger #line {\n" +
    "  @apply rotate-45 translate-y-1.5\n" +
    "}\n" +
    "\n" +
    "#toggle_nav:checked ~ div #hamburger #line2 {\n" +
    "  @apply -rotate-45 -translate-y-1\n" +
    "}\n"
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderView {

}
