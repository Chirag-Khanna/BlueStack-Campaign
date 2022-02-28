import { useContext, useEffect } from "react";
import { useState } from "react/cjs/react.development";
import Card from "../UI/Card";
import CampaignContext from "../../store/campaign-context";
import CampaignItem from "../CampaignItem/CampaignItem";
import classes from "./TabCards.module.css";

const TabCards = (props) => {

    const [items, setItems] = useState([]);
    const campaignContext = useContext(CampaignContext);
    const allItems = campaignContext.items;
    const headings = ["date", "campaign", "view", "actions"];

    useEffect( () => {
        const currentDate = Date.now();
        // filtering based on current date. IF diff more than 1 day , parse it as upcoming, if 0 then current and if <0 then past
        // tab 0 meand upcoming, 1 current and 2 past
        const tabItems = allItems.filter( (item) => {
            const dateDiff = Math.ceil((item.createdOn - currentDate) / (1000 * 60 * 60 * 24));
            if (props.selectedTab === 0) {
                if (dateDiff > 0) {
                    return true
                }
                return false;
            } else if (props.selectedTab === 1) {
                if (dateDiff === 0) {
                    return true
                }
                return false;
            } else {
                if (dateDiff < 0) {
                    return true
                }
                return false;
            }
        });
        setItems(tabItems);
    }, [props.selectedTab, allItems]);

    const dateChangeHandler= (name, date) => {
        campaignContext.reschedule(name, date);
    };

    return (
        <Card>
            <div className={classes.headers + " " + classes['header-widths']}>
                {headings.map( heading => <p className={classes[heading]} key = {heading}> {heading} </p>)}
            </div>
            <div className={classes.content}>
                {items.map( item => <CampaignItem className={'header-widths'} item={item} key={item.name} onDateUpdate={(newDate) => dateChangeHandler(item.name, newDate)}></CampaignItem>)}
            </div>
        </Card>
    );
}

export default TabCards;