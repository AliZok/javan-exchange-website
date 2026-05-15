"use client"

import { useState, useEffect } from "react"
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
  id?: string
}

interface AdminDashboardProps {
  onLogout: () => void
}

export function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [currencies, setCurrencies] = useState<CurrencyRate[]>([])
  const [loading, setLoading] = useState(true)
  const [newPrices, setNewPrices] = useState<{ [key: string]: string }>({})
  const [percentageChanges, setPercentageChanges] = useState<{ [key: string]: string }>({})
  const [newNameEn, setNewNameEn] = useState<{ [key: string]: string }>({})
  const [newIconPath, setNewIconPath] = useState<{ [key: string]: string }>({})

  useEffect(() => {
    fetchCurrencies()
  }, [])

  const formatPrice = (price: string | number) => {
    const priceStr = String(price)
    const englishNumerals = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    const persianNumerals = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
    let result = priceStr
    for (let i = 0; i < englishNumerals.length; i++) {
      result = result.replace(new RegExp(englishNumerals[i], 'g'), persianNumerals[i])
    }
    const numericValue = parseInt(priceStr.replace(/,/g, ''))
    return numericValue.toLocaleString('fa-IR')
  }

  const fetchCurrencies = async () => {
    try {
      const { data, error } = await supabase
        .from('javan-ex-currencies')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching currencies:', error)
        return
      }

      const convertedCurrencies = (data || []).map((item: any) => ({
        id: item.id,
        name: item.name,
        name_en: item.name_en,
        symbol: item.name_en.split(' ')[0] || item.name_en,
        flag: item.icon_path || '💱',
        price: formatPrice(item.price),
        change: item.change_percent,
        up: item.change_percent >= 0
      }))

      setCurrencies(convertedCurrencies)
    } catch (error) {
      console.error('Error fetching currencies:', error)
    } finally {
      setLoading(false)
    }
  }

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

    // Prepare all currencies for insertion
    const currenciesToInsert = updatedCurrencies.map(currency => ({
      name: currency.name,
      name_en: currency.name_en,
      icon_path: currency.flag,
      price: convertPersianToEnglish(currency.price),
      change_percent: currency.change
    }))

    // Insert all currencies in one API call
    try {
      const { data, error } = await supabase
        .from('javan-ex-currencies')
        .insert(currenciesToInsert)

      if (error) {
        console.error('Supabase error:', error)
        alert(`خطا در ثبت ارزها: ${error.message}`)
        return
      }
    } catch (error) {
      console.error('Error inserting currencies:', error)
      alert('خطا در ثبت ارزها')
      return
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

        {loading ? (
          <div className="text-center py-12">
            <div className="text-muted-foreground">در حال بارگذاری ارزها...</div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6">
            {currencies.map((currency) => (
              <Card key={currency.id || currency.symbol}>
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
        )}
      </div>
    </div>
  )
}
