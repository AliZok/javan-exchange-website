"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeftRight, Send } from "lucide-react"
import Link from "next/link"

const currencies = [
  { code: "IRR", name: "تومان", symbol: "🇮🇷" },
  { code: "USDT", name: "تتر", symbol: "₮" },
  { code: "GBP", name: "پوند", symbol: "£" },
  { code: "USD", name: "دلار", symbol: "$" },
  { code: "CAD", name: "دلار کانادا", symbol: "$" },
  { code: "AED", name: "درهم", symbol: "🇦🇪" },
  { code: "OMR", name: "ریال عمان", symbol: "🇴🇲" },
  { code: "TRY", name: "لیر ترکیه", symbol: "₺" },
]

// Exchange rates based on Telegram post data (relative to IRR/Toman)
const rates: Record<string, number> = {
  IRR: 1,
  USDT: 181390,
  GBP: 248870,
  USD: 182870,
  CAD: 133830,
  AED: 49920,
  OMR: 475610,
  TRY: 4030,
}

export function CurrencyConverter() {
  const [fromCurrency, setFromCurrency] = useState("USD")
  const [toCurrency, setToCurrency] = useState("IRR")
  const [amount, setAmount] = useState("100")

  const convertedAmount = () => {
    const numAmount = parseFloat(amount) || 0
    const fromRate = rates[fromCurrency]
    const toRate = rates[toCurrency]
    const result = (numAmount * fromRate) / toRate
    return result.toLocaleString('fa-IR', { maximumFractionDigits: 2 })
  }

  const swapCurrencies = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }

  return (
    <section id="converter" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            تبدیل <span className="text-primary">ارز</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            به راحتی ارز مورد نظر خود را تبدیل کنید
          </p>
        </div>

        <Card className="max-w-2xl mx-auto bg-card border-primary/20 shadow-xl shadow-primary/5">
          <CardHeader className="border-b border-border bg-gradient-to-l from-primary/5 to-transparent">
            <CardTitle className="text-xl text-foreground">ماشین‌حساب تبدیل ارز</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              {/* From Currency */}
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  از ارز
                </label>
                <div className="flex gap-3">
                  <select
                    value={fromCurrency}
                    onChange={(e) => setFromCurrency(e.target.value)}
                    className="flex-1 bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {currencies.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.symbol} {c.name}
                      </option>
                    ))}
                  </select>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="flex-1 bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-left"
                    placeholder="مقدار"
                    dir="ltr"
                  />
                </div>
              </div>

              {/* Swap Button */}
              <div className="flex justify-center">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={swapCurrencies}
                  className="rounded-full w-12 h-12 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <ArrowLeftRight className="w-5 h-5" />
                </Button>
              </div>

              {/* To Currency */}
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  به ارز
                </label>
                <div className="flex gap-3">
                  <select
                    value={toCurrency}
                    onChange={(e) => setToCurrency(e.target.value)}
                    className="flex-1 bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {currencies.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.symbol} {c.name}
                      </option>
                    ))}
                  </select>
                  <div className="flex-1 bg-gradient-to-l from-primary/10 to-primary/5 border border-primary/30 rounded-lg px-4 py-3 text-primary font-bold text-left" dir="ltr">
                    {convertedAmount()}
                  </div>
                </div>
              </div>

              {/* Rate Info */}
              <div className="bg-muted rounded-lg p-4 text-center">
                <p className="text-sm text-muted-foreground">
                  نرخ تبدیل: ۱ {currencies.find(c => c.code === fromCurrency)?.name} = {(rates[fromCurrency] / rates[toCurrency]).toLocaleString('fa-IR', { maximumFractionDigits: 2 })} {currencies.find(c => c.code === toCurrency)?.name}
                </p>
              </div>

              {/* Action Button */}
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6" asChild>
                <Link href="https://t.me/javanexchang" target="_blank">
                  <Send className="w-5 h-5 ml-2" />
                  ثبت درخواست در تلگرام
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
