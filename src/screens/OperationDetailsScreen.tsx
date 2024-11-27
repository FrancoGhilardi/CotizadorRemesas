import React, {memo} from 'react';
import {TemplateScreens} from '../components/templates';
import {DetailsBody, DetailsHeader} from '../components/organisms';

const OperationDetailsScreen: React.FC = () => {
  return (
    <TemplateScreens>
      <DetailsHeader />
      <DetailsBody />
    </TemplateScreens>
  );
};

export default memo(OperationDetailsScreen);
