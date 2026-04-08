import React from "react";

import HeroSection from "./hero/HeroSection";
import CardSection from "./card/CardSection";
import GlobalPresence from "./globalPresence/GlobalPresenceSection";
import TeamSection from "./teamSection/TeamSection";
import StatusCheckCTA from "./statusCheck/StatusCheckCTA";
import TrustedPartnersSection from "./trustedPartner/TrustedPartnersSection";
import ChoiseUsSection from "./choiseUs/ChoiseUsSection";
import ImageSliderSection from "./imageSlider/ImageSliderSection";
import FeatureHighlightSection from "./featureHighlight/FeatureHighlighSection";
import KeyFeatureSection from "./keyFeature/KeyFeatureSection";
import JobCard from "./jobSection/JobCard";
import FeaturesSection from "./feature/FeatureSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <CardSection />
      <FeaturesSection />
      <GlobalPresence />
      <JobCard />
      <KeyFeatureSection />
      <FeatureHighlightSection />
      <ImageSliderSection />
      <ChoiseUsSection />
      <TrustedPartnersSection />
      <StatusCheckCTA />
      <TeamSection />
    </>
  );
};
export default Home;
