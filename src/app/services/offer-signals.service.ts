import {Injectable, signal, WritableSignal} from '@angular/core';
import {AdditionalOfferType} from "../enums/additional-offer.type.enum";

@Injectable({
  providedIn: 'root'
})
export class OfferSignalsService {
  public insuranceSignal: WritableSignal<number> = signal(null);
  public abroadSignal: WritableSignal<number> = signal(null);
  public secondPhoneNumberSignal: WritableSignal<number> = signal(null);

  public additionalServiceChecked(additionalOfferType: AdditionalOfferType, event: Event): void {
    const checkboxEvent: HTMLInputElement = event.target as HTMLInputElement;

    switch (additionalOfferType) {
      case AdditionalOfferType.INSURANCE:
        checkboxEvent.checked ? this.insuranceSignal.set(9) : this.insuranceSignal.set(0);
        return;
      case AdditionalOfferType.ABROAD:
        checkboxEvent.checked ? this.abroadSignal.set(19) : this.abroadSignal.set(0);
        return;
      case AdditionalOfferType.SECOND_NUMBER:
        checkboxEvent.checked ? this.secondPhoneNumberSignal.set(13) : this.secondPhoneNumberSignal.set(0);
        return;
    }
  }
}
