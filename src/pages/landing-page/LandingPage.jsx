
import React from 'react';

// Importações das seções
import Header from './header/Header.jsx';
import HeroSection from './hero-section/HeroSection.jsx';
import Categories from './categories/Categories.jsx';
import HowItWorks from './how-it-works/HowItWorks.jsx';
import OurStory from './our-story/OurStory.jsx';
import ServicesAreas from './services-areas/ServiceAreas.jsx';
import CustomerReviews from './customer-reviews/CustumerReviews.jsx';
import ContactUs from './contact-us/ContactUs.jsx';
import Footer from './footer/Footer.jsx';

const LandingPage = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <Categories />
            <HowItWorks />
            <OurStory />
            <ServicesAreas />
            <CustomerReviews />
            <ContactUs />
            <Footer />
        </>
    );
};

export default LandingPage;
