export enum Region {
  Africa = 'Africa',
  Americas = 'Americas',
  Europa = 'Europe',
  Asia = 'Asia',
  Oceania = 'Oceania'
}

export interface smallCountry {
  name: string;
  cca3: string;
  borders: string[];
}

export interface Country {
  name:         Name;
  tld?:         string[];
  cca2:         string;
  ccn3?:        string;
  cca3:         string;
  cioc?:        string;
  independent?: boolean;
  status:       Status;
  unMember:     boolean;
  currencies:   Currencies;
  idd:          Idd;
  capital:      string[];
  altSpellings: string[];
  region:       string;
  subregion:    Subregion;
  languages:    Languages;
  translations: { [key: string]: Translation };
  latlng:       number[];
  landlocked:   boolean;
  borders?:     string[];
  area:         number;
  demonyms:     Demonyms;
  flag:         string;
  maps:         Maps;
  population:   number;
  gini?:        { [key: string]: number };
  fifa?:        string;
  car:          Car;
  timezones:    string[];
  continents:   string[];
  flags:        Flags;
  coatOfArms:   CoatOfArms;
  startOfWeek:  StartOfWeek;
  capitalInfo:  CapitalInfo;
  postalCode?:  PostalCode;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface Car {
  signs: string[];
  side:  Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}


export interface Currencies {
  EUR?: All;
  GBP?: All;
  UAH?: All;
  ALL?: All;
  DKK?: All;
  CHF?: All;
  JEP?: All;
  CZK?: All;
  RSD?: All;
  SEK?: All;
  RON?: All;
  HUF?: All;
  IMP?: All;
  GGP?: All;
  RUB?: All;
  FOK?: All;
  MKD?: All;
  GIP?: All;
  PLN?: All;
  BYN?: All;
  NOK?: All;
  MDL?: All;
  BAM?: BAM;
  ISK?: All;
  BGN?: All;
}

export interface All {
  name:   string;
  symbol: string;
}

export interface BAM {
  name: string;
}

export interface Demonyms {
  eng:  Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Flags {
  png:  string;
  svg:  string;
  alt?: string;
}

export interface Idd {
  root:     string;
  suffixes: string[];
}

export interface Languages {
  lav?: string;
  deu?: string;
  fra?: string;
  nld?: string;
  swe?: string;
  eng?: string;
  ukr?: string;
  sqi?: string;
  dan?: string;
  lit?: string;
  fin?: string;
  ita?: string;
  nrf?: string;
  de?:  string;
  ces?: string;
  slk?: string;
  srp?: string;
  mlt?: string;
  por?: string;
  ell?: string;
  est?: string;
  ron?: string;
  hun?: string;
  glv?: string;
  nfr?: string;
  tur?: string;
  rus?: string;
  ltz?: string;
  fao?: string;
  mkd?: string;
  pol?: string;
  gsw?: string;
  roh?: string;
  lat?: string;
  bel?: string;
  spa?: string;
  cnr?: string;
  nno?: string;
  nob?: string;
  smi?: string;
  hrv?: string;
  bos?: string;
  nor?: string;
  cat?: string;
  slv?: string;
  isl?: string;
  bul?: string;
  gle?: string;
}

export interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
}

export interface Name {
  common:     string;
  official:   string;
  nativeName: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common:   string;
}

export interface PostalCode {
  format: string;
  regex:  string;
}

export enum StartOfWeek {
  Monday = "monday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
  UserAssigned = "user-assigned",
}

export enum Subregion {
  CentralEurope = "Central Europe",
  EasternEurope = "Eastern Europe",
  NorthernEurope = "Northern Europe",
  SoutheastEurope = "Southeast Europe",
  SouthernEurope = "Southern Europe",
  WesternEurope = "Western Europe",
}
