import {useEvent} from "effector-react";
import {createEffect, createEvent, createStore} from "effector";
import {SearchAPI} from "../../services/api/searchAPI";

const searchReleases = createEvent("search for releases");
export const fetchReleasesFx = createEffect(SearchAPI.getReleases)

export const searchStore = createStore({
    pagination: {
        page: 1,
        pages: 0,
        per_page: 5,
        items: 0
    },
    results: []
})
    .on(fetchReleasesFx.doneData, (state, result) => {
        console.log('fx res', result.data);
        return result.data
    })