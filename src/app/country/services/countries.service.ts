import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country, Region, smallCountry } from '../interfaces/country.interface';
import { Observable, combineLatest, map, of, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })



export class CountriesService {

  private _regions: Region[] = [Region.Africa, Region.Americas, Region.Europa, Region.Asia, Region.Oceania]

  private baseUrl: string = 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient) { }

  get regions(): Region[] {
    return [...this._regions]
  }

  getCountriesByRegion(region: Region): Observable<smallCountry[]> {
    if (!region) return of([]);

    const url = `${this.baseUrl}/region/${region}?fields=name,cca3,borders`;

    return this.http.get<Country[]>(url).pipe(
      map(countries => countries.map(country => ({
        name: country.name.common,
        cca3: country.cca3,
        borders: country.borders ?? []
      })))
    )
  }

  getBordersByCountry(country: smallCountry): Observable<string[]> {
    if (!country) return of([]);

    const url = `${this.baseUrl}/name/${country}?fields=borders`;

    return this.http.get<string[]>(url).pipe(
      tap((borders) =>console.log(borders))
    )
  }

  getCountryByAlphaCode(alphaCode: string): Observable<smallCountry> {
    const url = `${this.baseUrl}/alpha/${alphaCode}?fields=name,cca3,borders`;

    return this.http.get<Country>(url).pipe(
      map(country => ({
        name: country.name.common,
        cca3: country.cca3,
        borders: country.borders ?? []
      }))
    )
  }

  getCountriesBordersByCodes( borders: string[]): Observable<smallCountry[]> {
    if(!borders || borders.length === 0) return of([]);

    const countriesRequests: Observable<smallCountry>[] = []

    borders.forEach( code => {
      const req = this.getCountryByAlphaCode(code);
      countriesRequests.push(req);
    })
    return combineLatest(countriesRequests)
  }

}
