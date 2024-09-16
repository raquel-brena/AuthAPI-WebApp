import { Component } from '@angular/core';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { SelectComponent } from '../../../../globalComponents/select/select.component';

@Component({
  selector: 'app-menu-filter',
  standalone: true,
  imports: [CheckboxComponent, SelectComponent],
  templateUrl: './menu-filter.component.html',
  styleUrl: './menu-filter.component.scss',
})
export class MenuFilterComponent {
  productStatusSelected: string = 'All';
  productTypeSelected: string = 'Retail';

  statusList = ['All', 'Active', 'Inactive', 'Draft'];
  typesList = ['Retail', 'Wholesale'];
}
