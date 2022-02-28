import widthClasses from "../Campaigns/TabCards.module.css";
import classes from "./CampaignItem.module.css";
import priceImage from "../../assets/price.svg";
import fileImage from "../../assets/file.svg";
import reportImage from "../../assets/report.svg";
import calendarImage from "../../assets/calendar.svg";
import { useState } from "react";
import PriceCampaign from "./PriceCampaign";
import Calendar from "./Calendar";

// finding time diff in comparison to the current date. IF diff more than 1 day , parse it as upcoming, if 0 then current and if <0 then past
const getDiff = (date) => {
  const dateDiff = Math.ceil((date - Date.now()) / (1000 * 60 * 60 * 24));
  return dateDiff <= 0
    ? Math.abs(dateDiff) + " days Ago"
    : dateDiff + " days Ahead";
};

const CampaignItem = (props) => {
    const [priceModalShown, setPriceModalShown] = useState(false);
    const [dateModalShown, setDateModalShown] = useState(false);

    const closePriceModal = () => {
        setPriceModalShown(false);
    };

    const showPriceModal = () => {
        setPriceModalShown(true);
    }

    const closeDateModal = () => {
        setDateModalShown(false);
    };

    const showDateModal = () => {
        setDateModalShown(true);
    }

    const updateDateHandler = (newDate) => {
        props.onDateUpdate(newDate);
    }

    return (
    <div
        className={classes["campaign-item"] + " " + widthClasses["header-widths"]}
    >
        <div className={classes.date + " " + widthClasses["date"]}>
        <p className={classes.absdate}>{new Date(props.item.createdOn).toDateString()}</p>
        <p className={classes.reldate}>{getDiff(props.item.createdOn)}</p>
        </div>
        <div className={classes.campaign + " " + widthClasses["campaign"]}>
        <div className={classes.campaignImg}>
            <img src={process.env.PUBLIC_URL + props.item.image_url} alt="Not available"></img>
        </div>
        <div className={classes.campaignDesc}>
            <div className={classes.campaignName}>{props.item.name}</div>
            <div className={classes.campaignRegion}>{props.item.region}</div>
        </div>
        </div>
        <div className={classes.view + " " + widthClasses["view"]}>
        <div className={classes.action} onClick={showPriceModal}>
            <img src={priceImage} alt="price icon"></img>
            View Pricing
        </div>
        </div>
        <div className={classes.actions + " " + widthClasses["actions"]}>
            <div className={classes.action}>
                <img src={fileImage} alt="file icon"></img>
                CSV
            </div>
            <div className={classes.action}>
                <img src={reportImage} alt="report icon"></img>
                Report
            </div>
           <div className={classes.action} onClick={showDateModal}>
                <img src={calendarImage} alt="schedule icon"></img>
                Schedule Again
            </div>
        </div>
        {priceModalShown && <PriceCampaign onClose={closePriceModal} item={props.item}></PriceCampaign>}
        {dateModalShown && <Calendar date={props.item.createdOn} onDateChange={updateDateHandler} onClose={closeDateModal}></Calendar>}
    </div>
    );
};

export default CampaignItem;
