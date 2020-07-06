import { Injectable } from '@angular/core';
import {Place} from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  // tslint:disable-next-line:variable-name
  private _places: Place[] = [
      new Place(
          'p1',
          'Manhattan Mansion',
          'In the heart of New York City',
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.bungalux.com%2Fuploads%2Fblog%2F4613707611_ab3238ca78_1.jpg.647x0_q100.jpg&f=1&nofb=1',
          149.99
      ),
      new Place(
          'p2',
          'Hollywood vila',
          'Not your average vacation',
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.villaway.com%2F202303%2Fexternal%2F5b6e2cd87cee4a95d382720d%2Fbg_vp8cweijn1_202303.jpg&f=1&nofb=1',
          1249.99
      ),
      new Place(
          'p2',
          'L\'Amour toujours',
          'Paris apartment',
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.parisperfect.com%2Fg%2Fapartment-hero-images%2Fhi_3-MerlotParisPerfect-4_new.jpg&f=1&nofb=1',
          349.99
      )
  ];

  get places() {
    // @ts-ignore
    return [...this._places];
  }

  constructor() { }

  getPlace(id: string) {
      return {...this._places.find(p => p.id === id)};
  }
}
