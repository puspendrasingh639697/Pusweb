import React from 'react';
import LingoSetuPro from './Discover';
import CreatorsSay from '../components/CreatorsSay';
import GlobalReach from '../components/GlobalReach';
import Global from '../components/Global';
import ActiveCommunity from './ActiveCommunity';
import ConnectionSection from './CommunityLive';
import LiveDiscovery from './LiveDiscovery';
import ContactSection from './ContactSection';
import BenefitsSection from './BenefitsSection';
import WhyChooseLingoSetu from './WhyChooseLingoSetu';
import LingoSetuLanding from './LingoSetuLanding';
import UserTestimonials from '../components/UserTestimonials';
import FAQSection from '../hooks/FAQSection';
import ContactFooter from '../components/ContactFooter';
import FeaturesSection from './FeaturesSection';
// import WhoDashboard3D from '../utils/Dashboard';
// import LingoSetuFinalUI from './LingoSetuFinalUI';



function HomepageFileAll() {
  return (
    <main className="bg-black w-full min-h-screen">
      <LingoSetuPro />
      <CreatorsSay />
      <GlobalReach/>
      <Global/>
      <ActiveCommunity/>
      <ConnectionSection/>
      <LiveDiscovery/>
      <ContactSection/>
      <BenefitsSection/>
      <WhyChooseLingoSetu/>
      <LingoSetuLanding/>
      <UserTestimonials/>
      <FAQSection/>
      {/* <ContactFooter/> */}
      <FeaturesSection/>
      {/* <LingoSetuFinalUI/> */}
      {/* <WhoDashboard3D/> */}
      
      
    </main>
  );
}

export default HomepageFileAll;