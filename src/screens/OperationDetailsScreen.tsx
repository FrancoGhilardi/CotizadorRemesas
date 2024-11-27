import React, {memo} from 'react';
import {TemplateScreens} from '../components/templates';
import {DetailsHeader} from '../components/organisms';

const OperationDetailsScreen: React.FC = () => {
  return (
    <TemplateScreens>
      <DetailsHeader />
    </TemplateScreens>
  );
};

export default memo(OperationDetailsScreen);
