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

const goldCoins = [
  { name: "سکه تمام جدید", price: "۱۹۹,۴۷۰,۰۰۰", change: 2.63, up: true },
  { name: "سکه تمام قدیم", price: "۱۹۴,۳۳۰,۰۰۰", change: 2.82, up: true },
  { name: "نیم سکه", price: "۱۰۲,۹۹۰,۰۰۰", change: 4.03, up: true },
  { name: "ربع سکه", price: "۵۶,۰۰۰,۰۰۰", change: 3.7, up: true },
  { name: "سکه گرمی", price: "۲۹,۰۰۰,۰۰۰", change: 3.57, up: true },
  { name: "مثقال طلا", price: "۸۹,۱۷۰,۰۰۰", change: 2.77, up: true },
  { name: "گرم ۱۸ عیار", price: "۲۰,۵۹۰,۰۰۰", change: 2.8, up: true },
  { name: "اونس جهانی", price: "$۴,۶۶۸", change: 1.0, up: false },
]

const cryptos = [
  { name: "بیت‌کوین", symbol: "BTC", price: "$۸۱,۰۶۹", change: 0.05, up: false },
  { name: "اتریوم", symbol: "ETH", price: "$۲,۳۳۰", change: 0.98, up: false },
  { name: "سولانا", symbol: "SOL", price: "$۹۴.۷۸", change: 0.99, up: false },
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
                <div className="bg-gradient-to-l from-primary/10 to-transparent rounded-lg p-3 text-center">
                  <div className="text-xs text-muted-foreground mb-1">قیمت (تومان)</div>
                  <div className="font-bold text-lg text-primary">{currency.price}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Gold & Coins Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <span className="text-3xl">🪙</span>
            سکه و <span className="text-primary">طلا</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {goldCoins.map((item) => (
              <Card key={item.name} className="bg-gradient-to-br from-primary/5 to-card border-primary/20 hover:shadow-lg hover:shadow-primary/10 transition-all">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bold text-foreground">{item.name}</div>
                    <div className={`flex items-center gap-1 text-sm font-medium ${item.up ? 'text-green-600' : 'text-red-500'}`}>
                      {item.up ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                      {item.change}%
                    </div>
                  </div>
                  <div className="font-bold text-lg text-primary">{item.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Crypto Section */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <span className="text-3xl">💎</span>
            ارزهای <span className="text-primary">دیجیتال</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cryptos.map((crypto) => (
              <Card key={crypto.symbol} className="bg-card border-border hover:shadow-lg hover:shadow-primary/10 transition-all">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <div className="font-bold text-foreground">{crypto.name}</div>
                      <div className="text-sm text-muted-foreground">{crypto.symbol}</div>
                    </div>
                    <div className={`flex items-center gap-1 text-sm font-medium ${crypto.up ? 'text-green-600' : 'text-red-500'}`}>
                      {crypto.up ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                      {crypto.change}%
                    </div>
                  </div>
                  <div className="font-bold text-lg text-primary" dir="ltr">{crypto.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
