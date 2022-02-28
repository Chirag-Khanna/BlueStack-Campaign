import { useState } from "react/cjs/react.development";
import classes from "./Campaigns.module.css";
import TabButtons from "./TabButtons";
import TabCards from "./TabCards";

const Campaigns = (props) => {
    const tabHeadings = ["Upcoming Campaigns", "Live Campaigns", "Past Campaigns"];
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);
    
    const tabChangeHandler= (tabIndex) => {
        setSelectedTabIndex(tabIndex);
        console.log(tabIndex);
    };

    return (
        <div className={classes['tab-container']}>
            <TabButtons tabHeadings= {tabHeadings} tabChangeHandler={tabChangeHandler}></TabButtons>
            <div className={classes['tab-content']}>
                <TabCards tabs={tabHeadings} selectedTab={selectedTabIndex} ></TabCards>
            </div>
        </div>
    );
}

export default Campaigns;
