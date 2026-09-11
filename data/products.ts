export interface ProductFaq {
  q: string;
  a: string;
}

export interface Product {
  slug: string;
  image: string;
  images?: string[];
  tag: string;
  title: string;
  desc: string;
  fullDesc: string;
  features: string[];
  benefits?: string[];
  faqs?: ProductFaq[];
  meta_title?: string | null;
  meta_description?: string | null;
  meta_keywords?: string | null;
}

export const products: Product[] = [
  {
    slug: "multi-cavity-stamping-die-block",
    image: "/products/p1.jpg",
    tag: "PRECISION DIE MOULD",
    title: "Multi-Cavity Stamping Die Block",
    desc: "Heavy-duty hardened steel mould engineered for repetitive high-speed metal stamping cycles.",
    fullDesc: "Designed for high-speed manufacturing environments, this multi-cavity stamping die block is precision-engineered using premium hardened tool steel. It guarantees consistent, burr-free part production across millions of cycles, significantly reducing downtime and maintenance costs.",
    features: [
      "Manufactured from high-grade D2/H13 tool steel",
      "Optimized for high-tonnage mechanical presses",
      "Exceptional wear resistance and thermal stability",
      "Sub-micron precision wire EDM cut profiles"
    ]
  },
  {
    slug: "high-tolerance-progressive-mould",
    image: "/products/p2.jpg",
    tag: "FORMING MOULD",
    title: "High-Tolerance Progressive Mould",
    desc: "Multi-stage sequential forming die designed for complex automotive and industrial components.",
    fullDesc: "Our high-tolerance progressive moulds integrate blanking, coining, bending, and forming into a single continuous operation. Engineered specifically for complex automotive brackets and aerospace components, these dies ensure exact dimensional repetition.",
    features: [
      "Integrated multi-stage sequential forming",
      "Built-in sensor integration for fault detection",
      "Custom spring-loaded stripper plates",
      "Precision ground pilot pins for exact strip registration"
    ]
  },
  {
    slug: "profile-extrusion-die-cavity",
    image: "/products/p3.jpg",
    tag: "EXTRUSION DIE",
    title: "Profile Extrusion Die Cavity",
    desc: "Custom profile extrusion mould core crafted with sub-micron wire EDM cuts.",
    fullDesc: "Custom-crafted for aluminum and polymer extrusion, this profile die cavity is engineered using advanced computational fluid dynamics (CFD) to ensure balanced material flow. This eliminates warping and ensures a flawless surface finish on the extruded profile.",
    features: [
      "Balanced flow channel design",
      "Highly polished extrusion bearing surfaces",
      "Thermal-shock resistant construction",
      "Rapid-change modular die backings"
    ]
  },
  {
    slug: "tungsten-carbide-insert-die",
    image: "/products/p4.jpg",
    tag: "CARBIDE TOOLING",
    title: "Tungsten Carbide Insert Die",
    desc: "Extreme-wear resistant carbide die inserts built for abrasive high-tonnage pressing.",
    fullDesc: "When standard tool steel fails, our tungsten carbide insert dies deliver. Designed for extreme-wear applications involving abrasive materials or massive production runs, these inserts provide up to 10x the operational life of conventional steel dies.",
    features: [
      "Solid micro-grain tungsten carbide construction",
      "Shrink-fitted into hardened steel casings",
      "Diamond-polished wear surfaces",
      "Ideal for extreme high-volume production"
    ]
  },
  {
    slug: "precision-plastic-injection-mould",
    image: "/products/p5.jpg",
    tag: "INJECTION MOULD",
    title: "Precision Plastic Injection Mould",
    desc: "Balanced runner system with polished core and cavity surfaces for flawless surface finish.",
    fullDesc: "This high-precision injection mould features advanced conformal cooling channels and a perfectly balanced hot runner system. It guarantees rapid cycle times and absolutely flawless surface finishes for critical consumer and medical plastics.",
    features: [
      "Conformal cooling for rapid cycle times",
      "SPI A-1 diamond polished cavity surfaces",
      "Balanced hot/cold runner architecture",
      "Precision ejector pin alignment"
    ]
  },
  {
    slug: "deep-drawing-sheet-metal-die",
    image: "/products/p6.jpg",
    tag: "DRAWING DIE",
    title: "Deep Drawing Sheet Metal Die",
    desc: "Custom radiused draw die set for smooth metal flow without wrinkling or tearing.",
    fullDesc: "Engineered for complex deep drawing operations, this die set ensures smooth, continuous metal flow. By carefully calculating the draw ratio and incorporating precisely radiused edges, we eliminate material wrinkling and tearing.",
    features: [
      "Optimized blank holder pressure systems",
      "Friction-reducing surface coatings (TiN/DLC)",
      "Engineered draw radii for tear prevention",
      "High-strength cast iron or steel alloy base"
    ]
  },
  {
    slug: "hot-forging-die-block",
    image: "/products/p7.jpg",
    tag: "FORGING MOULD",
    title: "Hot Forging Die Block",
    desc: "Thermal shock resistant H13 tool steel die for heavy industrial hot forging operations.",
    fullDesc: "Subjected to extreme temperatures and massive impact forces, our hot forging die blocks are forged from premium H13 tool steel. They are heat-treated to exact specifications to resist thermal fatigue, checking, and plastic deformation.",
    features: [
      "Premium H13 hot-work tool steel",
      "Advanced nitrocarburizing surface treatments",
      "Engineered draft angles for easy part release",
      "Resistant to severe thermal shock"
    ]
  },
  {
    slug: "compound-blanking-piercing-die",
    image: "/products/p8.jpg",
    tag: "BLANKING DIE",
    title: "Compound Blanking & Piercing Die",
    desc: "Simultaneous blanking and hole punching die for precision sheet metal brackets.",
    fullDesc: "This compound die executes blanking and piercing in a single press stroke, ensuring perfect concentricity between the outer profile and internal holes. It's the ideal solution for high-accuracy washers, gears, and flat brackets.",
    features: [
      "Single-stroke simultaneous operation",
      "Guarantees absolute hole-to-edge concentricity",
      "Spring-loaded knockout mechanisms",
      "Precision guided die pillars"
    ]
  },
  {
    slug: "hardened-punch-die-assembly",
    image: "/products/p9.jpg",
    tag: "PUNCH TOOLING",
    title: "Hardened Punch & Die Assembly",
    desc: "Precision ground punch pins and matching die bushings for extended production life.",
    fullDesc: "Our punch and die assemblies provide the critical cutting clearance required for clean, burr-free holes. Manufactured with precision ground punch pins and perfectly matched die buttons, they ensure extremely tight tolerances over millions of hits.",
    features: [
      "M2 or powdered metal (PM) punch pins",
      "Exact cutting clearance calculations",
      "Quick-change retainer systems",
      "High-impact resistance"
    ]
  },
  {
    slug: "metrology-inspection-fixture",
    image: "/products/p10.jpg",
    tag: "GAUGE & FIXTURE",
    title: "Metrology Inspection Fixture",
    desc: "Custom checking gauge designed for rapid CMM verification of manufactured dies.",
    fullDesc: "Quality begins with accurate measurement. Our custom metrology inspection fixtures hold complex parts in precise orientation, allowing for rapid and repeatable CMM (Coordinate Measuring Machine) probing or visual Go/No-Go verification.",
    features: [
      "Aircraft-grade aluminum or steel construction",
      "Precision ground resting pads",
      "Integrated toggle clamps for secure holding",
      "CMM and laser-scanner compatible"
    ]
  },
  {
    slug: "custom-form-mould-core",
    image: "/products/p11.jpg",
    tag: "SPECIALTY MOULD",
    title: "Custom Form Mould Core",
    desc: "Tailored industrial mould core produced according to exact client CAD specifications.",
    fullDesc: "When standard geometries don't apply, our specialty mould cores are custom-machined directly from client CAD data. Utilizing 5-axis CNC machining, we can produce highly complex organic shapes and undercuts for specialized industries.",
    features: [
      "Direct CAD-to-CAM 5-axis machining",
      "Complex organic geometry support",
      "High-precision 3D surfacing",
      "Custom venting and ejector configurations"
    ]
  },
  {
    slug: "precision-tool-assembly-component",
    image: "/products/p1.jpg",
    tag: "ASSEMBLY TOOLING",
    title: "Precision Tool Assembly Component",
    desc: "Custom fitted die tooling component with micro-finished surfaces for tight tolerances.",
    fullDesc: "The backbone of any complex die set, our precision tool assembly components are ground to sub-micron tolerances. These components ensure that multi-stage dies align perfectly during every single press stroke, preventing catastrophic tooling crashes.",
    features: [
      "Sub-micron precision grinding",
      "Optical comparator verified geometries",
      "Matched sets for perfect alignment",
      "Stress-relieved material bases"
    ]
  }
];
