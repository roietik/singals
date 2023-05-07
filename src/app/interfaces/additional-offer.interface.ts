import {WritableSignal} from '@angular/core';

export interface AdditionalOffer {
  label: string;
  price: WritableSignal<number>;
}
