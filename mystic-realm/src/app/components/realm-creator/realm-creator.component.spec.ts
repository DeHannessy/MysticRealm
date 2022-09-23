import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealmCreatorComponent } from './realm-creator.component';

describe('RealmCreatorComponent', () => {
  let component: RealmCreatorComponent;
  let fixture: ComponentFixture<RealmCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealmCreatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealmCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
