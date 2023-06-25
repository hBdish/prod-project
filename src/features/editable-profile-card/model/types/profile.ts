import { Currency } from 'helpers/currency';
import { Country } from 'helpers/country';

export interface Profile {
    first?: string,
    lastname?: string,
    age?: number
    currency?: Currency
    country?: Country
    city?: string
    username?: string
    avatar?: string
}

export interface ProfileSchema {
    data?: Profile
    form?: Profile
    isLoading: boolean
    error?: string
    readonly: boolean
}
