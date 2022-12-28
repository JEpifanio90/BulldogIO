import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bldg-intro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './intro.view.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroView {

}
