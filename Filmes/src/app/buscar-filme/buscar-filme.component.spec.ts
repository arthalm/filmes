import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarFilmeComponent } from './buscar-filme.component';

describe('BuscarFilmeComponent', () => {
  let component: BuscarFilmeComponent;
  let fixture: ComponentFixture<BuscarFilmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuscarFilmeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
