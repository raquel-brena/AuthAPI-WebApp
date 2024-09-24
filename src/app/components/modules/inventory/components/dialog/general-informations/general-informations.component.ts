import { Component } from '@angular/core';
import { ImagesComponent } from '../images/images.component';

@Component({
  selector: 'app-general-informations',
  standalone: true,
  imports: [ImagesComponent],
  templateUrl: './general-informations.component.html',
  styleUrl: './general-informations.component.scss'
})
export class GeneralInformationsComponent {

}
