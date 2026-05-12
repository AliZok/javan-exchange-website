"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowUp, ArrowDown, LogOut } from "lucide-react"

interface CurrencyRate {
  name: string
  symbol: string
  flag: string
  price: string
  change: number
  up: boolean
}

interface AdminDashboardProps {
  onLogout: () => void
}

const initialCurrencies: CurrencyRate[] = [
  { name: "تتر", symbol: "USDT", flag: "₮", price: "۱۸۱,۳۹۰", change: 1.92, up: true },
  { name: "پوند", symbol: "GBP", flag: "£", price: "۲۴۸,۸۷۰", change: 3.87, up: true },
  { name: "دلار", symbol: "USD", flag: "$", price: "۱۸۲,۸۷۰", change: 3.79, up: true },
  { name: "دلار کانادا", symbol: "CAD", flag: "$", price: "۱۳۳,۸۳۰", change: 3.78, up: true },
  { name: "درهم", symbol: "AED", flag: "🇦🇪", price: "۴۹,۹۲۰", change: 4.09, up: true },
  { name: "ریال عمان", symbol: "OMR", flag: "🇴🇲", price: "۴۷۵,۶۱۰", change: 3.64, up: true },
  { name: "لیر ترکیه", symbol: "TRY", flag: "₺", price: "۴,۰۳۰", change: 3.6, up: true },
]

export function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [currencies, setCurrencies] = useState<CurrencyRate[]>(initialCurrencies)
  const [newPrices, setNewPrices] = useState<{ [key: string]: string }>({})
  const [percentageChanges, setPercentageChanges] = useState<{ [key: string]: string }>({})

  const handlePriceChange = (symbol: string, value: string) => {
    setNewPrices(prev => ({ ...prev, [symbol]: value }))
  }

  const handlePercentageChange = (symbol: string, value: string) => {
    setPercentageChanges(prev => ({ ...prev, [symbol]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const updatedCurrencies = currencies.map(currency => {
      const newPrice = newPrices[currency.symbol]
      const percentageChange = percentageChanges[currency.symbol]
      
      if (newPrice || percentageChange) {
        return {
          ...currency,
          price: newPrice || currency.price,
          change: percentageChange ? parseFloat(percentageChange) : currency.change,
          up: percentageChange ? parseFloat(percentageChange) >= 0 : currency.up
        }
      }
      return currency
    })

    setCurrencies(updatedCurrencies)
    
    alert("مرحله بعد: برای ثبت در دیتابیس آماده است!")
    
    // Clear form inputs
    setNewPrices({})
    setPercentageChanges({})
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">پنل مدیریت ارزها</h1>
          <Button onClick={onLogout} variant="outline" className="flex items-center gap-2">
            <LogOut className="w-4 h-4" />
            خروج
          </Button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-6">
            {currencies.map((currency) => (
              <Card key={currency.symbol}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-2xl">{currency.flag}</span>
                    <div>
                      <div>{currency.name}</div>
                      <div className="text-sm text-muted-foreground">{currency.symbol}</div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor={`price-${currency.symbol}`}>قیمت جدید (تومان)</Label>
                      <Input
                        id={`price-${currency.symbol}`}
                        type="text"
                        placeholder={currency.price}
                        value={newPrices[currency.symbol] || ""}
                        onChange={(e) => handlePriceChange(currency.symbol, e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`change-${currency.symbol}`}>درصد تغییر</Label>
                      <Input
                        id={`change-${currency.symbol}`}
                        type="number"
                        step="0.01"
                        placeholder={`${currency.change}%`}
                        value={percentageChanges[currency.symbol] || ""}
                        onChange={(e) => handlePercentageChange(currency.symbol, e.target.value)}
                      />
                      <p className="text-xs text-muted-foreground">
                        مثبت: افزایش قیمت | منفی: کاهش قیمت
                      </p>
                    </div>
                    <div className="flex items-end">
                      <div className="text-center p-4 bg-muted rounded-lg">
                        <div className="text-sm text-muted-foreground mb-1">وضعیت فعلی</div>
                        <div className="font-bold text-lg">{currency.price}</div>
                        <div className={`flex items-center gap-1 justify-center text-sm font-medium ${currency.up ? 'text-green-600' : 'text-red-500'}`}>
                          {currency.up ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                          {currency.change}%
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button type="submit" size="lg" className="px-8">
              ثبت تغییرات
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
