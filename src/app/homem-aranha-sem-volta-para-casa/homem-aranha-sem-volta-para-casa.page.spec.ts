import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomemAranhaSemVoltaParaCasaPage } from './homem-aranha-sem-volta-para-casa.page';

describe('HomemAranhaSemVoltaParaCasaPage', () => {
  let component: HomemAranhaSemVoltaParaCasaPage;
  let fixture: ComponentFixture<HomemAranhaSemVoltaParaCasaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomemAranhaSemVoltaParaCasaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomemAranhaSemVoltaParaCasaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
