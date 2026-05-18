// ============================================================
// Site Configuration
// ============================================================

export interface SiteConfig {
  language: string;
  brandName: string;
}

export const siteConfig: SiteConfig = {
  language: "en",
  brandName: "HardJunc",
};

// ============================================================
// Navigation
// ============================================================

export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  links: NavLink[];
  ctaText: string;
}

export const navigationConfig: NavigationConfig = {
  links: [
    { label: "Our Story", href: "#curriculum" },
    { label: "Infrastructure", href: "#cinematic" },
    { label: "Research", href: "#alumni" },
    { label: "Contact", href: "/contact" },
  ],
  ctaText: "Launch App",
};

// ============================================================
// Hero
// ============================================================

export interface HeroConfig {
  badge: string;
  titleLine1: string;
  titleLine2: string;
  titleLine3: string;
  subtitle: string;
  ctaText: string;
  ctaUrl: string;
}

export const heroConfig: HeroConfig = {
  badge: "THE PROTOTYPE POWERED BY YOU",
  titleLine1: "STOP FIGHTING",
  titleLine2: "FRAGMENTED",
  titleLine3: "TOOLS.",
  subtitle: "The intelligent workspace for hardware creators. An end-to-end ecosystem connecting AI design, real-time simulation, and physical debugging.",
  ctaText: "Open Studio",
  ctaUrl: "https://cadmint.vercel.app",
};

// ============================================================
// Capabilities (Curriculum section)
// ============================================================

export interface CapabilityItem {
  title: string;
  slug: string;
  description: string;
  image: string;
}

export interface CapabilitiesConfig {
  sectionLabel: string;
  items: CapabilityItem[];
}

export const capabilitiesConfig: CapabilitiesConfig = {
  sectionLabel: "The Bottleneck",
  items: [
    {
      title: "Software Overload",
      slug: "software-overload",
      description: "Juggling separate apps for coding, simulating, and PCB design destroys your creative flow instantly.",
      image: "images/capability-1.jpg",
    },
    {
      title: "Physical Disconnect",
      slug: "physical-disconnect",
      description: "Designs work perfectly on a screen, but real-world breadboards fail with zero debugging assistance.",
      image: "images/capability-2.jpg",
    },
    {
      title: "High Barrier to Entry",
      slug: "high-barrier",
      description: "The steep learning curve of existing industrial software shuts out millions of students, hobbyists, and potential innovators.",
      image: "images/capability-3.jpg",
    },
    {
      title: "Idea-to-Design AI",
      slug: "idea-to-design",
      description: "Instantly translates user descriptions into complete circuit schematics and starter code. A chat-based assistant that acts as your personal engineering co-pilot.",
      image: "images/capability-4.jpg",
    },
  ],
};

// ============================================================
// Capability Detail (sub-pages)
// ============================================================

export interface CapabilityDetailData {
  title: string;
  subtitle: string;
  paragraphs: string[];
}

export interface CapabilityDetailConfig {
  sectionLabel: string;
  backLinkText: string;
  prevLabel: string;
  nextLabel: string;
  notFoundText: string;
  capabilities: Record<string, CapabilityDetailData>;
}

