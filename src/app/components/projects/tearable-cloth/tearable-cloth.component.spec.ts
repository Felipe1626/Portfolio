import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TearableClothComponent } from './tearable-cloth.component';

describe('TearableClothComponent', () => {
  let component: TearableClothComponent;
  let fixture: ComponentFixture<TearableClothComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TearableClothComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TearableClothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
