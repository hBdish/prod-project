import { Currency } from 'helpers/currency';
import { Country } from 'helpers/country';
import { ValidateProfileError } from '../const/editableProfileCardConst';

export interface Profile {
  id?: string
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
  validateError?: ValidateProfileError[]
}
