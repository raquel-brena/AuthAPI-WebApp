import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerCardProductComponent } from './container-card-product.component';

describe('ContainerCardProductComponent', () => {
  let component: ContainerCardProductComponent;
  let fixture: ComponentFixture<ContainerCardProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerCardProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContainerCardProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
