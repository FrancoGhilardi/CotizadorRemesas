import React, {memo} from 'react';
import {Body, Footer, Header} from '../components/organisms';
import {TemplateScreens} from '../components/templates';

const HomeScreen: React.FC = () => {
  return (
    <TemplateScreens>
      <Header />
      <Body />
      <Footer />
    </TemplateScreens>
  );
};

export default memo(HomeScreen);
