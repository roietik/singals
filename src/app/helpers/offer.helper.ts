import {Contract} from "../interfaces/contract.interface";
import {OfferType} from "../enums/offer-type.enum";

export function prepareContracts(): Contract[] {
  return [
    {
      offerType: OfferType.BASIC,
      header: 'Podstawowy',
      description: 'Pakiet zawiera nielimitowane rozmowy, smsy oraz Internet 20GB.',
      imgName: '2',
      imgExtension: 'png',
      price: 39
    },
    {
      offerType: OfferType.PHONE,
      header: 'Mój telefon',
      description: 'Pakiet zawiera dowolny telefon w abonamencie. Sprawdź szczegóły.',
      imgName: '3',
      imgExtension: 'png',
      price: 49
    },
    {
      offerType: OfferType.OPTIMAL,
      header: 'Optymalny',
      description: 'Pakiet najbardziej opłacalny.<br>Telefon + pakiet podstawowy.',
      imgName: '4',
      imgExtension: 'png',
      price: 79
    }
  ]
}
