import {Injectable, signal, WritableSignal} from '@angular/core';
import {AdditionalOfferType} from "../enums/additional-offer.type.enum";
@Injectable({
  providedIn: 'root'
})
export class OfferSignalsService {
  insuranceSignal: WritableSignal<number> = signal(null);
  abroadSignal: WritableSignal<number> = signal(null);
  secondPhoneNumberSignal: WritableSignal<number> = signal(null);

  additionalServiceChecked(additionalOfferType: AdditionalOfferType, event: Event): void {
    const checkboxEvent: HTMLInputElement = event.target as HTMLInputElement;

    switch (additionalOfferType) {
      case AdditionalOfferType.INSURANCE:
        this.insuranceSignal.set(checkboxEvent.checked ? 9 : 0);
        return;
      case AdditionalOfferType.ABROAD:
        this.abroadSignal.set(checkboxEvent.checked ? 19 : 0);
        return;
      case AdditionalOfferType.SECOND_NUMBER:
       this.secondPhoneNumberSignal.set(checkboxEvent.checked ? 13 : 0);
        return;
    }
  }
}
