import { Component, Input, Output } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { ImagesComponent } from './images/images.component';
import { BoxComponent } from "../../../../globalComponents/box/box.component";
import { GeneralInformationsComponent } from './general-informations/general-informations.component';
import { HistoryComponent } from './history/history.component';
import { NotesComponent } from './notes/notes.component';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MenuComponent, GeneralInformationsComponent, HistoryComponent, NotesComponent, BoxComponent],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent {
  @Input() cardSelecionado: any;
  @Input() visible!: boolean;
  menuVisible: 'General Information' | 'History' | 'Notes' =
    'General Information';

  setSelectedItem (menu: 'General Information' | 'History' | 'Notes'): void{
    this.menuVisible = menu;
  }
}
