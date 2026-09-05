import React from "react";
import InnerHero from "@/components/global/InnerHero";

export default function AboutHero() {
  return (
    <InnerHero
      badgeText="Master Form Dies"
      title={
        <>
          Precision Engineering<br />
          <span className="text-[#A3E635]">& Custom Manufacturing</span>
        </>
      }
      bgImage="/about-page/hero.png"
      targetId="about-overview"
      buttonText="Explore Overview"
    />
  );
}

