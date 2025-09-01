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

import React, { useState, useEffect } from 'react'
import { useRouter } from "next/router";
import axios from "axios";

const Report = () => {

  const router = useRouter();
  const { id } = router.query;
  const fileName = id;

  const [reportId, setRportId] = useState("");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [featured, setFeatured] = useState(false);
  const [tabOneEditorState, setTabOneEditorState] = useState();
  const [tabTwoEditorState, setTabTwoEditorState] = useState();
  const [image, setImage] = useState < File | null > (null);
  const [preview, setPreview] = useState < string | null > (null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    axios.get(`/api/reports/${id}`)
      .then(res => {
        const report = res.data;
        setRportId(report.reportId || "");
        setTitle(report.title || "");
        setYear(report.year || "");
        setFeatured(!!report.featured);

        // Existing image preview
        if (report.file) setPreview(report.file);

        const htmlToDraft = require("html-to-draftjs").default;

        // Tab One
        if (report.tabOne) {         
          setTabOneEditorState(report.tabOne);
        }

        // Tab Two
        if (report.tabTwo) {          
          setTabTwoEditorState(report.tabTwo);
        }
      })
      .catch(() => setError("Failed to load report."));
  }, [fileName]);

  return (
    <>
      <HeroSection />
      <div className="px-4 py-4 md:px-12 md:py-10">
        <HeadSection reportTitle={title} year={year} id={reportId} />
        <div className="grid grid-cols-12 gap-6">
          {/* Left Column */}
          <div className="col-span-12 md:col-span-8 space-y-6">
            {/* <IntroSection />
            <DefinitionSection />
            <MarketOverviewSection />
            <KeyDriversSection />
            <ChallengesSection />
            <SegmentationSection /> */}
            <div dangerouslySetInnerHTML={{ __html: tabOneEditorState }} />
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
