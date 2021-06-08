import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartEntityComponent } from './cart-entity.component';

describe('CartEntityComponent', () => {
  let component: CartEntityComponent;
  let fixture: ComponentFixture<CartEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartEntityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
