import React, {useState} from "react";
import {Input} from "antd";
import {fetchReleasesFx, searchStore, updateSearchText} from "../../store/searchStore/searchStore";
import {useStore} from "effector-react";

export const Searchbox = () => {
    const { searchText } = useStore(searchStore)
    return <>
            <Input placeholder="Search"
                   onChange={(e) => updateSearchText(e.target.value)}
                   onPressEnter={() => fetchReleasesFx({release: searchText, page: 1})}
            />
        </>
}