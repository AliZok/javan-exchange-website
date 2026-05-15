"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Clock, Mail } from "lucide-react"

export function ContactSection() {

  return (
    <section id="contact" className="py-16 pt-8 md:py-24 md:pt-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            تماس با <span className="text-primary">ما</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            سوالی دارید؟ با ما در تماس باشید
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">آدرس</h3>
                    <p className="text-muted-foreground">Steinstraße 15<br />20095 Hamburg, Germany</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">تلفن تماس</h3>
                    <p className="text-muted-foreground" dir="ltr">021-8888-1234</p>
                    <p className="text-muted-foreground" dir="ltr">0912-345-6789</p>
                  </div>
                </div>
              </CardContent>
            </Card> */}

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">ایمیل</h3>
                    <p className="text-muted-foreground" dir="ltr">exchangearti@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">ساعات کاری</h3>
                    <p className="text-muted-foreground">شنبه تا چهارشنبه: ۹ صبح تا ۶ عصر</p>
                    <p className="text-muted-foreground">پنجشنبه: ۹ صبح تا ۱ بعدازظهر</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

                  </div>
      </div>
    </section>
  )
}
