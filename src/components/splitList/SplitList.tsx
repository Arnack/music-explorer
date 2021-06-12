import React from "react";
import {useStore} from "effector-react";
import {searchStore} from "../../store/searchStore/searchStore";
import './splitList.scss';

export const SplitList = () => {

    const releases = useStore(searchStore).results;

    return <div className={"split-list-wrapper"}>
        <div className="list-container">

        </div>

        <div className="item-details">

        </div>
    </div>
}