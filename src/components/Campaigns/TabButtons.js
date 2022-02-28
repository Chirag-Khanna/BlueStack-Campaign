import { useEffect, useState } from "react";
import classes from "./TabButtons.module.css"

const TabButtons = (props) => {
    const [buttons, setButtons] = useState([]);
    const [selectedBtn, setSelectedBtn] = useState(0);

    useEffect(() => {
        const tabBtns = props.tabHeadings.map((button, index) => {
            return {
                text: button,
                selected: selectedBtn === index ? true : false
            }
        })
        setButtons(tabBtns);
    }, [props.tabHeadings, selectedBtn])
    
    const btnClickHandler= (btnIndex) => {
        setSelectedBtn(btnIndex);
        props.tabChangeHandler(btnIndex);
    };
    return (
        <div className={classes.tabbtngrp}>
            {buttons.map( (button, index) => <button className={classes.tabbtn + (button.selected ? " "+classes.selected : "")} onClick={() => btnClickHandler(index)} key={button.text}> {button.text} </button>)}
        </div>
    );
}

export default TabButtons