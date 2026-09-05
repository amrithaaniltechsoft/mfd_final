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
      bgImage="/contact-page/hero4.png"
    />
  );
}

