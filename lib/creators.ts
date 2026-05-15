export type Tier = {
  id: string;
  name: string;
  price: number;
  cadence: "month" | "year";
  description: string;
  perks: string[];
  seatsLeft?: number;
  featured?: boolean;
};

export type Creator = {
  slug: string;
  name: string;
  handle: string;
  tagline: string;
  category: string;
  location: string;
  avatar: string;
  cover: string;
  bio: string;
  followers: string;
  verified: boolean;
  highlights: string[];
  tiers: Tier[];
  testimonials: { quote: string; author: string; role: string }[];
};

export const creators: Creator[] = [
  {
    slug: "selene-vance",
    name: "Selene Vance",
    handle: "@selenevance",
    tagline: "Strategist to Fortune 100 founders. 12 clients. No exceptions.",
    category: "Business Strategy",
    location: "New York · Zürich",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    cover:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&h=900&fit=crop",
    bio: "Former McKinsey partner. Operator behind three nine-figure exits. I work with twelve patrons a year on positioning, capital strategy, and the unspoken parts of operating at scale.",
    followers: "284K",
    verified: true,
    highlights: [
      "Wall Street Journal columnist",
      "Advisor — Sequoia, a16z portfolio companies",
      "TED 2024 — 'The Quiet Economy of Influence'"
    ],
    tiers: [
      {
        id: "inner",
        name: "Inner Circle",
        price: 2400,
        cadence: "month",
        description:
          "A quarterly 90-minute strategy intensive. Async voice memos within 24h. Direct line via Signal.",
        perks: [
          "Quarterly 90-min strategy intensive",
          "Async voice memos · 24h reply",
          "Signal direct access",
          "Annual off-the-record dinner"
        ],
        seatsLeft: 3,
        featured: true
      },
      {
        id: "private-table",
        name: "Private Table",
        price: 9800,
        cadence: "month",
        description:
          "Two intensives per month. On-call advisory. A seat at the annual three-day retreat in Saint-Paul-de-Vence.",
        perks: [
          "2× monthly 90-min intensives",
          "On-call advisory · same-day",
          "Annual 3-day retreat (Côte d'Azur)",
          "Warm intros across my network"
        ],
        seatsLeft: 1
      },
      {
        id: "patron",
        name: "Founding Patron",
        price: 45000,
        cadence: "year",
        description:
          "A full annual engagement. Six in-person sessions. Reserved for those operating above $50M ARR.",
        perks: [
          "6 in-person sessions per year",
          "Board observer rights (where applicable)",
          "Investor introductions",
          "Bespoke research dossiers"
        ],
        seatsLeft: 2
      }
    ],
    testimonials: [
      {
        quote:
          "Selene rewrote our positioning over a single dinner. We closed our Series C six weeks later.",
        author: "M. Okafor",
        role: "Founder, Series C SaaS"
      },
      {
        quote:
          "The single highest-leverage investment I've made as an operator.",
        author: "J. Reyes",
        role: "CEO, public co."
      }
    ]
  },
  {
    slug: "atlas-okonkwo",
    name: "Atlas Okonkwo",
    handle: "@atlasokonkwo",
    tagline: "Photographer. Director. Patron list closed for 2026.",
    category: "Visual Arts",
    location: "Lagos · Paris",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    cover:
      "https://images.unsplash.com/photo-1490810277108-eee69cefa410?w=1600&h=900&fit=crop",
    bio: "Vogue. AnOther. Pirelli. My patrons receive original work, behind-the-frame essays, and standing invitations to private viewings before the public ever sees them.",
    followers: "1.2M",
    verified: true,
    highlights: [
      "Pirelli Calendar 2025",
      "Solo show — Gagosian, London",
      "Director — Cannes Lion Grand Prix 2024"
    ],
    tiers: [
      {
        id: "studio",
        name: "Studio Member",
        price: 500,
        cadence: "month",
        description: "Monthly print edition, essay, and early access to drops.",
        perks: [
          "Signed monthly print",
          "Long-form essay & contact sheets",
          "First access to limited drops",
          "Private viewing invitations"
        ]
      },
      {
        id: "collector",
        name: "Collector",
        price: 3500,
        cadence: "month",
        description: "Quarterly limited edition. Studio visits. Discount on commissioned work.",
        perks: [
          "Quarterly limited edition (1/25)",
          "Annual private studio visit",
          "20% off commissioned work",
          "Concierge framing & shipping"
        ],
        seatsLeft: 7,
        featured: true
      },
      {
        id: "muse",
        name: "Muse",
        price: 60000,
        cadence: "year",
        description:
          "Commission a bespoke series of original works. Travel and accommodations included.",
        perks: [
          "Bespoke 12-piece series",
          "On-location shoot (anywhere)",
          "Curatorial consultation",
          "Private exhibition arrangement"
        ],
        seatsLeft: 1
      }
    ],
    testimonials: [
      {
        quote:
          "Atlas captures things you didn't know you'd lost. His patrons are very lucky people.",
        author: "Vogue Italia"
      } as any,
      {
        quote: "The most thoughtful arts subscription I've ever held.",
        author: "C. Lindqvist",
        role: "Collector, Stockholm"
      }
    ]
  },
  {
    slug: "imani-foster",
    name: "Dr. Imani Foster",
    handle: "@drimanifoster",
    tagline: "Longevity physician. Twenty patrons. Waitlist only.",
    category: "Health & Longevity",
    location: "Los Angeles",
    avatar:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
    cover:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1600&h=900&fit=crop",
    bio: "Stanford-trained. Twenty years operating at the intersection of functional medicine and high-performance physiology. My patrons live longer, sharper, and on their own terms.",
    followers: "412K",
    verified: true,
    highlights: [
      "Author — The Hundred-Year Body (NYT bestseller)",
      "Medical Director — two private longevity clinics",
      "Consultant — Olympic federations"
    ],
    tiers: [
      {
        id: "protocol",
        name: "Protocol",
        price: 1500,
        cadence: "month",
        description:
          "Quarterly bloodwork review. Personalized protocols. Office-hours twice monthly.",
        perks: [
          "Quarterly bloodwork analysis",
          "Personalized supplementation protocol",
          "2× monthly group office hours",
          "Curated research digest"
        ],
        featured: true
      },
      {
        id: "concierge",
        name: "Concierge",
        price: 8500,
        cadence: "month",
        description: "Direct line. Quarterly in-person reviews. Annual full-body imaging.",
        perks: [
          "Direct text access · same-day",
          "Quarterly in-person reviews (LA)",
          "Annual full-body MRI & DEXA",
          "Travel medicine support"
        ],
        seatsLeft: 4
      }
    ],
    testimonials: [
      {
        quote: "She gave me back ten years. Possibly more.",
        author: "L. Hartmann",
        role: "Patron since 2023"
      }
    ]
  },
  {
    slug: "kai-mercer",
    name: "Kai Mercer",
    handle: "@kaimercer",
    tagline: "Macro investor. Daily letter to 80 patrons. Closed beyond.",
    category: "Markets & Macro",
    location: "Singapore · London",
    avatar:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop",
    cover:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1600&h=900&fit=crop",
    bio: "Twenty years at a global macro fund. Now writing privately for a closed list of allocators, family offices, and operators who pay attention to capital flows.",
    followers: "96K",
    verified: true,
    highlights: [
      "FT 'Person to Watch' 2023",
      "Closed allocator fund · $1.4B AUM",
      "Quarterly call — top 50 family offices"
    ],
    tiers: [
      {
        id: "letter",
        name: "The Letter",
        price: 950,
        cadence: "month",
        description:
          "Daily 6am market memo. Quarterly outlook calls. Trade ideas with risk framing.",
        perks: [
          "Daily 6am market letter",
          "Quarterly live outlook calls",
          "Trade ideas with risk framing",
          "Archive of 2,800+ memos"
        ]
      },
      {
        id: "table",
        name: "The Table",
        price: 6500,
        cadence: "month",
        description:
          "Everything in The Letter, plus monthly private call and direct Q&A.",
        perks: [
          "Monthly private call (1:1)",
          "Direct Q&A · 24h reply",
          "Position transparency",
          "Annual macro retreat"
        ],
        seatsLeft: 6,
        featured: true
      }
    ],
    testimonials: [
      {
        quote: "Kai's letter has paid for itself before breakfast.",
        author: "Family office, Geneva"
      } as any
    ]
  },
  {
    slug: "ana-belmonte",
    name: "Ana Belmonte",
    handle: "@anabelmonte",
    tagline: "Three-Michelin-star chef. Twelve dinners a year. Twelve guests.",
    category: "Culinary",
    location: "Barcelona",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    cover:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&h=900&fit=crop",
    bio: "Three Michelin stars. One private dining room. My patrons hold standing invitations to the table no reservation can reach.",
    followers: "538K",
    verified: true,
    highlights: [
      "World's 50 Best — No. 4",
      "Author — Salt, Fire, Time",
      "MasterClass instructor"
    ],
    tiers: [
      {
        id: "table",
        name: "Table Member",
        price: 1200,
        cadence: "month",
        description:
          "Two reserved seats per year at the private dining room. Quarterly recipe archive.",
        perks: [
          "2 reserved seats per year",
          "Quarterly recipe archive",
          "Producer & wine notes",
          "Holiday gift box"
        ],
        featured: true
      },
      {
        id: "kitchen",
        name: "Kitchen Patron",
        price: 24000,
        cadence: "year",
        description:
          "A bespoke private dinner for ten, anywhere in Europe. Wines paired by our sommelier.",
        perks: [
          "Bespoke private dinner for 10",
          "Sommelier-paired wines",
          "Anywhere in Europe",
          "Behind-the-pass walkthrough"
        ],
        seatsLeft: 3
      }
    ],
    testimonials: [
      {
        quote: "An evening with Ana is not a meal. It is a memory.",
        author: "Condé Nast Traveler"
      } as any
    ]
  },
  {
    slug: "noor-rashid",
    name: "Noor Rashid",
    handle: "@noorrashid",
    tagline: "Architect. Patron commissions only.",
    category: "Architecture & Design",
    location: "Dubai · Kyoto",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    cover:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&h=900&fit=crop",
    bio: "Residential architecture for private clients. I publish nothing, give no talks, and accept three commissions a year. Patrons see the work first.",
    followers: "62K",
    verified: true,
    highlights: [
      "AIA Gold Medal nominee",
      "Featured — Wallpaper* House of the Year",
      "Princeton SoA, faculty"
    ],
    tiers: [
      {
        id: "study",
        name: "The Study",
        price: 750,
        cadence: "month",
        description:
          "Monthly photo essay from active projects. Notes on materials, light, and quiet.",
        perks: [
          "Monthly project essay",
          "Material & detail studies",
          "Travel-sourced books",
          "Closed studio Q&A"
        ]
      },
      {
        id: "commission",
        name: "Commission Conversation",
        price: 12000,
        cadence: "year",
        description:
          "An annual two-day consult on a property or commission you are considering.",
        perks: [
          "2-day consult on-site",
          "Pre-commission feasibility",
          "Introductions to builders",
          "Curated reading list"
        ],
        seatsLeft: 5,
        featured: true
      }
    ],
    testimonials: [
      {
        quote:
          "Noor showed me a version of my home I had been unable to see for ten years.",
        author: "Patron, Geneva"
      } as any
    ]
  }
];

export function getCreator(slug: string): Creator | undefined {
  return creators.find((c) => c.slug === slug);
}
