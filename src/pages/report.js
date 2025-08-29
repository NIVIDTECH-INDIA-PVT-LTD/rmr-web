import {
  HeadSection,
  ChallengesSection,
  DefinitionSection,
  HeroSection,
  IndustryVerticalsSection,
  IntroSection,
  KeyDriversSection,
  MarketOverviewSection,
  SegmentationSection,
} from "@/components/sections/reportSection";

import React from 'react'

const Report = () => {
  return (
    <>
      <HeroSection />
      <div className="px-4 py-4 md:px-12 md:py-10">
        <HeadSection />
        <div className="grid grid-cols-12 gap-6">
          {/* Left Column */}
          <div className="col-span-12 md:col-span-8 space-y-6">
            <IntroSection />
            <DefinitionSection />
            <MarketOverviewSection />
            <KeyDriversSection/>
            <ChallengesSection />
            <SegmentationSection />
          </div>

          {/* Right Column */}
          <div className="col-span-12 md:col-span-4 h-full mt-8">
            <IndustryVerticalsSection />
          </div>
        </div>
      </div>
    </>
  )
}

export default Report
