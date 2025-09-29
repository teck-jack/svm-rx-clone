import React from 'react';
import Layout from '@/components/Layout/Layout';
import HeroSection from '@/components/Home/HeroSection';
import CategoriesSection from '@/components/Home/CategoriesSection';
import HealthConcernsSection from '@/components/Home/HealthConcernsSection';
import FeaturedProducts from '@/components/Home/FeaturedProducts';

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <CategoriesSection />
      <HealthConcernsSection />
      <FeaturedProducts />
    </Layout>
  );
};

export default Home;