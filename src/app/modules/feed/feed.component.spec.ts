
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FeedComponent } from './feed.component';
import { FeedService } from './feed.service';

describe('FeedComponent', () => {
  let component: FeedComponent;
  let fixture: ComponentFixture<FeedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, ],
      declarations: [FeedComponent],
      providers: [FeedService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedComponent);
    component = fixture.componentInstance;
  });

  it('executes proper function when clicked to fetch previous posts', fakeAsync(() => {
    spyOn(component, 'getPreviousPosts');

    let button = fixture.debugElement.nativeElement.querySelector('button.prev');

    tick();
    button.click();
    expect(component.getPreviousPosts).toHaveBeenCalled();
  }));

  it('executes proper function when clicked to fetch next posts', fakeAsync(() => {
    spyOn(component, 'getNextPosts');

    let button = fixture.debugElement.nativeElement.querySelector('button.next');

    tick();
    button.click();
    expect(component.getNextPosts).toHaveBeenCalled();
  }));

  it('disables when data is fetching', () => {
    fixture.componentInstance.isFetching = true;
    fixture.detectChanges();

    const nextButton: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('button.nav-button.next');
    const prevButton: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('button.nav-button.next');

    expect(nextButton.disabled).toBeTruthy();
    expect(prevButton.disabled).toBeTruthy();
  });
});