export const capabilityDetailConfig: CapabilityDetailConfig = {
  sectionLabel: "Capability",
  backLinkText: "Back to home",
  prevLabel: "Previous",
  nextLabel: "Next",
  notFoundText: "Capability not found.",
  capabilities: {
    "software-overload": {
      title: "Software Overload",
      subtitle: "Unified workspace for hardware creators",
      paragraphs: [
        "Modern hardware creation requires juggling between five or more separate applications. You write code in one IDE, design PCBs in another, run simulations in yet another tool, and manage component libraries somewhere else entirely.",
        "This constant context switching destroys creative flow and introduces errors at every handoff point. HardJunc eliminates this fragmentation by providing a single, high-performance platform that unifies learning, software design, and physical hardware creation.",
        "Our integrated workspace keeps your schematics, code, simulations, and documentation in one place. Changes propagate automatically across all views, ensuring your digital intent always matches your physical reality.",
      ],
    },
    "physical-disconnect": {
      title: "Physical Disconnect",
      subtitle: "Bridging simulation and reality",
      paragraphs: [
        "The gap between simulation and physical hardware is where most prototypes die. Designs that pass every virtual test can fail in the real world due to parasitic capacitance, signal noise, or power delivery issues that simulators never captured.",
        "HardJunc connects directly to your physical hardware through our debugging interface. Real-time telemetry streams back from your breadboard, showing actual voltage levels, signal timings, and power consumption alongside your design files.",
        "When something goes wrong, our AI assistant analyzes both your design intent and the physical measurements to pinpoint exactly where the disconnect occurs. No more guessing. No more oscilloscope guessing games.",
      ],
    },
    "high-barrier": {
      title: "High Barrier to Entry",
      subtitle: "Hardware engineering for everyone",
      paragraphs: [
        "Industrial-grade EDA tools were built for professional engineers with years of training. Their interfaces are dense, their workflows arcane, and their learning curves are nearly vertical. This excludes students, hobbyists, and makers who have brilliant ideas but lack formal training.",
        "HardJunc reimagines hardware creation from the ground up. Our natural language interface lets you describe what you want to build in plain English. Our AI translates your intent into working circuits, complete with component selection, schematic layout, and starter code.",
        "The platform grows with you. Beginners can start with high-level descriptions and let the AI handle the details. As you learn, you can take control of increasingly granular aspects of the design process.",
      ],
    },
    "idea-to-design": {
      title: "Idea-to-Design AI",
      subtitle: "From concept to circuit in seconds",
      paragraphs: [
        "Describe your project in natural language and watch as our AI generates complete circuit schematics, selects optimal components, and writes starter code tailored to your specific requirements.",
        "The AI understands context. Tell it you want an Arduino that blinks when it gets dark, and it knows to add a photoresistor, calculate the proper resistor value, and write the analogRead logic. It explains every decision so you learn as you build.",
        "This is not just code generation. It is a genuine engineering co-pilot that reasons about component compatibility, power requirements, signal integrity, and manufacturing constraints.",
      ],
    },
  },
};

// ============================================================
// Architecture (CinematicVision section)
// ============================================================

export interface ArchitectureConfig {
  sectionLabel: string;
  videoPath: string;
  title: string;
  description: string;
}

export const architectureConfig: ArchitectureConfig = {
  sectionLabel: "Our Infrastructure",
  videoPath: "",
  title: "THE CADMINT ECOSYSTEM.",
  description: "A single, high-performance platform that unifies learning, software design, and physical hardware creation. From digital intent to physical reality, seamlessly.",
};

// ============================================================
// Research (AlumniArchives section)
// ============================================================

export interface ResearchProject {
  title: string;
  year: string;
  discipline: string;
  image: string;
}

export interface ResearchConfig {
  sectionLabel: string;
  projects: ResearchProject[];
}

export const researchConfig: ResearchConfig = {
  sectionLabel: "Platform",
  projects: [
    { title: "CADmint Studio", year: "2026", discipline: "Design Suite", image: "images/research-1.jpg" },
    { title: "AI Co-Pilot", year: "2026", discipline: "Intelligence", image: "images/research-2.jpg" },
    { title: "Real-time Debug", year: "2025", discipline: "Telemetry", image: "images/research-3.jpg" },
    { title: "Component Lib", year: "2025", discipline: "Resources", image: "images/research-4.jpg" },
    { title: "Circuit Sim", year: "2025", discipline: "Simulation", image: "images/research-1.jpg" },
    { title: "PCB Layout", year: "2024", discipline: "Manufacturing", image: "images/research-2.jpg" },
    { title: "Code Editor", year: "2024", discipline: "Development", image: "images/research-3.jpg" },
    { title: "Collaboration", year: "2024", discipline: "Team Tools", image: "images/research-4.jpg" },
  ],
};

// ============================================================
// Footer
// ============================================================

export interface FooterLinkColumn {
  title: string;
  links: string[];
}

export interface FooterBottomLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  heading: string;
  columns: FooterLinkColumn[];
  copyright: string;
  bottomLinks: FooterBottomLink[];
}

export const footerConfig: FooterConfig = {
  heading: "HardJunc",
  columns: [
    {
      title: "Platform",
      links: ["CADmint Studio", "Our Story", "Careers"],
    },
    {
      title: "Contact",
      links: ["Email Us"],
    },
  ],
  copyright: "\u00A9 2026 HardJunc. THE PROTOTYPE POWERED BY YOU.",
  bottomLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};
