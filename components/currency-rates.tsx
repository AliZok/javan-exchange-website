"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ArrowUp, ArrowDown } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"

interface Currency {
  name: string
  name_en: string
  icon_path: string
  price: string
  change_percent: number
}

export function CurrencyRates() {
  const [currencies, setCurrencies] = useState<Currency[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCurrencies()
  }, [])

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

      setCurrencies(data || [])
    } catch (error) {
      console.error('Error fetching currencies:', error)
    } finally {
      setLoading(false)
    }
  }

  const formatPrice = (price: string | number) => {
    // Convert to string if it's a number
    const priceStr = String(price)
    
    // Convert English numerals to Persian and add commas
    const englishNumerals = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    const persianNumerals = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
    let result = priceStr
    for (let i = 0; i < englishNumerals.length; i++) {
      result = result.replace(new RegExp(englishNumerals[i], 'g'), persianNumerals[i])
    }
    // Add commas
    const numericValue = parseInt(priceStr.replace(/,/g, ''))
    return numericValue.toLocaleString('fa-IR')
  }

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
            آخرین به‌روزرسانی: {new Date().toLocaleDateString('fa-IR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Currency Grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="text-muted-foreground">در حال بارگذاری...</div>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
            {currencies.map((currency, index) => (
              <Card key={index} className="bg-card hover:shadow-lg hover:shadow-primary/10 transition-all border-border group">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{currency.icon_path}</span>
                      <div>
                        <div className="font-bold text-foreground">{currency.name}</div>
                        <div className="text-sm text-muted-foreground">{currency.name_en}</div>
                      </div>
                    </div>
                    <div className={`flex items-center gap-1 text-sm font-medium ${currency.change_percent >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                      {currency.change_percent >= 0 ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                      {Math.abs(currency.change_percent)}%
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-xl p-4 text-center border border-primary/20">
                    <div className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">قیمت (تومان)</div>
                    <div className="font-bold text-xl text-primary tabular-nums">{formatPrice(currency.price)}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

              </div>
    </section>
  )
}
