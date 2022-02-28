import { useReducer } from "react";

import CampaignContext from "./campaign-context";

const lastItems = localStorage.getItem("campaingitems");

const defaultCampaignState = {
  items: lastItems && lastItems.length > 0 ? JSON.parse(lastItems): [
    {
      name: "Test Whatsapp",
      region: "US",
      createdOn: 1559807714999,
      price: [
        {
          type: "1 Week",
          amt: "100"
        },
        {
          type: "1 Month",
          amt: "300"
        },
        {
          type: "6 Month",
          amt: "1200"
        },
        {
          type: "1 Year",
          amt: "2000"
        }
      ],
      csv: "Some CSV link for Whatsapp",
      report: "Some report link for Whatsapp",
      image_url: "image1.png",
    },
    {
      name: "Super Jewels Quest",
      region: "CA, FR",
      createdOn: 1559806715124,
      price: [
        {
          type: "1 Week",
          amt: "100"
        },
        {
          type: "1 Month",
          amt: "300"
        },
        {
          type: "6 Month",
          amt: "1200"
        },
        {
          type: "1 Year",
          amt: "2000"
        }
      ],
      csv: "Some CSV link for Super Jewels Quest",
      report: "Some report link for Super Jewels Ques",
      image_url: "image2.png",
    },
    {
      name: "Mole Slayer",
      region: "FR",
      createdOn: 1559806711124,
      price: [
        {
          type: "1 Week",
          amt: "100"
        },
        {
          type: "1 Month",
          amt: "300"
        },
        {
          type: "6 Month",
          amt: "1200"
        },
        {
          type: "1 Year",
          amt: "2000"
        }
      ],
      csv: "Some CSV link for Mole Slayer",
      report: "Some report link for Mole Slayer",
      image_url: "image3.png",
    },
    {
      name: "Mancala Mix",
      region: "JP",
      createdOn: 1645868284288,
      price: [
        {
          type: "1 Week",
          amt: "100"
        },
        {
          type: "1 Month",
          amt: "300"
        },
        {
          type: "6 Month",
          amt: "1200"
        },
        {
          type: "1 Year",
          amt: "2000"
        }
      ],
      csv: "Some CSV link for Mancala Mix",
      report: "Some report link for Mancala Mix",
      image_url: "image4.png",
    },
  ]
};

const campaignReducer = (state, action) => {
  if (action.type === "RESCHEDULE") {
    const existingCampaignIndex = state.items.findIndex(
      (item) => item.name === action.campaignId
    );
    const existingCampaignItem = state.items[existingCampaignIndex];
    let updatedItems;

    if (existingCampaignItem) {
      const updatedItem = {
        ...existingCampaignItem,
        createdOn: action.newDate,
      };
      updatedItems = [...state.items];
      updatedItems[existingCampaignIndex] = updatedItem;
    } else {
      updatedItems = [...state.items];
    }
    localStorage.setItem("campaingitems", JSON.stringify(updatedItems));

    return {
      items: updatedItems,
    };
  }

  return defaultCampaignState;
};

const CampaignProvider = (props) => {

  const [campaignState, dispatchCampaignAction] = useReducer(
    campaignReducer,
    defaultCampaignState
  );

  const rescheduleCampaign = (campaignId, newDate) => {
    dispatchCampaignAction({
      type: "RESCHEDULE",
      campaignId: campaignId,
      newDate: newDate,
    });
  };

  const campaignContext = {
    items: campaignState.items,
    reschedule: rescheduleCampaign,
  };

  return (
    <CampaignContext.Provider value={campaignContext}>
      {props.children}
    </CampaignContext.Provider>
  );
};

export default CampaignProvider;
