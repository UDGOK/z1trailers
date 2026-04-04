export interface CitySector {
  name: string;
  slug: string;
  desc: string;
  keywords: string[];
}

export interface StateRegion {
  name: string;
  slug: string;
  subtitle: string;
  desc: string;
  cities: Record<string, CitySector>;
}

export const locationDb: Record<string, StateRegion> = {
  "oklahoma": {
    name: "Oklahoma",
    slug: "oklahoma",
    subtitle: "COMMAND HQ",
    desc: "Z1 Trailers operates its central tactical command from Oklahoma. We provide the region's most advanced solar-powered surveillance trailers for construction site security, event monitoring, and industrial perimeter defense.",
    cities: {
      "oklahoma-city": {
        name: "Oklahoma City",
        slug: "oklahoma-city",
        desc: "Dominating the OKC metro with elite surveillance trailers. Our solar-powered units provide 24/7 autonomous monitoring for Oklahoma City's rapid infrastructure growth.",
        keywords: ["Surveillance Trailers Oklahoma City", "Solar Security Trailers OKC", "Battery Powered Surveillance"]
      },
      "tulsa": {
        name: "Tulsa",
        slug: "tulsa",
        desc: "Securing Tulsa's industrial and commercial sectors with high-yield thermal imaging trailers. Z1 units are the gold standard for Tulsa asset protection.",
        keywords: ["Mobile Surveillance Tulsa", "Solar Trailers Tulsa", "Security Trailer Rental Tulsa"]
      },
      "edmond": {
        name: "Edmond",
        slug: "edmond",
        desc: "Elite security for Edmond's premier residential and commercial developments. Providing silent, 100% green solar surveillance 24/7.",
        keywords: ["Edmond Security Trailers", "Solar Powered Surveillance Edmond", "AI Security Trailers"]
      },
      "norman": {
        name: "Norman",
        slug: "norman",
        desc: "Tactical perimeter defense for Norman's campus and research sectors. Our battery-backed solar units ensure zero downtime during critical operations.",
        keywords: ["Norman Surveillance trailers", "Solar trailers Norman", "Battery security trailers"]
      },
      "broken-arrow": {
        name: "Broken Arrow",
        slug: "broken-arrow",
        desc: "Self-sustaining security endpoints for Broken Arrow's manufacturing and retail hubs. Deploy in under 15 minutes to any sector.",
        keywords: ["Broken Arrow Security", "Surveillance trailers Broken Arrow", "Solar trailers BA"]
      },
      "bixby": {
        name: "Bixby",
        slug: "bixby",
        desc: "Precision surveillance for Bixby's expanding residential and commercial perimeters. Z1 Trailers provides the ultimate tactical overmatch in Bixby, OK.",
        keywords: ["Surveillance Trailers Bixby", "Solar Trailers Bixby", "Battery Trailers Bixby"]
      },
      "jenks": {
        name: "Jenks",
        slug: "jenks",
        desc: "High-definition, AI-driven security for Jenks' riverfront and commercial sectors. Our solar-autonomous trailers are the primary defense vector for Jenks businesses.",
        keywords: ["Surveillance Trailers Jenks", "Solar Trailers Jenks", "Battery Trailers Jenks"]
      }
    }
  },
  "texas": {
    name: "Texas",
    slug: "texas",
    subtitle: "PRIMARY DIVISION",
    desc: "Texas infrastructure demands maximum scale and density. Z1 Trailers delivers military-grade solar surveillance across the Lone Star State, from the DFW Metroplex to the Houston Port Logistics sector.",
    cities: {
      "dallas": {
        name: "Dallas",
        slug: "dallas",
        desc: "Securing the high-density Dallas skyline and infrastructure projects. Our AI-equipped trailers provide sub-second threat categorization in the DFW metro.",
        keywords: ["Surveillance Trailers Dallas", "Solar Security Dallas", "Mobile Surveillance DFW"]
      },
      "houston": {
        name: "Houston",
        slug: "houston",
        desc: "Protecting Houston's critical energy and maritime assets. Thermal imaging and LPR-equipped solar trailers for 24/7 port security.",
        keywords: ["Houston Security Trailers", "Solar Port Surveillance", "Battery Backup Security Houston"]
      },
      "austin": {
        name: "Austin",
        slug: "austin",
        desc: "Next-gen security for the Austin tech corridor. 100% solar autonomous trailers with StarLink connectivity for remote site monitoring.",
        keywords: ["Austin Surveillance Trailers", "Solar Power Security Austin", "AI Camera Trailers"]
      },
      "san-antonio": {
        name: "San Antonio",
        slug: "san-antonio",
        desc: "Protecting San Antonio's historic and commercial sectors. Rapid-deployment trailers for event security and construction site monitoring.",
        keywords: ["San Antonio Security Trailers", "Solar Surveillance San Antonio", "Battery Security"]
      },
      "fort-worth": {
        name: "Fort Worth",
        slug: "fort-worth",
        desc: "Tactical defense for Fort Worth's industrial and logistics hubs. Heavy-duty solar arrays for maximum autonomy and 24/7 uptime.",
        keywords: ["Fort Worth Surveillance", "Solar Security Trailers Fort Worth", "Mobile Security Fort Worth"]
      }
    }
  },
  "louisiana": {
    name: "Louisiana",
    slug: "louisiana",
    subtitle: "REGIONAL SECTOR",
    desc: "From the Port of New Orleans to the industrial corridors of Baton Rouge, Z1 Trailers provides off-grid security that performs in extreme humidity and sub-tropical environments.",
    cities: {
      "new-orleans": {
        name: "New Orleans",
        slug: "new-orleans",
        desc: "Securing the Big Easy's tourism and maritime sectors. Rapid-recharge solar trailers for reliable, off-grid security in New Orleans.",
        keywords: ["New Orleans Surveillance", "Solar Security Louisiana", "Battery Surveillance NOLA"]
      },
      "baton-rouge": {
        name: "Baton Rouge",
        slug: "baton-rouge",
        desc: "Capital region security HQ. Providing high-authority perimeter defense for Baton Rouge industrial and commercial perimeters.",
        keywords: ["Baton Rouge Security Trailers", "Solar Surveillance Baton Rouge", "Mobile Security BR"]
      }
    }
  },
  "arkansas": {
    name: "Arkansas",
    slug: "arkansas",
    subtitle: "REGIONAL SECTOR",
    desc: "Securing the Natural State with 100% solar-driven surveillance. From Little Rock logistics to Northwest Arkansas tech growth, Z1 is the elite security partner.",
    cities: {
      "little-rock": {
        name: "Little Rock",
        slug: "little-rock",
        desc: "Central Arkansas hub for tactical surveillance. Protecting retail hubs and construction sites across Little Rock with AI-driven trailers.",
        keywords: ["Little Rock Surveillance", "Solar Security Arkansas", "Battery Security Little Rock"]
      },
      "fayetteville": {
        name: "Fayetteville",
        slug: "fayetteville",
        desc: "Protecting the rapid growth of Northwest Arkansas. StarLink-equipped security trailers for remote perimeters in the Ozark region.",
        keywords: ["Fayetteville Security Trailers", "NWA Solar Surveillance", "AI Mobile Security"]
      }
    }
  },
  "kansas": {
    name: "Kansas",
    slug: "kansas",
    subtitle: "REGIONAL SECTOR",
    desc: "Securing the heartland with autonomous security endpoints. Z1 provides Wichita and Overland Park with the region's most reliable solar-powered monitoring trailers.",
    cities: {
      "wichita": {
        name: "Wichita",
        slug: "wichita",
        desc: "Wichita's primary defense vector for industrial and aerospace security. Thermal-equipped solar trailers for 24/7 aircraft and site monitoring.",
        keywords: ["Wichita Surveillance Trailers", "Solar Security ICT", "Battery Security Kansas"]
      }
    }
  },
  "alabama": {
    name: "Alabama",
    slug: "alabama",
    subtitle: "REGIONAL SECTOR",
    desc: "Expanding the southeastern corridor's security infrastructure. Z1 delivers advanced AI surveillance trailers to Birmingham and Huntsville's growing tech sectors.",
    cities: {
      "birmingham": {
        name: "Birmingham",
        slug: "birmingham",
        desc: "Securing Birmingham's commercial and industrial perimeters. Tactical solar-powered trailers for rapid-deployment asset protection.",
        keywords: ["Birmingham Surveillance", "Solar Security Alabama", "Mobile Security Birmingham"]
      },
      "huntsville": {
        name: "Huntsville",
        slug: "huntsville",
        desc: "High-tech security for Huntsville's aerospace and defense sectors. Our units provide military-grade thermal tracking and solar autonomy.",
        keywords: ["Huntsville Security Trailers", "Solar Surveillance Rocket City", "AI Security Huntsville"]
      }
    }
  }
};
