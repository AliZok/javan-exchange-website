"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Send, Users, Bell, MessageCircle } from "lucide-react"

export function TelegramSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90 text-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            در <span className="text-primary">تلگرام</span> با ما همراه شوید
          </h2>
          <p className="text-background/70 text-lg max-w-2xl mx-auto">
            با عضویت در کانال، از نرخ‌ها و پیشنهادهای ویژه باخبر شوید
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Channel Card */}
          <Card className="bg-background/10 border-primary/30 backdrop-blur">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                  <Send className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-background">کانال تلگرام</h3>
                  <p className="text-background/70">اخبار و نرخ‌های روزانه</p>
                </div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-background/80">
                  <Bell className="w-5 h-5 text-primary" />
                  <span>اطلاع‌رسانی لحظه‌ای نرخ ارز</span>
                </div>
                <div className="flex items-center gap-3 text-background/80">
                  <Users className="w-5 h-5 text-primary" />
                  <span>پیشنهادهای ویژه برای اعضا</span>
                </div>
              </div>
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer">
                <Link href="https://t.me/sarafijavaan" target="_blank">
                  <Send className="w-5 h-5 ml-2" />
                  t.me/sarafijavaan
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Admin Card */}
          <Card className="bg-background/10 border-primary/30 backdrop-blur">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-background">ادمین تلگرام</h3>
                  <p className="text-background/70">ارتباط مستقیم با ما</p>
                </div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-background/80">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <span>پاسخگویی سریع به سوالات</span>
                </div>
                <div className="flex items-center gap-3 text-background/80">
                  <Users className="w-5 h-5 text-primary" />
                  <span>مشاوره رایگان معاملات</span>
                </div>
              </div>
              <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground cursor-pointer">
                <Link href="https://t.me/javanexchang" target="_blank">
                  <MessageCircle className="w-5 h-5 ml-2" />
                  @javanexchang
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
          <div className="text-center p-4">
            <div className="text-3xl mb-2">🏆</div>
            <div className="text-background/80 text-sm">تجربه‌ای متفاوت در خرید و فروش ارز</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl mb-2">💰</div>
            <div className="text-background/80 text-sm">قیمت‌های رقابتی</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl mb-2">📋</div>
            <div className="text-background/80 text-sm">بدون کارمزد پنهان</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl mb-2">🛡️</div>
            <div className="text-background/80 text-sm">دارای مجوز رسمی</div>
          </div>
        </div>
      </div>
    </section>
  )
}
