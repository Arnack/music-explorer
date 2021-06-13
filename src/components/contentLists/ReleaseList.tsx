import React, {FC} from "react";
import {useStore} from "effector-react";
import {fetchReleasesFx, searchStore} from "../../store/searchStore/searchStore";
import {Searchbox} from "../searchbox/Searchbox";
import {SplitList} from "../splitList/SplitList";
import {Loader} from "../loader/Loader";

interface IProps {
}

export const ReleaseList: FC<IProps> = ({}) => {
    const releases = useStore(searchStore).results;
    const pending = useStore(fetchReleasesFx.pending);

    if (pending) {
        return <Loader />
    }

    if (!releases || releases.length === 0) {
        return <div>
            <h1>Welcome to music explorer</h1>
            <p>There is nothing to display now, but you can search for releases</p>
        </div>
    }

    return <div>
        <SplitList />
    </div>
}