export interface Pricing {
  tier: string
  most_popular: boolean
  amount_per_month: number
  title: string
  description: string
  btn_text: string
  features: {
    title: string
    checked: boolean
  }[]
}
