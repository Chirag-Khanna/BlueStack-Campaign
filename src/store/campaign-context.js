import React from 'react';

const CampaignContext = React.createContext({
  items: [],
  reschedule: (itemName, newDate) => {}
});

export default CampaignContext;