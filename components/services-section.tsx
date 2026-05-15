import { Card, CardContent } from "@/components/ui/card"
import { 
  Banknote, 
  ArrowLeftRight, 
  Globe, 
  ShieldCheck, 
  Clock,
  Headphones
} from "lucide-react"

const services = [
  {
    icon: Banknote,
    title: "خرید و فروش ارز",
    description: "خرید و فروش ارزهای معتبر در سراسر دنیا با بهترین نرخ روز"
  },
  {
    icon: ArrowLeftRight,
    title: "تبدیل سریع",
    description: "تبدیل فوری ارزها به یکدیگر با نرخ‌های رقابتی و شفاف"
  },
  {
    icon: Globe,
    title: "حواله ارزی",
    description: "ارسال و دریافت حواله‌های ارزی به سراسر جهان"
  },
  {
    icon: ShieldCheck,
    title: "معاملات امن و مطمئن",
    description: "تمامی معاملات با ضمانت امنیت و تحت نظارت مراجع ذیصلاح"
  },
  {
    icon: Clock,
    title: "تضمین بهترین نرخ",
    description: "با خیال راحت معامله کنید، بهترین نرخ را ما تضمین می‌کنیم"
  },
  {
    icon: Headphones,
    title: "پشتیبانی ۲۴ ساعته",
    description: "تیم پشتیبانی ما در تمام ساعات شبانه‌روز آماده پاسخگویی است"
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-16 pt-8 md:py-24 md:pt-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            خدمات <span className="text-primary">ما</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            مجموعه کاملی از خدمات ارزی برای رفع تمام نیازهای شما
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-card hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 border-border group hover:border-primary/50">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-primary/10 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 p-6 bg-gradient-to-l from-primary/5 to-transparent rounded-2xl border border-primary/10">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-primary" />
              </span>
              <span>دارای مجوز رسمی</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary">%</span>
              <span>بدون کارمزد پنهان</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary">★</span>
              <span>قیمت‌های رقابتی</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary">🛡</span>
              <span>امنیت سرمایه شما، اولویت ماست</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
