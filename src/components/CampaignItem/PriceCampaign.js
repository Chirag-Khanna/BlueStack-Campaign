import Modal from "../UI/Modal";
import classes from "./PriceCampaign.module.css";


const PriceCampaign = (props) => {

    return (
        <Modal onClose={props.onClose}>
            <div className={classes.campaignInfo}>
                <img className={classes.campaignImage} src={props.item.image_url} alt={"campaign"}></img>
                <div className={classes.campaignDesc}>
                    <div className={classes.campaignName}>{props.item.name}</div>
                    <div className={classes.campaignRegion}>{props.item.region}</div>
                </div>
            </div>
            <h2 className={classes.heading}>
                Pricing
            </h2>
            <div className={classes.priceList}>
                { props.item.price.map((price) => <div className = {classes.priceContainer} key={price.type}>
                        <div className={classes.priceType}> {price.type} </div>
                        <div className={classes.priceAmt}> {"$ " + price.amt} </div>
                    </div>)}
            </div>
            <div className={classes.closeButtonContainer}>
                <button className={classes.closeButton} onClick={props.onClose}> Close </button>
            </div>
        </Modal>
    );
};

export default PriceCampaign