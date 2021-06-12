import React, {useState} from "react";
import {Input} from "antd";
import {fetchReleasesFx} from "../../store/searchStore/searchStore";

export const Searchbox = () => {
    const [searchText, setSearchText] = useState("");
    return <>
            <Input placeholder="Search"
                   onChange={(e) => setSearchText(e.target.value)}
                   onPressEnter={() => fetchReleasesFx(searchText)}
            />
        </>
}