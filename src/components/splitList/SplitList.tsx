import React, {FC, useState} from "react";
import {useStore} from "effector-react";
import {fetchReleasesFx, searchStore} from "../../store/searchStore/searchStore";
import {ListItem} from "./listItem/ListItem";
import {IRelease} from "../../model/release/Release";
import {ReleaseDescription} from "./releaseDescription/ReleaseDescription";
import {Pagination} from 'antd';
import {IPagination} from "../../model/pagination/Pagination";
import './splitList.scss';

export const SplitList: FC = () => {
    const releases: IRelease[] = useStore(searchStore).results;
    const searchText: string = useStore(searchStore).searchText;
    const paginationInfo: IPagination = useStore(searchStore).pagination;
    const [selectedReleaseId, setSelectedReleaseId] = useState<number | null>(null);
    const [isListMobHidden, setIsListMobHidden] = useState(false);

    const handlePaginate = (newPage: number) => {
        fetchReleasesFx({release: searchText, page: newPage});
    }

    const handleReleaseSelect = (releaseId: number) => {
        setSelectedReleaseId(releaseId);
        setIsListMobHidden(true);
    }

    return <div className={"split-list-wrapper"}>
        <div className={`list-container ${isListMobHidden ? 'mobileHidden' : ''}`}>
            {releases.map((release) =>
                <ListItem release={release}
                          handleSelect={handleReleaseSelect}
                          selected={release.id === selectedReleaseId}/>)}

            <div className="pagination-wrapper">
                <Pagination current={paginationInfo.page}
                            defaultPageSize={paginationInfo.per_page}
                            total={paginationInfo.pages}
                            hideOnSinglePage={true}
                            size={"small"}
                            responsive={true}
                            onChange={handlePaginate}
                            showSizeChanger={false}
                />
            </div>
        </div>

        <div className={`item-details ${isListMobHidden ? '' : 'mobileHidden'}`}>
            <ReleaseDescription goBackCallback={setIsListMobHidden} releaseId={selectedReleaseId}/>
        </div>
    </div>
}