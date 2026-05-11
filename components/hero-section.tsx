import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Sparkles, Shield, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-bl from-muted via-background to-background">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-right">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              نرخ‌های لحظه‌ای
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
              خرید و فروش
              <span className="text-primary"> انواع ارزها </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 lg:mr-0">
              ارز مورد نیازت رو با بهترین قیمت از ما بخواه! خدمات خرید و فروش ارزهای معتبر در سراسر دنیا
            </p>

            {/* Feature Tags */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
              <span className="inline-flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full text-sm">
                <Zap className="w-4 h-4 text-primary" />
                سریع
              </span>
              <span className="inline-flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full text-sm">
                <Shield className="w-4 h-4 text-primary" />
                مطمئن
              </span>
              <span className="inline-flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full text-sm">
                <Sparkles className="w-4 h-4 text-primary" />
                بهترین قیمت
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8">
                مشاهده نرخ‌ها
                <ArrowLeft className="w-5 h-5 mr-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8" asChild>
                <Link href="https://t.me/javanexchang" target="_blank">
                  تماس در تلگرام
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">+۱۲</div>
                <div className="text-sm text-muted-foreground">ارز معتبر</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">+۵۰۰۰</div>
                <div className="text-sm text-muted-foreground">مشتری راضی</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">۲۴/۷</div>
                <div className="text-sm text-muted-foreground">پشتیبانی</div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative hidden lg:block">
            <div className="relative z-10">
              <Image
                src="/images/logo.jpg"
                alt="صرافی جوان"
                width={500}
                height={400}
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
