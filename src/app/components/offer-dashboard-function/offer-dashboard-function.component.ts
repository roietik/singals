import {Component, OnInit} from '@angular/core';

import {Contract} from '../../interfaces/contract.interface';
import {OfferType} from '../../enums/offer-type.enum';
import {prepareContracts} from "../../helpers/offer.helper";
import {AdditionalOfferType} from "../../enums/additional-offer.type.enum";

@Component({
  selector: 'app-offer-dashboard-function',
  templateUrl: './offer-dashboard-function.component.html',
  styleUrls: ['./offer-dashboard-function.component.scss'],
})
export class OfferDashboardFunctionComponent implements OnInit {
  public AdditionalOfferType: typeof AdditionalOfferType = AdditionalOfferType;

  public contracts: Contract[];
  public activeOffer: Contract;

  public insuranceValue: number = 0;
  public abroadValue: number = 0;
  public secondNumberValue: number = 0;

  public title: string = 'Funkcje';

  public ngOnInit(): void {
    this.contracts = prepareContracts();
  }

  public offerChanged(offerType: OfferType): void {
    console.log('klient zmienił abonament');
    this.activeOffer = this.contracts.find((contract: Contract) => contract.offerType === offerType);
  }

  public additionalServiceChecked(additionalOfferType: AdditionalOfferType, event: Event): void {
    console.log('klient wybrał opcję dodatkową');
    const checkboxEvent: HTMLInputElement = event.target as HTMLInputElement;

    switch (additionalOfferType) {
      case AdditionalOfferType.INSURANCE:
        this.insuranceValue = checkboxEvent.checked ? 9 : 0;
        return;
      case AdditionalOfferType.ABROAD:
        this.abroadValue = checkboxEvent.checked ? 19 : 0;
        return;
      case AdditionalOfferType.SECOND_NUMBER:
        this.secondNumberValue = checkboxEvent.checked ? 13 : 0;
        return;
    }
  }

  public totalPrice(): number {
    console.log('-- AKTUALIZACJA ABONAMENTU Z FUNKCJi', this.activeOffer.price + this.insuranceValue + this.abroadValue + this.secondNumberValue);
    return this.activeOffer.price + this.insuranceValue + this.abroadValue + this.secondNumberValue;
  }

  public saveClicked(): void {
    console.log('Przycisk SAVE został kliknięty');
  }
}
