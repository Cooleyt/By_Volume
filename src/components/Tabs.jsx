import React, { useState } from 'react';

const Tabs = (props) => {
    const {index, label, tabs, setTabs} = props;

    const handleClick = () => {
        const copiedTabs = [...tabs]; 
        copiedTabs.map(eachTab => eachTab.isSelected = false);

        const copiedTab = {...tabs[index]}
        copiedTab.isSelected = true;

        copiedTabs[index] = copiedTab;

        setTabs(copiedTabs);
    }

    return(
        <div className="tab">
            <button onClick={handleClick}>{ label }</button>
        </div>
    );
}

export default Tabs;