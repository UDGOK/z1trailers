export interface CitySector {
  name: string;
  slug: string;
  desc: string;
  keywords: string[];
  climateLogic?: string;
  industryAnchor?: string;
  threatFocus?: string;
  powerSpec?: string;
}

export interface StateRegion {
  name: string;
  slug: string;
  subtitle: string;
  desc: string;
  cities: Record<string, CitySector>;
  weatherContext?: string;
}

export const locationDb: Record<string, StateRegion> = {
  // --- CORE MID-SOUTH SECTORS (Phase 1) ---
  "oklahoma": {
    name: "Oklahoma",
    slug: "oklahoma",
    subtitle: "CENTRAL COMMAND",
    desc: "Z1 Trailers operates its primary tactical hub from Oklahoma. We protect the region's energy perimeters and construction booms with zero-infrastructure solar surveillance and LiFePO4 battery backups.",
    weatherContext: "High-wind-rated masts and rapid-recharge monocrystalline arrays for the plains.",
    cities: {
      "oklahoma-city": {
        name: "Oklahoma City",
        slug: "oklahoma-city",
        desc: "Dominating OKC metro with elite surveillance trailers. Securing the rapid-growth infrastructure with 24/7 AI monitoring and supplemental LiFePO4 power for site offices.",
        keywords: ["Surveillance Trailers Oklahoma City", "Solar Security Trailers OKC", "OKC Parking Lot Security"],
        industryAnchor: "Government & Infrastructure",
        threatFocus: "High-Value Copper & Equipment Theft",
        powerSpec: "Dual-Bank LiFePO4 for 10-day autonomy."
      },
      "tulsa": {
        name: "Tulsa",
        slug: "tulsa",
        desc: "Protecting Tulsa's industrial heart. Our trailers secure warehouse perimeters and oil & gas logistics with thermal imaging overmatch and LiFePO4 power stability.",
        keywords: ["Mobile Surveillance Tulsa", "Solar Trailers Tulsa", "Tulsa Industrial Security"],
        industryAnchor: "Logistics & Manufacturing",
        threatFocus: "Industrial Sabotage & Catalytic Converters",
        powerSpec: "LiFePO4 Supplemental Power for tool charging."
      }
    }
  },
  "texas": {
    name: "Texas",
    slug: "texas",
    subtitle: "PRIMARY DIVISION",
    desc: "Texas infrastructure demands maximum scale and thermal resilience. We secure the Lone Star State with high-capacity LiFePO4 battery ecosystems rated for 115°F+ heat load.",
    weatherContext: "Heat-dissipating lithium enclosures and high-yield solar arrays.",
    cities: {
      "dallas": {
        name: "Dallas",
        slug: "dallas",
        desc: "Securing DFW's massive data center and skyscraper perimeters. 24/7 AI surveillance with LiFePO4 supplemental power for remote networking hubs.",
        keywords: ["Surveillance Trailers Dallas", "Solar Security Dallas", "DFW Mobile Surveillance"],
        industryAnchor: "Data Centers & Skyscrapers",
        threatFocus: "High-Tech Asset Theft",
        powerSpec: "LiFePO4 Core with 2000W Inverter Payload."
      },
      "houston": {
        name: "Houston",
        slug: "houston",
        desc: "Protecting Houston's maritime and energy infrastructure. Thermal-imaging solar trailers for the Gulf Coast's primary port sectors.",
        keywords: ["Houston Security Trailers", "Port Security Houston", "Battery Trailers Houston"],
        industryAnchor: "Maritime & Energy",
        threatFocus: "Sabotage & Perimeter Breaches",
        powerSpec: "Anti-Corrosive LiFePO4 Thermal Protection."
      }
    }
  },

  // --- COASTAL & TECH EXPANSION (Phase 2) ---
  "california": {
    name: "California",
    slug: "california",
    subtitle: "WESTERN COMMAND",
    desc: "California's retail and maritime sectors require aggressive proactive deterrence. Z1 units integrate AI lockdowns and high-longevity LiFePO4 storage for the Golden State.",
    weatherContext: "Smog-penetrating optical filters and high-density urban 5G vectors.",
    cities: {
      "los-angeles": {
        name: "Los Angeles",
        slug: "los-angeles",
        desc: "Securing the Port of LA and retail parking perimeters. Proactive deterrence with 120dB talk-down and thermal AI targeting.",
        keywords: ["Surveillance Trailers Los Angeles", "LA Retail Security", "Port of LA Monitoring"],
        industryAnchor: "Ports & Large Retail",
        threatFocus: "Organized Retail Crime (ORC) & Port Sabotage",
        powerSpec: "LiFePO4 High-Cycle Battery Architecture (10yr Lifespan)."
      }
    }
  },

  // --- INDUSTRIAL CORE & DATA CENTER ALLEY (Phase 3) ---
  "virginia": {
    name: "Virginia",
    slug: "virginia",
    subtitle: "DATA CENTER ALLEY",
    desc: "Securing the world's primary internet intersections. We provide the Virginia sector with 'Speed to Power' deployments and LiFePO4-backed redundant surveillance.",
    weatherContext: "Winter-rated battery heaters and high-density fiber failover.",
    cities: {
      "ashburn": {
        name: "Ashburn",
        slug: "ashburn",
        desc: "The global hub for data center security. Tactical surveillance for 'Data Center Alley' with AI threat detection and LiFePO4 failover power.",
        keywords: ["Ashburn Data Center Security", "Surveillance Trailers Ashburn", "Virginia Solar Security"],
        industryAnchor: "Hyperscale Data Centers",
        threatFocus: "Cyber-Physical Sabotage & Copper Theft",
        powerSpec: "Supplemental LiFePO4 for mission-critical rack failover."
      },
      "richmond": {
        name: "Richmond",
        slug: "richmond",
        desc: "Protecting Richmond's logistics and distribution perimeters. Rapid-deployment solar units for Virginia's capital region.",
        keywords: ["Richmond Security Trailers", "Virginia Logistics Security", "Solar Trailers Richmond"],
        industryAnchor: "Retail Distribution & Logistics",
        threatFocus: "Cargo Theft & After-hours Loitering",
        powerSpec: "LiFePO4 Core with 15-day autonomy."
      }
    }
  },
  "ohio": {
    name: "Ohio",
    slug: "ohio",
    subtitle: "LOGISTICS HUB",
    desc: "Securing the industrial heart of the Midwest. Z1 provides Ohio with robust solar surveillance and supplemental LiFePO4 power for off-grid warehouse ops.",
    weatherContext: "Snow-shedding array angles and cold-optimized battery chemistry.",
    cities: {
      "columbus": {
        name: "Columbus",
        slug: "columbus",
        desc: "Securing Columbus's massive data center and logistics hubs. 24/7 AI monitoring for the central Ohio tech boom.",
        keywords: ["Surveillance Trailers Columbus", "Columbus Data Center Security", "Solar Trailers Ohio"],
        industryAnchor: "Data Centers & 3PL Logistics",
        threatFocus: "High-Value Electronic Theft",
        powerSpec: "LiFePO4 Battery with cold-weather heater integration."
      },
      "cleveland": {
        name: "Cleveland",
        slug: "cleveland",
        desc: "Protecting Cleveland's industrial and lakefront perimeters. Rapid-deployment units for Ohio's primary manufacturing hubs.",
        keywords: ["Cleveland Security Trailers", "Cleveland Industrial Surveillance", "Solar Trailers Cleveland"],
        industryAnchor: "Heavy Manufacturing",
        threatFocus: "Metal Scrap Theft & Vandalism",
        powerSpec: "Industrial-Stack LiFePO4 Solution."
      }
    }
  },
  "nevada": {
    name: "Nevada",
    slug: "nevada",
    subtitle: "DESERT CORE",
    desc: "Securing the high-stakes entertainment and solar sectors of Nevada. Our hardware is engineered for the 120°F+ high-desert thermal matrix.",
    weatherContext: "Heat-shielded solar chassis and desert-grade cooling vectors.",
    cities: {
      "las-vegas": {
        name: "Las Vegas",
        slug: "las-vegas",
        desc: "Elite security for the Las Vegas Strip and massive event sectors. Z1 trailers provide 24/7 AI-monitored crowd and lot defense.",
        keywords: ["Surveillance Trailers Las Vegas", "Vegas Event Security", "Solar Trailers Nevada"],
        industryAnchor: "Events & Hospitality Logistics",
        threatFocus: "Crowd Breaches & Vehicle Loitering",
        powerSpec: "LiFePO4 Supplemental Power for event lighting/comms.",
        climateLogic: "Heat-reflective chassis with advanced battery cooling."
      },
      "reno": {
        name: "Reno",
        slug: "reno",
        desc: "Protecting Reno's logistics and battery manufacturing sectors. Tactical surveillance for the high-desert Industrial boom.",
        keywords: ["Reno Security Trailers", "Reno Industrial Monitoring", "Solar Surveillance Reno"],
        industryAnchor: "Battery Manufacturing & 3PL",
        threatFocus: "High-Tech Component Theft",
        powerSpec: "High-Density LiFePO4 Arrays."
      }
    }
  },
  "indiana": {
    name: "Indiana",
    slug: "indiana",
    subtitle: "CROSSROADS COMMAND",
    desc: "Securing the 'Crossroads of America'. Z1 delivers high-authority logistics security and LiFePO4 supplemental power across Indiana's distribution hubs.",
    weatherContext: "Winter-spec mobility and high-yield central solar arrays.",
    cities: {
      "indianapolis": {
        name: "Indianapolis",
        slug: "indianapolis",
        desc: "The primary defense for Indianapolis's massive logistics and distribution perimeters. Providing 24/7 AI monitoring for 3PL operations.",
        keywords: ["Surveillance Trailers Indianapolis", "Indy Logistics Security", "Solar Trailers Indiana"],
        industryAnchor: "Logistics & Cross-Docking",
        threatFocus: "Cargo Theft & Unauthorized Entry",
        powerSpec: "LiFePO4 core for remote gate-control power."
      }
    }
  },
  "tennessee": {
    name: "Tennessee",
    slug: "tennessee",
    subtitle: "SOUND & STEEL",
    desc: "Supporting the Nashville growth hub with elite solar-autonomous surveillance. Z1 units secure the music and steel manufacturing pillars of Tennessee.",
    weatherContext: "Variable canopy performance and high-humidity circuit defense.",
    cities: {
      "nashville": {
        name: "Nashville",
        slug: "nashville",
        desc: "Protecting Nashville's booming construction and music city perimeters. Rapid-deployment solar units for Music Row and the Urban Hub.",
        keywords: ["Surveillance Trailers Nashville", "Nashville Site Security", "Solar Trailers Tennessee"],
        industryAnchor: "Construction & Events",
        threatFocus: "Job-site Vandalism & Equipment Loss",
        powerSpec: "LiFePO4 Supplemental Power for Sound/Security."
      }
    }
  },
  "washington": {
    name: "Washington",
    slug: "washington",
    subtitle: "PACIFIC TACOMA",
    desc: "Securing the high-growth Pacific Northwest tech and maritime sectors. Z1 units are engineered for overcast efficiency and maritime resilience.",
    weatherContext: "Low-light monocrystalline conversion and maritime anti-corrosive coatings.",
    cities: {
      "seattle": {
        name: "Seattle",
        slug: "seattle",
        desc: "Securing the Tech Bay's construction and logistical perimeters. AI-driven security trailers for high-density Seattle sectors.",
        keywords: ["Surveillance Trailers Seattle", "Seattle Site Security", "Solar Trailers Washington"],
        industryAnchor: "High-Tech & Maritime Logistics",
        threatFocus: "Intellectual Property & Port Breaches",
        powerSpec: "Overcast-rated LiFePO4 Storage Architecture."
      }
    }
  },
  "colorado": {
    name: "Colorado",
    slug: "colorado",
    subtitle: "MOUNTAIN COMMAND",
    desc: "Securing the high-altitude tech and energy sectors. Z1 provides Denver with the region's most reliable winter-hardened security trailers.",
    weatherContext: "High-altitude oxygen-rich battery heaters and snow-shedding arrays.",
    cities: {
      "denver": {
        name: "Denver",
        slug: "denver",
        desc: "Protecting Denver's tech corridors and industrial perimeters. Tactical surveillance rated for the high-altitude Mile High sector.",
        keywords: ["Surveillance Trailers Denver", "Denver Industrial Security", "Solar Trailers Colorado"],
        industryAnchor: "Tech & Energy Logistics",
        threatFocus: "Critical Asset Theft & Sabotage",
        powerSpec: "Cold-Optimized LiFePO4 Power Hub."
      }
    }
  }
};
