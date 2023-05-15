export interface FuelDetails {
  stateId: string
  stateName: string
  countryId: string
  countryName: string
  applicableOn: string
  fuel: Fuel
}

export interface Fuel {
  petrol: Petrol
  diesel: Diesel
  cng: Cng
  lpg: Lpg
}

export interface Petrol {
  retailPrice: number
  retailPriceChange: number
  retailUnit: string
  currency: string
  retailPriceChangeInterval: string
}

export interface Diesel {
  retailPrice: number
  retailPriceChange: number
  retailUnit: string
  currency: string
  retailPriceChangeInterval: string
}

export interface Cng {
  retailPrice: number
  retailPriceChange: number
  retailUnit: string
  currency: string
  retailPriceChangeInterval: string
}

export interface Lpg {
  retailPrice: number
  retailPriceChange: number
  retailUnit: string
  currency: string
  retailPriceChangeInterval: string
}
