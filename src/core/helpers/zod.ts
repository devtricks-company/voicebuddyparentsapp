import dayjs from 'dayjs'
import { Currencies } from 'core/constants/countries'

export function date(date: string | Date | number | null) {
  const format = 'MMM DD, YYYY'
  if (typeof date === 'number') return dayjs.unix(date).format(format)
  return dayjs(date).format(format)
}

export function currency(code: string, symbol?: string) {
  return {
    id: code,
    name: `${Currencies?.[code as keyof typeof Currencies]} ${code}`,
    symbol,
  }
}

export function simpleDate(date: Date | string) {
  return dayjs(date).format('YYYY-MM-DD')
}

export function money({ value, currency }: { value: number | string; currency: string }) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(Number(value))
}
