import React from 'react';

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

            <section id="home">
                <HeroSection />
            </section>

            <section id="about">
                <OurStory />
            </section>

            <section id="services">
                <ServicesAreas />
            </section>

            <section id="categories">
                <Categories />
            </section>

            <section id="how-it-works">
                <HowItWorks />
            </section>

            <section id="reviews">
                <CustomerReviews />
            </section>

            <section id="contact">
                <ContactUs />
            </section>

            <Footer />
        </>
    );
};

export default LandingPage;
