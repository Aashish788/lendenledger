import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is Khatabook: Lenden Ledger and how is it different from other khatabook apps?",
    answer: "Khatabook: Lenden Ledger is India's most advanced digital khatabook app designed specifically for small business owners, merchants, and traders. Unlike other khata apps, we offer comprehensive business analytics, automated payment reminders, customer management, and offline access. Our app is completely free with no ads, making it the perfect alternative to traditional paper khata books."
  },
  {
    question: "Is Lenden Ledger the best free khatabook app for small business?",
    answer: "Yes! Lenden Ledger is rated as one of the best free khatabook apps in India with 4.8/5 stars and 50,000+ downloads. We offer all premium features for free including unlimited transactions, customer management, business reports, payment reminders, and secure cloud backup. No hidden charges or subscription fees ever."
  },
  {
    question: "How does digital khatabook help my business compared to paper khata?",
    answer: "Digital khatabook offers numerous advantages over traditional paper khata: automatic calculations, backup protection, payment reminders, customer search, business analytics, transaction history, data security, and mobile accessibility. You'll never lose your records and can access them anywhere, anytime."
  },
  {
    question: "Can I use this khatabook app for udhar and lending business?",
    answer: "Absolutely! Lenden Ledger is perfect for udhar (credit) business, money lending, and all types of lending-borrowing transactions. You can track customer credit limits, payment due dates, interest calculations, and send automated payment reminders to customers."
  },
  {
    question: "Is this digital ledger app suitable for retail shops and merchants?",
    answer: "Yes, our khatabook app is ideal for retail shops, merchants, wholesalers, distributors, and all types of businesses. Whether you run a grocery store, electronics shop, clothing business, or any retail outlet, our digital ledger helps you manage customer accounts efficiently."
  },
  {
    question: "How secure is my business data in this khatabook application?",
    answer: "Your data security is our top priority. All your khatabook data is encrypted with bank-grade security, automatically backed up to secure cloud servers, and only accessible by you. We never share your business information with third parties. Your digital khata is completely private and secure."
  },
  {
    question: "Can I send payment reminders to customers through this khata app?",
    answer: "Yes! One of our most popular features is automated payment reminders. You can send SMS notifications, WhatsApp messages, or in-app notifications to customers about pending payments, due dates, and overdue amounts. This helps improve your cash flow and reduces manual follow-ups."
  },
  {
    question: "Does this business ledger app work offline without internet?",
    answer: "Yes, Lenden Ledger works perfectly offline. You can add transactions, view customer accounts, and access all your khatabook data without internet connection. Data automatically syncs when you connect to internet, ensuring you never lose any information."
  },
  {
    question: "How do I download and install this khatabook app?",
    answer: "Simply click the 'Download Khatabook App' button on our website or search 'Lenden Ledger' on Google Play Store. The app is free to download and install on any Android device. iOS version is coming soon. Setup takes less than 2 minutes!"
  },
  {
    question: "What business analytics and reports does this digital khata provide?",
    answer: "Our business analytics include: daily/monthly/yearly transaction summaries, customer payment history, profit/loss reports, outstanding amounts dashboard, top customers analysis, payment trends, and detailed financial insights. These reports help you make better business decisions and track your growth."
  }
];

export const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            🤔 Frequently Asked Questions about Khatabook App
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about using Lenden Ledger as your digital khatabook for business
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-border">
              <Collapsible>
                <CollapsibleTrigger 
                  className="w-full"
                  onClick={() => toggleItem(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between text-left">
                      <h3 className="text-lg font-semibold text-foreground pr-4">
                        {faq.question}
                      </h3>
                      <ChevronDown 
                        className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
                          openItems.includes(index) ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </CardContent>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>

        {/* Additional SEO Content */}
        <div className="text-center mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              🚀 Ready to Transform Your Business with Digital Khatabook?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of successful business owners who've switched from paper khata to 
              Lenden Ledger digital khatabook. Download India's most trusted business ledger app today!
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium">
                ✅ #1 Rated Khatabook App
              </span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium">
                ✅ 50,000+ Happy Users
              </span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium">
                ✅ Free Forever
              </span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium">
                ✅ Trusted by Merchants
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};