import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {AdditionalOfferType} from "../enums/additional-offer.type.enum";

@Injectable({
  providedIn: 'root'
})
export class OfferSubjectsService {
  public insurance$: BehaviorSubject<number> = new BehaviorSubject(null);
  public abroad$: BehaviorSubject<number> = new BehaviorSubject(null);
  public secondPhoneNumber$: BehaviorSubject<number> = new BehaviorSubject(null);


  public additionalServiceChecked(additionalOfferType: AdditionalOfferType, event: Event): void {
    const checkboxEvent: HTMLInputElement = event.target as HTMLInputElement;

    switch (additionalOfferType) {
      case AdditionalOfferType.INSURANCE:
        this.insurance$.next(checkboxEvent.checked ? 9 : 0);
        return;
      case AdditionalOfferType.ABROAD:
        this.abroad$.next(checkboxEvent.checked ? 19 : 0);
        return;
      case AdditionalOfferType.SECOND_NUMBER:
        this.secondPhoneNumber$.next(checkboxEvent.checked ? 13 : 0);
        return;
    }
  }
}
