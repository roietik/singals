import {Component, computed, OnInit, Signal, signal, WritableSignal} from '@angular/core';

import {Contract} from '../../interfaces/contract.interface';
import {OfferType} from '../../enums/offer-type.enum';
import {prepareContracts} from "../../helpers/offer.helper";
import {OfferSignalsService} from "../../services/offer-signals.service";
import {AdditionalOfferType} from "../../enums/additional-offer.type.enum";

@Component({
  selector: 'app-offer-dashboard-signals',
  templateUrl: './offer-dashboard-signals.component.html',
  styleUrls: ['./offer-dashboard-signals.component.scss'],
})
export class OfferDashboardSignalsComponent implements OnInit {
  public AdditionalOfferType: typeof AdditionalOfferType = AdditionalOfferType;

  public contracts: Contract[];
  public activeOffer: Contract;
  public totalPrice: Signal<number> = signal(0);
  public basePriceSignal: WritableSignal<number> = signal(0);

  public title: string = 'Sygnały';

  constructor(private offerService: OfferSignalsService) {
  }

  public ngOnInit(): void {
    this.contracts = prepareContracts();

    this.totalPrice = computed(() => {
      console.log('-- AKTUALIZACJA Z COMPUTED');
      return this.basePriceSignal() + this.offerService.insuranceSignal() + this.offerService.abroadSignal() + this.offerService.secondPhoneNumberSignal()
    });
  }

  public offerChanged(offerType: OfferType): void {
    console.log('klient zmienił abonament');
    this.activeOffer = this.contracts.find((contract: Contract) => contract.offerType === offerType);
    this.basePriceSignal.set(this.activeOffer.price);
  }

  public additionalServiceChecked(additionalOfferType: AdditionalOfferType, event: Event): void {
    console.log('klient wbrał ofertę dodatkową');
    this.offerService.additionalServiceChecked(additionalOfferType, event);
  }

  public saveClicked(): void {
    console.log('Przycisk SAVE został kliknięty');
  }
}
