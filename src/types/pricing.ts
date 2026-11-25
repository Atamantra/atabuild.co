export type PricingModelId =
  | "starter"
  | "pro"
  | "scale"
  | "power-boost"
  | "net-rate";

export interface PricingModelOption {
  id: PricingModelId;
  label: string;
  shortLabel: string;
  drawerLabel: string;
  badge?: string;
}

export const PRICING_MODELS: PricingModelOption[] = [
  {
    id: "pro",
    label: "Pro — $0/mo + 7% per sale",
    shortLabel: "Pro 7%",
    drawerLabel: "Pro — $0 Setup + 7% Full Automation",
    badge: "Most Popular",
  },
  {
    id: "power-boost",
    label: "Power Boost — $999.99 one-time + 2%",
    shortLabel: "Power Boost 2%",
    drawerLabel: "Power Boost — $999.99 Website Redesign + 2%",
    badge: "Website + Stripe/PayPal",
  },
  {
    id: "starter",
    label: "Starter — $0/mo + 4% per sale",
    shortLabel: "Starter 4%",
    drawerLabel: "Starter — $0 Setup + 4% OTA Sync",
  },
  {
    id: "scale",
    label: "Scale — $39/mo + 2.5% per sale",
    shortLabel: "Scale $39 + 2.5%",
    drawerLabel: "Scale — $39/mo + 2.5% per sale",
  },
  {
    id: "net-rate",
    label: "Net-Rate Wholesale (0% Fee)",
    shortLabel: "Net-Rate Wholesale",
    drawerLabel: "Net-Rate Wholesale (100% Quoted Net)",
  },
];

export interface CountryCodeOption {
  code: string;
  country: string;
  flag: string;
}

export const COUNTRY_CODES: CountryCodeOption[] = [
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+90", country: "Turkey", flag: "🇹🇷" },
  { code: "+1", country: "US / CA", flag: "🇺🇸" },
  { code: "+34", country: "Spain", flag: "🇪🇸" },
  { code: "+39", country: "Italy", flag: "🇮🇹" },
  { code: "+30", country: "Greece", flag: "🇬🇷" },
  { code: "+351", country: "Portugal", flag: "🇵🇹" },
  { code: "+33", country: "France", flag: "🇫🇷" },
  { code: "+385", country: "Croatia", flag: "🇭🇷" },
  { code: "+971", country: "UAE", flag: "🇦🇪" },
  { code: "+20", country: "Egypt", flag: "🇪🇬" },
  { code: "+212", country: "Morocco", flag: "🇲🇦" },
  { code: "+66", country: "Thailand", flag: "🇹🇭" },
  { code: "+62", country: "Indonesia", flag: "🇮🇩" },
  { code: "+52", country: "Mexico", flag: "🇲🇽" },
  { code: "+81", country: "Japan", flag: "🇯🇵" },
  { code: "+61", country: "Australia", flag: "🇦🇺" },
  { code: "+49", country: "Germany", flag: "🇩🇪" },
];
