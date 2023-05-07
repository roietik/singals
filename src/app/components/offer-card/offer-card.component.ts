import {Component, EventEmitter, Input, Output} from '@angular/core';
import {OfferType} from '../../enums/offer-type.enum';
import {Contract} from '../../interfaces/contract.interface';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss']
})
export class OfferCardComponent {
  @Input()
  public set contract(contract: Contract) {
    this.imgPath = `${this.offerImgPath}${contract.imgName}.${contract.imgExtension}`;
    this.header = contract.header;
    this.description = contract.description;
    this.offerType = contract.offerType;
  };

  @Output()
  public offerClicked: EventEmitter<OfferType> = new EventEmitter<OfferType>();

  public imgPath: string;
  public header: string;
  public description: string;
  public offerType: OfferType;

  private offerImgPath: string = '../../../assets/img/';

  public offerChanged(): void {
    this.offerClicked.emit(this.offerType);
  }
}
