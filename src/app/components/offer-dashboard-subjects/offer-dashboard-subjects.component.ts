import {Component, OnInit} from '@angular/core';

import {Contract} from '../../interfaces/contract.interface';
import {OfferType} from '../../enums/offer-type.enum';
import {Destroyable} from "../../shared/destroyable";
import {prepareContracts} from "../../helpers/offer.helper";
import {AdditionalOfferType} from "../../enums/additional-offer.type.enum";
import {OfferSubjectsService} from "../../services/offer-subjects.service";
import {BehaviorSubject, combineLatest, takeUntil} from "rxjs";

@Component({
  selector: 'app-offer-dashboard-subjects',
  templateUrl: './offer-dashboard-subjects.component.html',
  styleUrls: ['./offer-dashboard-subjects.component.scss'],
})
export class OfferDashboardSubjectsComponent extends Destroyable implements OnInit {
  public AdditionalOfferType: typeof AdditionalOfferType = AdditionalOfferType;

  public contracts: Contract[];
  public activeOffer: Contract;
  public totalPrice: number = 0;

  public activeOfferPrice$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  public title: string = 'Subjecty';

  constructor(private offerService: OfferSubjectsService) {
    super();
  }

  public ngOnInit(): void {
    this.contracts = prepareContracts();

    combineLatest([this.offerService.insurance$, this.offerService.secondPhoneNumber$, this.offerService.abroad$, this.activeOfferPrice$])
      .pipe(takeUntil(this.destroyed$))
      .subscribe(([insuranceValue, secondPhoneValue, abroadValue, activeOfferPrice]: [number, number, number, number]) => {
        console.log('-- AKTUALIZACJA Z COMBINE LATEST');
        this.totalPrice = insuranceValue + secondPhoneValue + abroadValue + activeOfferPrice
      })
  }

  public offerChanged(offerType: OfferType): void {
    console.log('klient zmienił abonament');
    this.activeOffer = this.contracts.find((contract: Contract) => contract.offerType === offerType);
    this.activeOfferPrice$.next(this.activeOffer.price);
  }

  public additionalServiceChecked(additionalOfferType: AdditionalOfferType, event: Event): void {
    console.log('klient wybrał pakiet dodatkowy');
    this.offerService.additionalServiceChecked(additionalOfferType, event);
  }

  public saveClicked(): void {
    console.log('Przycisk SAVE został kliknięty');
  }
}
