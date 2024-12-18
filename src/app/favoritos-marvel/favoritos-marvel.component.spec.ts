import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritosMarvelComponent } from './favoritos-marvel.component';

describe('FavoritosMarvelComponent', () => {
  let component: FavoritosMarvelComponent;
  let fixture: ComponentFixture<FavoritosMarvelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoritosMarvelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoritosMarvelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
