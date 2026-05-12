import Image from "next/image"
import Link from "next/link"
import { Instagram, Send, Shield, Award } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Image
              src="/images/logo.jpg"
              alt="صرافی جوان"
              width={150}
              height={75}
              className="h-16 w-auto mb-4 rounded-lg bg-white p-2"
            />
            <p className="text-background/70 leading-relaxed max-w-md mb-4">
              صرافی جوان با ارائه خدمات خرید و فروش ارزهای معتبر در سراسر دنیا، همواره در تلاش است تا بهترین خدمات را با بهترین نرخ‌ها به مشتریان عزیز ارائه دهد.
            </p>
            <div className="flex items-center gap-4 text-sm text-background/60">
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4 text-primary" />
                <span>دارای مجوز رسمی</span>
              </div>
              <div className="flex items-center gap-1">
                <Award className="w-4 h-4 text-primary" />
                <span>امنیت سرمایه شما، اولویت ماست</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">دسترسی سریع</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#rates" className="text-background/70 hover:text-primary transition-colors cursor-pointer">
                  نرخ ارز
                </Link>
              </li>
              <li>
                <Link href="#converter" className="text-background/70 hover:text-primary transition-colors cursor-pointer">
                  تبدیل ارز
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-background/70 hover:text-primary transition-colors cursor-pointer">
                  خدمات ما
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-background/70 hover:text-primary transition-colors cursor-pointer">
                  تماس با ما
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">ارتباط با ما</h4>
            <div className="flex gap-3 mb-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/sarafijavaan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Telegram"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
            <div className="text-background/70 text-sm space-y-1">
              <p>کانال تلگرام: <Link href="https://t.me/sarafijavaan" className="text-primary hover:underline cursor-pointer">t.me/sarafijavaan</Link></p>
              <p>ادمین: <Link href="https://t.me/javanexchang" className="text-primary hover:underline cursor-pointer">@javanexchang</Link></p>
              <p>ایمیل: <Link href="mailto:exchangearti@gmail.com" className="text-primary hover:underline cursor-pointer">exchangearti@gmail.com</Link></p>
              <p className="pt-2 border-t border-background/20">
                Steinstraße 15<br />
                20095 Hamburg, Germany
              </p>
            </div>
          </div>
        </div>

        {/* Features Bar */}
        <div className="border-t border-b border-background/20 py-6 mb-8">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-background/60">
            <span className="flex items-center gap-2">
              <span className="text-primary">✓</span> سریع
            </span>
            <span className="flex items-center gap-2">
              <span className="text-primary">✓</span> مطمئن
            </span>
            <span className="flex items-center gap-2">
              <span className="text-primary">✓</span> بهترین قیمت
            </span>
            <span className="flex items-center gap-2">
              <span className="text-primary">✓</span> پشتیبانی ۲۴ ساعته
            </span>
            <span className="flex items-center gap-2">
              <span className="text-primary">✓</span> تضمین بهترین نرخ
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-background/50 text-sm">
            © ۱۴۰۵ صرافی جوان. تمامی حقوق محفوظ است.
          </p>
          <p className="text-background/40 text-xs mt-2">
            ارز مورد نیازت رو با بهترین قیمت از ما بخواه!
          </p>
        </div>
      </div>
    </footer>
  )
}
