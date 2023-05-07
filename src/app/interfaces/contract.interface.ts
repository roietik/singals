import {OfferType} from '../enums/offer-type.enum';


export interface Contract {
  offerType: OfferType;
  header: string;
  description: string;
  imgName: string;
  imgExtension: string;
  price: number;
}
