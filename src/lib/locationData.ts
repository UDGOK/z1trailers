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
  // --- CORE MID-SOUTH SECTORS ---
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
      },
      "bixby": {
        name: "Bixby",
        slug: "bixby",
        desc: "Securing Bixby's high-end residential and commercial growth. Tactical surveillance for South Tulsa's primary expansion sectors.",
        keywords: ["Bixby Security Trailers", "Solar Trailers Bixby", "Residential Construction Security"],
        industryAnchor: "Commercial Development",
        threatFocus: "Site Loitering & Asset Vandalism",
        powerSpec: "LiFePO4 Tactical Power Reserve."
      },
      "jenks": {
        name: "Jenks",
        slug: "jenks",
        desc: "Riverfront and commercial security for the Jenks sector. Deploying rapid-response Z1 units to protect the retail and industrial river district.",
        keywords: ["Surveillance Trailers Jenks", "Jenks Solar Security", "Jenks Business Security"],
        industryAnchor: "Retail & Tourism",
        threatFocus: "Unauthorized Perimeter Access",
        powerSpec: "LiFePO4 Supplemental Power for event lighting."
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
      },
      "austin": {
        name: "Austin",
        slug: "austin",
        desc: "Securing the silicon hills. 100% solar autonomous surveillance with StarLink connectivity for Austin's high-tech manufacturing perimeters.",
        keywords: ["Austin Surveillance Trailers", "Solar Security Austin", "Tech Corridor Monitoring"],
        industryAnchor: "Technology Manufacturing",
        threatFocus: "Retail Theft & Site Loitering",
        powerSpec: "LiFePO4 High-Cycle Battery Architecture."
      }
    }
  },
  "louisiana": {
    name: "Louisiana",
    slug: "louisiana",
    subtitle: "REGIONAL SECTOR",
    desc: "From the Port of New Orleans to the industrial corridors of Baton Rouge, Z1 Trailers provides off-grid security and LiFePO4 backup that performs in extreme humidity.",
    weatherContext: "Anti-corrosive maritime chassis and rapid-recharge solar.",
    cities: {
      "new-orleans": {
        name: "New Orleans",
        slug: "new-orleans",
        desc: "Securing the Big Easy's tourism and maritime sectors. Rapid-recharge solar trailers for reliable, off-grid security in NOLA.",
        keywords: ["New Orleans Surveillance", "Solar Security Louisiana", "Battery Surveillance NOLA"],
        industryAnchor: "Tourism & Maritime",
        threatFocus: "Perimeter Breaches & Equipment Theft",
        powerSpec: "Maritime-Spec LiFePO4 Storage."
      },
      "baton-rouge": {
        name: "Baton Rouge",
        slug: "baton-rouge",
        desc: "Capital region security HQ. Providing high-authority perimeter defense for Baton Rouge industrial and commercial perimeters.",
        keywords: ["Baton Rouge Security Trailers", "Solar Surveillance Baton Rouge", "Mobile Security BR"],
        industryAnchor: "Industrial & Government",
        threatFocus: "Industrial Sabotage & Supply Theft",
        powerSpec: "LiFePO4 Supplemental Power for field offices."
      }
    }
  },
  "arkansas": {
    name: "Arkansas",
    slug: "arkansas",
    subtitle: "REGIONAL SECTOR",
    desc: "Securing the Natural State with 100% solar-driven surveillance. From Little Rock logistics to Northwest Arkansas tech growth, Z1 is the elite security partner.",
    weatherContext: "Mountain-ready StarLink units and variable-canopy harvesting arrays.",
    cities: {
      "little-rock": {
        name: "Little Rock",
        slug: "little-rock",
        desc: "Central Arkansas hub for tactical surveillance. Protecting retail hubs and construction sites across Little Rock with AI-driven trailers.",
        keywords: ["Little Rock Surveillance", "Solar Security Arkansas", "Battery Security Little Rock"],
        industryAnchor: "Logistics & Retail",
        threatFocus: "Asset Vandalism & Equipment Theft",
        powerSpec: "LiFePO4 Core with 15-day autonomy."
      },
      "fayetteville": {
        name: "Fayetteville",
        slug: "fayetteville",
        desc: "Protecting the rapid growth of Northwest Arkansas. StarLink-equipped security trailers for remote perimeters in the Ozark region.",
        keywords: ["Fayetteville Security Trailers", "NWA Solar Surveillance", "AI Mobile Security"],
        industryAnchor: "Tech & Corporate HQ",
        threatFocus: "Cyber-Physical Perimeter Defense",
        powerSpec: "LiFePO4 Supplemental Power for remote comms."
      }
    }
  },
  "kansas": {
    name: "Kansas",
    slug: "kansas",
    subtitle: "REGIONAL SECTOR",
    desc: "Securing the heartland with autonomous security endpoints. Z1 provides Wichita and Overland Park with the region's most reliable solar-powered LiFePO4 trailers.",
    weatherContext: "High-wind rated masts for the prairie sectors.",
    cities: {
      "wichita": {
        name: "Wichita",
        slug: "wichita",
        desc: "Wichita's primary defense vector for industrial and aerospace security. Thermal-equipped solar trailers for 24/7 aircraft and site monitoring.",
        keywords: ["Wichita Surveillance Trailers", "Solar Security ICT", "Battery Security Kansas"],
        industryAnchor: "Aerospace & Industrial",
        threatFocus: "Asset Sabotage & Metal Theft",
        powerSpec: "LiFePO4 Supplemental Power for field tooling."
      }
    }
  },
  "alabama": {
    name: "Alabama",
    slug: "alabama",
    subtitle: "REGIONAL SECTOR",
    desc: "Expanding the southeastern corridor's security infrastructure. Z1 delivers advanced AI surveillance trailers to Birmingham and Huntsville's growing tech sectors.",
    weatherContext: "High-humidity circuit protection and storm-rated chassis.",
    cities: {
      "birmingham": {
        name: "Birmingham",
        slug: "birmingham",
        desc: "Securing Birmingham's commercial and industrial perimeters. Tactical solar-powered trailers for rapid-deployment asset protection.",
        keywords: ["Birmingham Surveillance", "Solar Security Alabama", "Mobile Security Birmingham"],
        industryAnchor: "Commercial & Industrial",
        threatFocus: "After-hours Loitering & Asset Theft",
        powerSpec: "LiFePO4 Tactical Reserve."
      },
      "huntsville": {
        name: "Huntsville",
        slug: "huntsville",
        desc: "High-tech security for Huntsville's aerospace and defense sectors. Our units provide military-grade thermal tracking and solar autonomy.",
        keywords: ["Huntsville Security Trailers", "Solar Surveillance Rocket City", "AI Security Huntsville"],
        industryAnchor: "Defense & Aerospace",
        threatFocus: "Unauthorized Perimeter Access",
        powerSpec: "LiFePO4 Supplemental Power for research pods."
      }
    }
  },

  // --- COASTAL & TECH EXPANSION ---
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
        climateLogic: "Corrosion-resistant chassis for salt-air proximity.",
        powerSpec: "Maritime-Spec LiFePO4 Hub."
      },
      "orlando": {
        name: "Orlando",
        slug: "orlando",
        desc: "Providing scale security for Orlando's massive tourism and event landscape. Temporary perimeters for the world's largest gathering sectors.",
        keywords: ["Orlando Security Trailers", "Event Surveillance Orlando", "Solar Trailers Orlando"],
        industryAnchor: "Tourism & Events",
        threatFocus: "Crowd Flow & Perimeter Breach",
        climateLogic: "Rapid-recharge arrays for high humidity/storm seasons.",
        powerSpec: "LiFePO4 Supplemental Power for event comms/lighting."
      }
    }
  },
  "arizona": {
    name: "Arizona",
    slug: "arizona",
    subtitle: "DESERT COMMAND",
    desc: "Arizona's data center boom requires extreme-heat-rated security hardware. Z1 units operate in 115°F+ environments with zero thermal throttling and LiFePO4 stability.",
    weatherContext: "Independently cooled lithium core and solar-shade chassis design.",
    cities: {
      "phoenix": {
        name: "Phoenix",
        slug: "phoenix",
        desc: "Securing Phoenix's data center corridor and massive residential expansions. Solar trailers rated for the Valley's extreme thermal loads.",
        keywords: ["Surveillance Trailers Phoenix", "PHX Data Center Security", "Solar Trailers Arizona"],
        industryAnchor: "Data Centers & Residential Development",
        threatFocus: "Copper Wire & Heavy Machinery Theft",
        climateLogic: "Extreme Heat Monocrystalline Array rated for 150°F operation.",
        powerSpec: "LiFePO4 Desert Core (Heat-Shielded)."
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
        climateLogic: "Urban Reflective Solar Capture for low-light city canyons.",
        powerSpec: "LiFePO4 Supplemental Power for urban work zones."
      }
    }
  },

  // --- INDUSTRIAL CORE & DATA CENTER ALLEY ---
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
        climateLogic: "Rapid-recharge solar for variable canopy environments.",
        powerSpec: "LiFePO4 Supplemental Power for field units."
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
        threatFocus: "Asset Loitering & Vehicle Break-ins",
        powerSpec: "LiFePO4 Supplemental Power for Urban hubs."
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
        threatFocus: "Critical Asset Theft & Sabotage",
        powerSpec: "LiFePO4 Power Hub."
      }
    }
  }
};
