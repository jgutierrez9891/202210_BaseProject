/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { faker } from '@faker-js/faker';
import { PlantaListaComponent } from './planta-lista.component';
import { PlantaService } from '../planta.service';
import { Planta } from '../planta';

describe('PlantaListaComponent', () => {
  let component: PlantaListaComponent;
  let fixture: ComponentFixture<PlantaListaComponent>;
  let debug : DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantaListaComponent ],
      imports: [HttpClientModule],
      providers: [PlantaService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantaListaComponent);
    component = fixture.componentInstance;

    component.plantas = [
      new Planta(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      ),
      new Planta(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      ),
      new Planta(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      )
    ];

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('table should have four rows ', () => {
    let rows = fixture.nativeElement.querySelectorAll('.row')
    expect(rows.length).toEqual(4);
  });

});
