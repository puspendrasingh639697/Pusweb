// import React from 'react';
// import LingoSetuPro from './Discover';
// import CreatorsSay from '../components/CreatorsSay';
// import GlobalReach from '../components/GlobalReach';
// import Global from '../components/Global';
// import ActiveCommunity from './ActiveCommunity';
// import ConnectionSection from './CommunityLive';
// import LiveDiscovery from './LiveDiscovery';
// import ContactSection from './ContactSection';
// import BenefitsSection from './BenefitsSection';
// import WhyChooseLingoSetu from './WhyChooseLingoSetu';
// import LingoSetuLanding from './LingoSetuLanding';
// import UserTestimonials from '../components/UserTestimonials';
// import FAQSection from '../hooks/FAQSection';
// import ContactFooter from '../components/ContactFooter';
// import FeaturesSection from './FeaturesSection';
// import HeroSection from './HeroSection';
// import ServicesSection from './LingoSetuLanding';
// import Footer from './Footer';
// import CertificationCards from './CertificationCards';
// // import WhoDashboard3D from '../utils/Dashboard';
// // import LingoSetuFinalUI from './LingoSetuFinalUI';




// function HomepageFileAll() {
//   return (
//     <main className="bg-black w-full min-h-screen">
//       <LingoSetuPro />
//       <HeroSection/>
//       <CreatorsSay />
//       <Global/>
//       {/* <ActiveCommunity/> */}
//       <ConnectionSection/>
//       <LiveDiscovery/>
//       {/* <ContactSection/> */}
//       {/* <BenefitsSection/> */}
      
//       <GlobalReach/>

//       <ServicesSection/>
      
//       <UserTestimonials/>
//       <WhyChooseLingoSetu/>
//       <ContactFooter/>
//       <FAQSection/>
      
//       <FeaturesSection/>
//       <Footer/>
//       {/* <CertificationCards/> */}
//       {/* <LingoSetuFinalUI/> */}
//       {/* <WhoDashboard3D/> */}
      
      
//     </main>
//   );
// }

// export default HomepageFileAll;

import React from 'react';
import LingoSetuPro from './Discover';
import CreatorsSay from '../components/CreatorsSay';
import GlobalReach from '../components/GlobalReach';
import Global from '../components/Global';
import ConnectionSection from './CommunityLive';
import LiveDiscovery from './LiveDiscovery';
import WhyChooseLingoSetu from './WhyChooseLingoSetu';
import UserTestimonials from '../components/UserTestimonials';
import FAQSection from '../hooks/FAQSection';
import ContactFooter from '../components/ContactFooter';
import FeaturesSection from './FeaturesSection';
import HeroSection from './HeroSection';
import ServicesSection from './LingoSetuLanding';
import BlogPages from './BlogPages';

function HomepageFileAll() {
  return (
    <main className="bg-black w-full min-h-screen">

      <LingoSetuPro />
      <HeroSection />
      <CreatorsSay />
      <Global />
      <ConnectionSection />
      <LiveDiscovery />
      {/* <GlobalReach /> */}
      <ServicesSection />
      <UserTestimonials />
      <WhyChooseLingoSetu />
      <ContactFooter />
      <FAQSection />
      <FeaturesSection />
      

    </main>
  );
}

export default HomepageFileAll;