export interface ServiceFaq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  image: string;
  tag: string;
  title: string;
  desc: string;
  fullDesc: string;
  features: string[];
  benefits?: string[];
  faqs?: ServiceFaq[];
}

export const services: Service[] = [
  {
    slug: "custom-die-manufacturing",
    image: "/products/p1.jpg",
    tag: "PRECISION DIE MAKING",
    title: "Custom Die & Mold Manufacturing",
    desc: "End-to-end design and precision fabrication of heavy-duty progressive, stamping, and extrusion dies.",
    fullDesc: "Our custom die manufacturing service delivers high-grade tool steel and carbide dies tailored for high-volume, high-precision industrial production. Leveraging 5-axis CNC machining, wire EDM cutting, and rigorous heat treatment protocols, we engineer custom dies built for extreme durability and zero-defect output.",
    features: [
      "5-Axis CNC & Sub-Micron Wire EDM Fabrication",
      "High-grade D2, H13, and Tungsten Carbide material selection",
      "Integrated multi-cavity and progressive die designs",
      "Strict quality control with full CMM inspection reports"
    ],
    benefits: [
      "Extends operational die life up to 5x over standard tooling",
      "Reduces production cycle times and material scrap",
      "Ensures exact component repeatability across millions of strokes"
    ],
    faqs: [
      {
        q: "What materials do you use for custom die making?",
        a: "We primary work with premium hardened tool steels such as D2, H13, S7, M2, as well as tungsten carbide inserts for high-wear areas."
      },
      {
        q: "What is your typical production lead time?",
        a: "Lead times range from 2 to 4 weeks depending on die complexity, CAD specifications, and heat treatment cycles."
      }
    ]
  },
  {
    slug: "tooling-and-mold-design",
    image: "/products/p2.jpg",
    tag: "CAD / CAM ENGINEERING",
    title: "Tooling & Mold Design Engineering",
    desc: "Advanced 3D CAD modeling, flow simulation, and stress analysis for flawless tool design.",
    fullDesc: "We transform technical product requirements into robust, high-performance mold and tool designs. Our engineering team utilizes state-of-the-art CAD/CAM software and finite element analysis (FEA) to optimize mold cooling, material flow, stress distribution, and ejection mechanisms prior to manufacturing.",
    features: [
      "3D Parametric CAD/CAM mold geometry creation",
      "Computational Fluid Dynamics (CFD) & thermal flow analysis",
      "Conformal cooling channel optimization",
      "DFM (Design for Manufacturability) feasibility reports"
    ],
    benefits: [
      "Eliminates costly tooling rework before physical production",
      "Optimizes cycle times through superior thermal management",
      "Ensures seamless integration with press automation"
    ],
    faqs: [
      {
        q: "Can you work from our existing CAD drawings?",
        a: "Yes, we accept all standard CAD formats including STEP, IGES, SolidWorks, AutoCAD, and DXF files."
      }
    ]
  },
  {
    slug: "cnc-precision-machining",
    image: "/products/p3.jpg",
    tag: "HIGH SPEED MACHINING",
    title: "Custom Metal Working & Precision Machining",
    desc: "High-speed CNC milling, turning, and grinding with sub-micron dimensional accuracy.",
    fullDesc: "Our precision machining facility handles complex metal working requirements for custom industrial components, die blocks, and tool inserts. Utilizing multi-axis CNC machines and precision surface grinders, we achieve sub-micron tolerances and mirror-like surface finishes.",
    features: [
      "Multi-Axis High-Speed CNC Milling & Turning",
      "Sub-micron precision surface grinding and honing",
      "Tight-tolerance machining (+/- 0.002 mm)",
      "Specialty alloy machining (Titanium, Inconel, Hardened Steels)"
    ],
    benefits: [
      "Superior surface finish quality (SPI A-1 diamond polish)",
      "High accuracy for critical aerospace and automotive components",
      "Rapid turnaround for both single units and production batches"
    ]
  },
  {
    slug: "rapid-component-prototyping",
    image: "/products/p4.jpg",
    tag: "RAPID PROTOTYPING",
    title: "Component Prototyping & Pilot Batches",
    desc: "Fast turn prototype fabrication to validate engineering designs before mass production.",
    fullDesc: "Accelerate your product development cycle with our rapid component prototyping service. We quickly translate technical concepts into physical, fully functional metal and alloy components for fit-testing, stress validation, and pre-production approval.",
    features: [
      "Rapid CNC prototyping within 3-5 business days",
      "Short-run pilot production (1 to 50 units)",
      "Comprehensive CMM dimensional validation",
      "Functional metal sample testing"
    ],
    benefits: [
      "Mitigates mass production risks through early testing",
      "Allows rapid design iterations and design refinements",
      "Saves cost by catching tolerance errors early"
    ]
  },
  {
    slug: "tooling-recondition-and-repair",
    image: "/products/p5.jpg",
    tag: "TOOL MAINTENANCE",
    title: "Die Maintenance, Sharpening & Repair",
    desc: "Complete die refurbishment, laser welding, surface recoating, and precision sharpening.",
    fullDesc: "Maximize the lifespan of your production dies with our professional maintenance and reconditioning services. We offer precision punch sharpening, laser clutter welding for damaged core surfaces, alignment checks, and wear-resistant PVD coating applications.",
    features: [
      "Laser micro-welding for cavity surface restoration",
      "Precision punch and die button resharpening",
      "Guide pin & bushing replacement and alignment",
      "TiN, CrN, and DLC surface recoating"
    ],
    benefits: [
      "Restores worn tools to original factory tolerances",
      "Significantly cheaper than purchasing brand new die sets",
      "Minimizes factory downtime with fast emergency repair turnaround"
    ]
  },
  {
    slug: "inspection-and-quality-assurance",
    image: "/products/p6.jpg",
    tag: "QUALITY METROLOGY",
    title: "Metrology & Quality Inspection Services",
    desc: "CMM probing, laser scanning, and Go/No-Go fixture checking for complete quality verification.",
    fullDesc: "We provide comprehensive quality assurance and reverse engineering inspection services using state-of-the-art Coordinate Measuring Machines (CMM) and optical 3D scanners. Every manufactured component is backed by certified metrology reports.",
    features: [
      "Automated CMM 3D coordinate measurement",
      "Non-contact optical and laser 3D scanning",
      "Custom Go/No-Go inspection fixture design",
      "First Article Inspection Reports (FAIR)"
    ],
    benefits: [
      "Complete transparency and compliance documentation",
      "Verifies complex 3D surface contours against CAD models",
      "Ensures zero defects in delivered tooling"
    ]
  },
  {
    slug: "wire-edm-and-sinker-cutting",
    image: "/products/p7.jpg",
    tag: "PRECISION EDM",
    title: "Wire EDM & Sinker Cutting Services",
    desc: "Sub-micron electrical discharge machining for tight-tolerance die pockets and hard alloy profiles.",
    fullDesc: "Our high-precision Wire EDM and Sinker EDM cutting services allow for intricate internal contours and sharp inside corners in hardened tool steels and tungsten carbide. Ideal for punch inserts, die button cavities, and delicate profile keyways.",
    features: [
      "Sub-micron Wire EDM cut accuracy (+/- 0.001 mm)",
      "High-precision CNC Sinker EDM with graphite and copper electrodes",
      "Deep cavity spark erosion for conductive alloys",
      "Micro-hole drilling for starter EDM holes"
    ],
    benefits: [
      "Machining without mechanical stress or thermal distortion",
      "Produces micro-fine surface finishes directly on hardened steel",
      "Capable of cutting extreme hard alloys up to 70 HRC"
    ]
  },
  {
    slug: "heat-treatment-and-surface-coating",
    image: "/products/p8.jpg",
    tag: "THERMAL TREATING",
    title: "Heat Treatment & Advanced Surface Coating",
    desc: "Controlled vacuum heat treatment, stress relieving, and hard PVD/DLC protective surface coatings.",
    fullDesc: "We offer complete thermal processing and surface engineering to optimize the wear resistance and toughness of custom dies. Services include vacuum hardening, cryo-treating, tempering, and thin-film PVD coatings such as TiN, CrN, and DLC.",
    features: [
      "Computerized vacuum heat treatment furnace processing",
      "Sub-zero cryogenic treatment for microstructural stability",
      "Physical Vapor Deposition (PVD) TiN / TiAlN coatings",
      "Plasma nitriding and surface case hardening"
    ],
    benefits: [
      "Drastically reduces surface friction and galling in metal forming",
      "Improves core toughness to withstand high-impact stamping cycles",
      "Prevents premature tool checking and thermal fatigue"
    ]
  }
];
