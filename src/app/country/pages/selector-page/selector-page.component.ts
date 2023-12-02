import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Region, smallCountry } from '../../interfaces/country.interface';
import { filter, map, switchMap, tap } from 'rxjs';

@Component({
  selector: 'country-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent implements OnInit {

  countriesByRegion: smallCountry[] = [];
  bordersCountries: smallCountry[] = []

  public myForm: FormGroup = this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    border: ['', Validators.required],
  })

  constructor(
    private fb: FormBuilder,
    private countriesService: CountriesService
  ) { }


  ngOnInit(): void {
    this.onRegionChanged();
    this.onCountrySelected()
  }

  get regions(): Region[] {
    return this.countriesService.regions;
  }

  onRegionChanged(): void {
    this.myForm.get('region')!.valueChanges.pipe(
      tap(() => this.myForm.get('country')!.setValue('')),
      tap(() => this.bordersCountries = []),
      switchMap(region => this.countriesService.getCountriesByRegion(region)),
    )
    .subscribe( countries => {
      this.countriesByRegion = countries;
    })
  }

  onCountrySelected(): void {
    this.myForm.get('country')!.valueChanges.pipe(
      tap(() => this.myForm.get('border')!.setValue('')),
      filter ((value: string) => value.length > 0),
      switchMap(alphaCode => this.countriesService.getCountryByAlphaCode(alphaCode)),
      map (country => country.borders),
      switchMap( borders => this.countriesService.getCountriesByCodes(borders))
    )
    .subscribe( countries => {
      this.bordersCountries = countries
    })
  }



}
