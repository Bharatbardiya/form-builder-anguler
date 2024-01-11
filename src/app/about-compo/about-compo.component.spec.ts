import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCompoComponent } from './about-compo.component';

describe('AboutCompoComponent', () => {
  let component: AboutCompoComponent;
  let fixture: ComponentFixture<AboutCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutCompoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
