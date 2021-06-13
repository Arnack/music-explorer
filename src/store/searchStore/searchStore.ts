import {useEvent} from "effector-react";
import {createEffect, createEvent, createStore} from "effector";
import {ReleaseAPI} from "../../services/api/releaseAPI";

export const updateSearchText = createEvent<string>("search text updated");
export const fetchReleasesFx = createEffect(ReleaseAPI.getReleases)

export const searchStore = createStore({
    pagination: {
        page: 1,
        pages: 0,
        per_page: 5,
        items: 0
    },
    searchText: "",
    results: []
})
    .on(fetchReleasesFx.doneData, (state, result) => {
        return {...result.data, searchText: ""}
    })
    .on(updateSearchText, (state, payload) => {
        return {...state, searchText: payload}
    })