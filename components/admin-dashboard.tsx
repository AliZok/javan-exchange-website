"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowUp, ArrowDown, LogOut } from "lucide-react"
import { supabase } from "@/lib/supabase"

interface CurrencyRate {
  name: string
  name_en: string
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
  { name: "تتر", name_en: "Tether", symbol: "USDT", flag: "₮", price: "۱۸۱,۳۹۰", change: 1.92, up: true },
  { name: "پوند", name_en: "British Pound", symbol: "GBP", flag: "£", price: "۲۴۸,۸۷۰", change: 3.87, up: true },
  { name: "دلار", name_en: "US Dollar", symbol: "USD", flag: "$", price: "۱۸۲,۸۷۰", change: 3.79, up: true },
  { name: "دلار کانادا", name_en: "Canadian Dollar", symbol: "CAD", flag: "$", price: "۱۳۳,۸۳۰", change: 3.78, up: true },
  { name: "درهم", name_en: "UAE Dirham", symbol: "AED", flag: "🇦🇪", price: "۴۹,۹۲۰", change: 4.09, up: true },
  { name: "ریال عمان", name_en: "Omani Rial", symbol: "OMR", flag: "🇴🇲", price: "۴۷۵,۶۱۰", change: 3.64, up: true },
  { name: "لیر ترکیه", name_en: "Turkish Lira", symbol: "TRY", flag: "₺", price: "۴,۰۳۰", change: 3.6, up: true },
]

export function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [currencies, setCurrencies] = useState<CurrencyRate[]>(initialCurrencies)
  const [newPrices, setNewPrices] = useState<{ [key: string]: string }>({})
  const [percentageChanges, setPercentageChanges] = useState<{ [key: string]: string }>({})
  const [newNameEn, setNewNameEn] = useState<{ [key: string]: string }>({})
  const [newIconPath, setNewIconPath] = useState<{ [key: string]: string }>({})

  const handlePriceChange = (symbol: string, value: string) => {
    setNewPrices(prev => ({ ...prev, [symbol]: value }))
  }

  const handlePercentageChange = (symbol: string, value: string) => {
    setPercentageChanges(prev => ({ ...prev, [symbol]: value }))
  }

  const handleNameEnChange = (symbol: string, value: string) => {
    setNewNameEn(prev => ({ ...prev, [symbol]: value }))
  }

  const handleIconPathChange = (symbol: string, value: string) => {
    setNewIconPath(prev => ({ ...prev, [symbol]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const updatedCurrencies = currencies.map(currency => {
      const newPrice = newPrices[currency.symbol]
      const percentageChange = percentageChanges[currency.symbol]
      const newNameEnValue = newNameEn[currency.symbol]
      const newIconPathValue = newIconPath[currency.symbol]
      
      if (newPrice || percentageChange || newNameEnValue || newIconPathValue) {
        return {
          ...currency,
          name_en: newNameEnValue || currency.name_en,
          flag: newIconPathValue || currency.flag,
          price: newPrice || currency.price,
          change: percentageChange ? parseFloat(percentageChange) : currency.change,
          up: percentageChange ? parseFloat(percentageChange) >= 0 : currency.up
        }
      }
      return currency
    })

    // Insert each currency into the database using Supabase directly
    for (const currency of updatedCurrencies) {
      try {
        // Convert Persian numerals to standard numerals and remove commas
        const convertPersianToEnglish = (str: string) => {
          const persianNumerals = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
          const englishNumerals = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
          let result = str.replace(/,/g, '')
          for (let i = 0; i < persianNumerals.length; i++) {
            result = result.replace(new RegExp(persianNumerals[i], 'g'), englishNumerals[i])
          }
          return result
        }

        const { data, error } = await supabase
          .from('javan-ex-currencies')
          .insert([
            {
              name: currency.name,
              name_en: currency.name_en,
              icon_path: currency.flag,
              price: convertPersianToEnglish(currency.price),
              change_percent: currency.change
            }
          ])

        if (error) {
          console.error('Supabase error:', error)
          alert(`خطا در ثبت ${currency.name}: ${error.message}`)
          return
        }
      } catch (error) {
        console.error('Error inserting currency:', error)
        alert(`خطا در ثبت ${currency.name}`)
        return
      }
    }

    setCurrencies(updatedCurrencies)
    alert("تغییرات با موفقیت ثبت شد!")
    
    // Clear form inputs
    setNewPrices({})
    setPercentageChanges({})
    setNewNameEn({})
    setNewIconPath({})
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
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor={`name-en-${currency.symbol}`}>نام انگلیسی</Label>
                      <Input
                        id={`name-en-${currency.symbol}`}
                        type="text"
                        placeholder={currency.name_en}
                        value={newNameEn[currency.symbol] || ""}
                        onChange={(e) => handleNameEnChange(currency.symbol, e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`icon-path-${currency.symbol}`}>مسیر آیکون</Label>
                      <Input
                        id={`icon-path-${currency.symbol}`}
                        type="text"
                        placeholder={currency.flag}
                        value={newIconPath[currency.symbol] || ""}
                        onChange={(e) => handleIconPathChange(currency.symbol, e.target.value)}
                      />
                    </div>
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
                  </div>
                  <div className="mt-4">
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <div className="text-sm text-muted-foreground mb-1">وضعیت فعلی</div>
                      <div className="font-bold text-lg">{currency.price}</div>
                      <div className={`flex items-center gap-1 justify-center text-sm font-medium ${currency.up ? 'text-green-600' : 'text-red-500'}`}>
                        {currency.up ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                        {currency.change}%
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
