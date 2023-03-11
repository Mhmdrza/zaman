import '@emotion/react'
import type { Radius } from './style/radius'

export type DatePickerValue = number | Date | string

export type Locales = 'fa' | 'en'

export type DaysRange = 0 | 1 | 2 | 3 | 4 | 5 | 6

export type Pickers = 'days' | 'year' | 'month'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      gray: Record<number, string>
      primary: Record<number, string>
    }
    round: Radius
  }
}
