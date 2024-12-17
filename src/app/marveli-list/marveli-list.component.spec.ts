import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarveliListComponent } from './marveli-list.component';

describe('MarveliListComponent', () => {
  let component: MarveliListComponent;
  let fixture: ComponentFixture<MarveliListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarveliListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarveliListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
