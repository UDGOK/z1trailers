export interface CitySector {
  name: string;
  slug: string;
  desc: string;
  keywords: string[];
  climateLogic?: string;
  industryAnchor?: string;
  threatFocus?: string;
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
  // --- CORE MID-SOUTH SECTORS (Expanded) ---
  "oklahoma": {
    name: "Oklahoma",
    slug: "oklahoma",
    subtitle: "CENTRAL COMMAND",
    desc: "Z1 Trailers operates its primary tactical hub from Oklahoma. We protect the region's energy perimeters and construction booms with zero-infrastructure solar surveillance.",
    weatherContext: "High-wind-rated masts and rapid recharge monocrystalline arrays.",
    cities: {
      "oklahoma-city": {
        name: "Oklahoma City",
        slug: "oklahoma-city",
        desc: "Dominating OKC metro with elite surveillance trailers. Securing the rapid-growth infrastructure and capitol perimeters with 24/7 AI monitoring.",
        keywords: ["Surveillance Trailers Oklahoma City", "Solar Security Trailers OKC", "OKC Parking Lot Security"],
        industryAnchor: "Government & Infrastructure",
        threatFocus: "High-Value Copper & Equipment Theft"
      },
      "tulsa": {
        name: "Tulsa",
        slug: "tulsa",
        desc: "Protecting Tulsa's industrial heart. Our trailers secure warehouse perimeters and oil & gas logistics with thermal imaging overmatch.",
        keywords: ["Mobile Surveillance Tulsa", "Solar Trailers Tulsa", "Tulsa Industrial Security"],
        industryAnchor: "Logistics & Manufacturing",
        threatFocus: "Industrial Sabotage & Catalytic Converters"
      },
      "bixby": {
        name: "Bixby",
        slug: "bixby",
        desc: "Securing Bixby's high-end residential and commercial growth. Tactical surveillance for South Tulsa's primary expansion sectors.",
        keywords: ["Bixby Security Trailers", "Solar Trailers Bixby", "Residential Construction Security"],
        industryAnchor: "Commercial Development",
        threatFocus: "Site Loitering & Asset Vandalism"
      },
      "jenks": {
        name: "Jenks",
        slug: "jenks",
        desc: "Riverfront and commercial security for the Jenks sector. Deploying rapid-response Z1 units to protect the retail and industrial river district.",
        keywords: ["Surveillance Trailers Jenks", "Jenks Solar Security", "Jenks Business Security"],
        industryAnchor: "Retail & Tourism",
        threatFocus: "Unauthorized Perimeter Access"
      }
    }
  },
  "texas": {
    name: "Texas",
    slug: "texas",
    subtitle: "PRIMARY DIVISION",
    desc: "Texas infrastructure demands maximum scale. We secure the Lone Star State's massive tech corridors and port logistics with military-grade autonomous hardware.",
    weatherContext: "Heat-dissipating lithium enclosures and high-yield solar arrays.",
    cities: {
      "dallas": {
        name: "Dallas",
        slug: "dallas",
        desc: "Securing DFW's massive data center and skyscraper perimeters. 24/7 AI surveillance with sub-second threat categorization.",
        keywords: ["Surveillance Trailers Dallas", "Solar Security Dallas", "DFW Mobile Surveillance"],
        industryAnchor: "Data Centers & Skyscrapers",
        threatFocus: "High-Tech Asset Theft"
      },
      "houston": {
        name: "Houston",
        slug: "houston",
        desc: "Protecting Houston's critical maritime and energy infrastructure. Thermal-imaging solar trailers for the Gulf Coast's primary port sectors.",
        keywords: ["Houston Security Trailers", "Port Security Houston", "Battery Trailers Houston"],
        industryAnchor: "Maritime & Energy",
        threatFocus: "Sabotage & Perimeter Breaches"
      },
      "austin": {
        name: "Austin",
        slug: "austin",
        desc: "Securing the silicon hills. 100% solar autonomous surveillance with StarLink connectivity for Austin's high-tech manufacturing perimeters.",
        keywords: ["Austin Surveillance Trailers", "Solar Security Austin", "Tech Corridor Monitoring"],
        industryAnchor: "Technology Manufacturing",
        threatFocus: "Retail Theft & Site Loitering"
      }
    }
  },

  // --- PHASE 2: COASTAL & TECH EXPANSION ---
  "florida": {
    name: "Florida",
    slug: "florida",
    subtitle: "RESILIENCE DIVISION",
    desc: "Florida demands weather-hardened security. Our units are engineered for high humidity, salt-spray environments, and 150MPH wind-rated deployments.",
    weatherContext: "Anti-corrosive coatings and storm-rated mast deployment logic.",
    cities: {
      "miami": {
        name: "Miami",
        slug: "miami",
        desc: "Securing Miami's luxury skyscraper developments and maritime hubs. Rapid deployment for resilience-focused urban perimeters.",
        keywords: ["Surveillance Trailers Miami", "Solar Security Miami", "Miami Maritime Security"],
        industryAnchor: "High-Rise Construction & Ports",
        threatFocus: "High-Value Asset Loss & Vandalism",
        climateLogic: "Corrosion-resistant chassis for salt-air proximity."
      },
      "orlando": {
        name: "Orlando",
        slug: "orlando",
        desc: "Providing scale security for Orlando's massive tourism and event landscape. Temporary perimeters for the world's largest gathering sectors.",
        keywords: ["Orlando Security Trailers", "Event Surveillance Orlando", "Solar Trailers Orlando"],
        industryAnchor: "Tourism & Events",
        threatFocus: "Crowd Flow & Perimeter Breach",
        climateLogic: "Rapid-recharge arrays for high humidity/storm seasons."
      },
      "tampa": {
        name: "Tampa",
        slug: "tampa",
        desc: "Gulf Coast industrial security. Tactical solar trailers for Tampa's shipping and logistical infrastructure hubs.",
        keywords: ["Surveillance Trailers Tampa", "Solar Security Tampa", "Tampa Port Monitoring"],
        industryAnchor: "Shipping & Logistics",
        threatFocus: "Catalytic Converter & Cargo Theft"
      }
    }
  },
  "california": {
    name: "California",
    slug: "california",
    subtitle: "WESTERN COMMAND",
    desc: "California's retail and maritime sectors require aggressive proactive deterrence. Z1 units integrate AI lockdowns to stop crime before it reaches the perimeter.",
    weatherContext: "Dual-carrier LTE/5G failover for dense urban or remote desert sectors.",
    cities: {
      "los-angeles": {
        name: "Los Angeles",
        slug: "los-angeles",
        desc: "Securing the Port of LA and retail parking perimeters. Proactive deterrence with 120dB talk-down and thermal AI targeting.",
        keywords: ["Surveillance Trailers Los Angeles", "LA Retail Security", "Port of LA Monitoring"],
        industryAnchor: "Ports & Large Retail",
        threatFocus: "Organized Retail Crime (ORC) & Port Sabotage",
        climateLogic: "Smog-penetrating optical filters for clear AI detection."
      },
      "san-francisco": {
        name: "San Francisco",
        slug: "san-francisco",
        desc: "Protecting the Tech Bay's construction and logistical perimeters. AI-driven security trailers for high-density Bay Area sectors.",
        keywords: ["Surveillance Trailers San Francisco", "SF Site Security", "Bay Area Mobile Surveillance"],
        industryAnchor: "High-Tech Infrastructure",
        threatFocus: "Vehicle Break-ins & Asset Theft"
      },
      "san-diego": {
        name: "San Diego",
        slug: "san-diego",
        desc: "Securing San Diego's maritime and research centers. Reliable solar-autonomous security for the southern border corridors.",
        keywords: ["San Diego Security Trailers", "Solar Trailers SD", "Maritime Monitoring San Diego"],
        industryAnchor: "Biotech & Defense Logistics",
        threatFocus: "Unauthorized Perimeter Trespass"
      }
    }
  },
  "arizona": {
    name: "Arizona",
    slug: "arizona",
    subtitle: "DESERT COMMAND",
    desc: "Arizona's data center boom requires extreme-heat-rated security hardware. Z1 units operate in 115°F+ environments with zero thermal throttling.",
    weatherContext: "Independently cooled lithium core and solar-shade chassis design.",
    cities: {
      "phoenix": {
        name: "Phoenix",
        slug: "phoenix",
        desc: "Securing Phoenix's data center corridor and massive residential expansions. Solar trailers rated for the Valley's extreme thermal loads.",
        keywords: ["Surveillance Trailers Phoenix", "PHX Data Center Security", "Solar Trailers Arizona"],
        industryAnchor: "Data Centers & Residential Development",
        threatFocus: "Copper Wire & Heavy Machinery Theft",
        climateLogic: "Extreme Heat Monocrystalline Array rated for 150°F operation."
      }
    }
  },
  "new-york": {
    name: "New York",
    slug: "new-york",
    subtitle: "EMPIRE DIVISION",
    desc: "Securing the vertical perimeters of the Empire State. From NYC skyscraper infrastructure to upstate logistics, Z1 provides the Empire's primary security overmatch.",
    weatherContext: "Winter-rated battery heaters and high-density urban 5G/LTE failover.",
    cities: {
      "new-york-city": {
        name: "New York City",
        slug: "new-york-city",
        desc: "The primary defense for NYC's massive skyscraper and infrastructure projects. Our units operate in the heart of dense Manhattan logistics.",
        keywords: ["Surveillance Trailers NYC", "Manhattan Site Security", "NYC Construction Monitoring"],
        industryAnchor: "Architecture & Infrastructure",
        threatFocus: "Labor Non-Compliance & Asset Loss",
        climateLogic: "Urban Reflective Solar Capture for low-light city canyons."
      }
    }
  },
  "georgia": {
    name: "Georgia",
    slug: "georgia",
    subtitle: "SOUTHERN LOGISTICS",
    desc: "Securing the Southeast's primary logistics and film sectors. From Atlanta's urban expansion to the deep-water ports of Savannah.",
    weatherContext: "High-humidity circuit protection and rapid-deployment logistics.",
    cities: {
      "atlanta": {
        name: "Atlanta",
        slug: "atlanta",
        desc: "Tactical surveillance for Atlanta's massive logistics and film studio perimeters. AI-driven monitoring for the ATL metro boom.",
        keywords: ["Surveillance Trailers Atlanta", "ATL Logistics Security", "Solar Trailers Georgia"],
        industryAnchor: "Logistics & Film Production",
        threatFocus: "High-Value Cargo & Equipment Theft",
        climateLogic: "Rapid-recharge solar for variable canopy environments."
      },
      "savannah": {
        name: "Savannah",
        slug: "savannah",
        desc: "Protecting Savannah's maritime assets and historic perimeters. Tactical hardware for Georgia's primary coastal gateway.",
        keywords: ["Savannah Security Trailers", "Port of Savannah Monitoring", "Solar Surveillance SAV"],
        industryAnchor: "Maritime & Heritage Tourism",
        threatFocus: "Port Sabotage & Unauthorized Access"
      }
    }
  },
  "north-carolina": {
    name: "North Carolina",
    slug: "north-carolina",
    subtitle: "ATLANTIC COMMAND",
    desc: "Securing the Research Triangle and the banking capital of the South. Z1 provides elite solar-autonomous surveillance for NC's high-tech corridors.",
    weatherContext: "Mountain-rated StarLink endpoints and coastal storm-spec hardware.",
    cities: {
      "charlotte": {
        name: "Charlotte",
        slug: "charlotte",
        desc: "Protecting Charlotte's financial and commercial expansion sectors. Tactical AI surveillance for the Queen City's rapid development.",
        keywords: ["Surveillance Trailers Charlotte", "Charlotte Site Security", "Solar Security NC"],
        industryAnchor: "Finance & Large Retail",
        threatFocus: "Asset Loitering & Vehicle Break-ins"
      },
      "raleigh": {
        name: "Raleigh",
        slug: "raleigh",
        desc: "AI security vectors for the Research Triangle. Protecting high-tech labs and education campuses in the Raleigh-Durham sector.",
        keywords: ["Raleigh Security Trailers", "Research Triangle Monitoring", "Solar Surveillance Raleigh"],
        industryAnchor: "Bio-Tech & Education",
        threatFocus: "Intellectual Property & Lab Sabotage"
      }
    }
  },
  "illinois": {
    name: "Illinois",
    slug: "illinois",
    subtitle: "MIDWEST DIVISION",
    desc: "Securing the industrial heart of the Midwest. Z1 delivers robust solar surveillance to Chicago's logistical and manufacturing hubs.",
    weatherContext: "Winter-rated battery heaters and high-density urban 5G vectors.",
    cities: {
      "chicago": {
        name: "Chicago",
        slug: "chicago",
        desc: "The primary defense for Chicago's massive industrial and construction infrastructure. Operating in the toughest urban logistics environments.",
        keywords: ["Surveillance Trailers Chicago", "Chicago Industrial Security", "Solar Security IL"],
        industryAnchor: "Manufacturing & Infrastructure",
        threatFocus: "Heavy Equipment Theft & After-hours Vandalism",
        climateLogic: "Wind-rated 30ft masts for the Windy City."
      }
    }
  },
  "mississippi": {
    name: "Mississippi",
    slug: "mississippi",
    subtitle: "GULF SECTOR",
    desc: "Tactical off-grid security for the Magnolia State. Protecting infrastructure and industrial development in the Mississippi Gulf corridor.",
    weatherContext: "Hurricane-rated anchor systems and anti-corrosive chassis.",
    cities: {
      "jackson": {
        name: "Jackson",
        slug: "jackson",
        desc: "Securing Jackson's commercial and infrastructure hubs. 100% solar autonomous trailers for reliable security in the state capital.",
        keywords: ["Jackson Surveillance", "Solar Security Mississippi", "Battery Surveillance MS"],
        industryAnchor: "Infrastructure & Logistics",
        threatFocus: "Critical Asset Theft & Sabotage"
      }
    }
  }
};

