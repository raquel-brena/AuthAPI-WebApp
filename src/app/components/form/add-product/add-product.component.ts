import { Component, Input, Output } from '@angular/core';
import { Product } from '../../../models/product';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss',
})
export class AddProductComponent {
  @Output() isAddSelectedChange: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  @Output() productsUpdated: EventEmitter<Product[]> = new EventEmitter<
    Product[]
  >();
  @Input() productSelected!: Product;

  constructor(private productService: ProductService) {
    this.productSelected = this.mockProduct;
  }

  categories: String[] = ['ACESSORIO', 'NOTEBOOK', 'DESKTOP', 'MONITOR'];
  editForm!: FormGroup;

  mockProduct: Product = {
    name: 'teste',
    description: 'teste',
    sku: 'teste',
    category: 'MONITOR',
    variants: 0,
    gender: 'male',
    retail_price: 0,
    wholesale_price: 0,
    status: 'active',
    barcode: '',
    unit: 'each',
    stock: {
      on_hand: 0,
      to_be_receveid: 0,
      to_be_packed: 0,
    },
    history: [],
    notes: [],
  };

  ngOnInit() {
    this.editForm = new FormGroup({
      name: new FormControl(this.productSelected.name),
      description: new FormControl(
        this.productSelected.description ? this.productSelected.description : ''
      ),
      sku: new FormControl(this.productSelected.sku),
      category: new FormControl(this.productSelected.category),
    });
  }

  cancelEdit = () => {
    this.isAddSelectedChange.emit(false);
  };

  updateProduct = (
    sku: string,
    name: string,
    description: string,
    price: number,
    quantity: number,
    category: string
  ) => {
    const updatedProduct: Product = {
      name,
      description,
      sku,
      category,
      variants: 0,
      gender: 'male',
      retail_price: 0,
      wholesale_price: 0,
      status: 'active',
      barcode: '',
      unit: 'each',
      stock: {
        on_hand: 0,
        to_be_receveid: 0,
        to_be_packed: 0,
      },
      history: [],
      notes: [],
    };

    this.productService.updatedProduct(updatedProduct).subscribe(
      () => {
        this.productService
          .getProducts()
          .subscribe((productsEdited: Product[]) => {
            this.productsUpdated.emit(productsEdited);
            this.isAddSelectedChange.emit(false);
          });
      },
      (error) => {
        console.error(error);
      }
    );
  };
}
