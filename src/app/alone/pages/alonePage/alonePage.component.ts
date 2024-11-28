import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CounterAloneComponent } from '../../components/counterAlone/counterAlone.component';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';

@Component({
  standalone: true,
  imports: [CounterAloneComponent, SideMenuComponent],
  templateUrl: './alonePage.component.html',
  styleUrls: ['./alonePage.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlonePageComponent {}
