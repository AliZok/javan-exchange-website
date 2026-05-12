"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ArrowUp, ArrowDown } from "lucide-react"
import Image from "next/image"

const currencies = [
  { name: "تتر", symbol: "USDT", flag: "₮", price: "۱۸۱,۳۹۰", change: 1.92, up: true },
  { name: "پوند", symbol: "GBP", flag: "��", price: "۲۴۸,۸۷۰", change: 3.87, up: true },
  { name: "دلار", symbol: "USD", flag: "🇸", price: "۱۸۲,۸۷۰", change: 3.79, up: true },
  { name: "دلار کانادا", symbol: "CAD", flag: "��", price: "۱۳۳,۸۳۰", change: 3.78, up: true },
  { name: "درهم", symbol: "AED", flag: "🇦🇪", price: "۴۹,۹۲۰", change: 4.09, up: true },
  { name: "ریال عمان", symbol: "OMR", flag: "🇴🇲", price: "۴۷۵,۶۱۰", change: 3.64, up: true },
  { name: "لیر ترکیه", symbol: "TRY", flag: "��", price: "۴,۰۳۰", change: 3.6, up: true },
]


export function CurrencyRates() {
  return (
    <section id="rates" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            خرید و فروش <span className="text-primary">انواع ارزها</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            قیمت‌های به‌روز شده ارزهای معتبر در سراسر دنیا
          </p>
          <p className="text-sm text-primary mt-2 font-medium">
            آخرین به‌روزرسانی: دوشنبه ۲۱ اردیبهشت ۱۴۰۵ - ۱۵:۴۶
          </p>
        </div>

        {/* Currency Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
          {currencies.map((currency) => (
            <Card key={currency.symbol} className="bg-card hover:shadow-lg hover:shadow-primary/10 transition-all border-border group">
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{currency.flag}</span>
                    <div>
                      <div className="font-bold text-foreground">{currency.name}</div>
                      <div className="text-sm text-muted-foreground">{currency.symbol}</div>
                    </div>
                  </div>
                  <div className={`flex items-center gap-1 text-sm font-medium ${currency.up ? 'text-green-600' : 'text-red-500'}`}>
                    {currency.up ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                    {currency.change}%
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-xl p-4 text-center border border-primary/20">
                  <div className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">قیمت (تومان)</div>
                  <div className="font-bold text-xl text-primary tabular-nums">{currency.price}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

              </div>
    </section>
  )
}
