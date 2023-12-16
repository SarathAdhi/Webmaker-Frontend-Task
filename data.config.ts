import zapier from "@public/assets/hero-section/zapier.svg";
import spotify from "@public/assets/hero-section/spotify.svg";
import zoom from "@public/assets/hero-section/zoom.svg";
import slack from "@public/assets/hero-section/slack.svg";
import amazon from "@public/assets/hero-section/amazon.svg";
import adobe from "@public/assets/hero-section/adobe.svg";

import frame1 from "@public/assets/recent-work/Frame-1.png";
import frame2 from "@public/assets/recent-work/Frame-2.png";
import frame3 from "@public/assets/recent-work/Frame-3.png";
import frame4 from "@public/assets/recent-work/Frame-4.png";

import twitter from "@public/assets/footer/twitter.svg";
import github from "@public/assets/footer/github.svg";
import dribbble from "@public/assets/footer/dribbble.svg";
import linkedin from "@public/assets/footer/linkedin.svg";
import wellfound from "@public/assets/footer/wellfound.svg";
import facebook from "@public/assets/footer/facebook.svg";

export const socials = [
  { alt: "twitter", src: twitter },
  { alt: "github", src: github },
  { alt: "dribbble", src: dribbble },
  { alt: "linkedin", src: linkedin },
  { alt: "wellfound", src: wellfound },
  { alt: "facebook", src: facebook },
];

export const trustedCompanyImages = [
  { alt: "zapier", src: zapier },
  { alt: "spotify", src: spotify },
  { alt: "zoom", src: zoom },
  { alt: "slack", src: slack },
  { alt: "amazon", src: amazon },
  { alt: "adobe", src: adobe },
];

export const recentWorkImages = [
  { alt: "frame 1", src: frame1 },
  { alt: "frame 2", src: frame2 },
  { alt: "frame 3", src: frame3 },
  { alt: "frame 4", src: frame4 },
  { alt: "frame 5", src: frame1 },
  { alt: "frame 6", src: frame2 },
  { alt: "frame 7", src: frame3 },
  { alt: "frame 8", src: frame4 },
];

export const howItWork = [
  {
    title: "Subscribe",
    description:
      "Subscribe to a plan & you'll get an instant access to your private Slack channel.",
  },
  {
    title: "Request",
    description:
      "Submit any number of requests. We'll work through them, one at a time, ensuring consistent updates every 24-48 hours",
  },
  {
    title: "Revise",
    description:
      "Need changes? We guarantee unlimited revisions until you're 200% satisfied.",
  },
];

enum PricingTypes {
  Freebie = "Freebie",
  Professional = "Professional",
  Enterprise = "Enterprise",
}
const isFeaturesOffered = (type: PricingTypes) => {
  const features = [
    {
      point: "20,000+ of PNG & SVG graphics",
      offered: [
        PricingTypes.Freebie,
        PricingTypes.Professional,
        PricingTypes.Enterprise,
      ],
    },
    {
      point: "Access to 100 million stock images",
      offered: [
        PricingTypes.Freebie,
        PricingTypes.Professional,
        PricingTypes.Enterprise,
      ],
    },
    {
      point: "Upload custom icons and fonts",
      offered: [PricingTypes.Professional, PricingTypes.Enterprise],
    },
    {
      point: "Unlimited Sharing",
      offered: [PricingTypes.Professional, PricingTypes.Enterprise],
    },
    {
      point: "Upload graphics & video in up to 4k",
      offered: [PricingTypes.Professional, PricingTypes.Enterprise],
    },
    {
      point: "Unlimited Projects",
      offered: [PricingTypes.Enterprise],
    },
    {
      point: "Instant Access to our design system",
      offered: [PricingTypes.Enterprise],
    },
    {
      point: "Create teams to collaborate on designs",
      offered: [PricingTypes.Enterprise],
    },
  ];

  const points = features.map((e) => ({
    ...e,
    isOffered: e.offered.includes(type),
  }));

  return points;
};

export const pricingDetails = [
  {
    title: PricingTypes.Freebie,
    description:
      "Ideal for individuals who need quick access to basic features.",
    price: { value: "$0", per: "/ Month" },
    points: isFeaturesOffered(PricingTypes.Freebie),
  },
  {
    title: PricingTypes.Professional,
    description:
      "Ideal for individuals who who need advanced features and tools for client work.",
    price: { value: "$25", per: "/ Month" },
    points: isFeaturesOffered(PricingTypes.Professional),
  },
  {
    title: PricingTypes.Enterprise,
    description:
      "Ideal for businesses who need personalized services and security for large teams. ",
    price: { value: "$100", per: "/ Month" },
    points: isFeaturesOffered(PricingTypes.Enterprise),
  },
];

export const faq = [
  {
    title: "Is there a free trial available?",
    description:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    title: "Can I change my plan later?",
    description:
      "Certainly! You have the flexibility to upgrade, downgrade, or switch your plan at any time. Simply log in to your account and navigate to the 'Billing' or 'Account Settings' section to make the desired changes.",
  },
  {
    title: "What is your cancellation policy?",
    description:
      "Our cancellation policy is designed to be fair and transparent. You can cancel your subscription at any time, and you will not be billed for subsequent billing cycles. Please review our terms of service for more details on cancellation and any applicable refund policies.",
  },
  {
    title: "How does billing work?",
    description:
      "Billing is based on your chosen subscription plan and is typically processed monthly or annually, depending on your preference. You'll be automatically billed at the beginning of each billing cycle. Detailed billing information can be found in your account dashboard under the 'Billing' section.",
  },
  {
    title: "How do I change my account email?",
    description:
      "To change your account email, log in to your account and go to the 'Account Settings' or 'Profile' section. There, you'll find an option to update your email address. Follow the on-screen instructions to complete the process. If you encounter any issues, our support team is ready to assist you.",
  },
  {
    title: "Can I change my plan later?",
    description:
      "Certainly! You have the flexibility to upgrade, downgrade, or switch your plan at any time. Simply log in to your account and navigate to the 'Billing' or 'Account Settings' section to make the desired changes.",
  },
];
