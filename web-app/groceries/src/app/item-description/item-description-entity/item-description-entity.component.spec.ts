import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDescriptionEntityComponent } from './item-description-entity.component';

describe('ItemDescriptionEntityComponent', () => {
  let component: ItemDescriptionEntityComponent;
  let fixture: ComponentFixture<ItemDescriptionEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemDescriptionEntityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDescriptionEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
