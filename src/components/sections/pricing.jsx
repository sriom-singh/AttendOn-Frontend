import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "../ui/header";

const plans = [
  {
    name: "Starter",
    price: "₹999",
    desc: "For small teams taking their first step into digital attendance.",
    features: [
      "Up to 25 employees",
      "Basic attendance tracking",
      "Leave management",
      "Monthly reports",
    ],
    cta: "Start free trial",
    highlight: false,
  },
  {
    name: "Growth",
    price: "₹2,499",
    desc: "For scaling teams that need advanced analytics and full shift control.",
    features: [
      "Up to 200 employees",
      "Real-time dashboard",
      "Shift scheduling",
      "Advanced analytics",
      "Email notifications",
    ],
    cta: "Start free trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For large organisations with complex workflows and compliance requirements.",
    features: [
      "Unlimited employees",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
    ],
    cta: "Contact sales",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-20 mb-20  px-6 lg:px-20 ">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <Header
          title={"Pricing"}
          subtitle={"Straightforward pricing"}
          description={
            "No hidden fees. Every plan includes a 14-day free trial. Cancel anytime."
          }
        />
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-3xl p-8 border transition-all ${
              plan.highlight
                ? "bg-gradient-to-br from-primary/40 to-primary/100 shadow-xl scale-105"
                : "bg-primary/5 border-primary/30 hover:bg-primary/10"
            }`}
          >
            {/* Badge */}
            {plan.highlight && (
              <span className="text-xs px-3 py-1 rounded-full inline-block mb-4">
                Most popular
              </span>
            )}

            {/* Title */}
            <h3 className="text-sm uppercase tracking-wide mb-2 opacity-80">
              {plan.name}
            </h3>

            {/* Price */}
            <div className="text-4xl font-bold mb-2">
              {plan.price}
              {plan.price !== "Custom" && (
                <span className="text-sm font-normal opacity-70">/month</span>
              )}
            </div>

            {/* Description */}
            <p
              className={`text-sm mb-6 ${
                plan.highlight ? "text-white/80" : "text-muted-foreground"
              }`}
            >
              {plan.desc}
            </p>

            <hr className="mb-6 opacity-30" />

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <Check size={16} className="text-green-500" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Button */}
            <Button
              className={`w-full rounded-xl ${
                plan.highlight
                  ? "bg-white text-indigo-600 hover:bg-white/90"
                  : ""
              }`}
              variant={plan.highlight ? "secondary" : "outline"}
            >
              {plan.cta}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
