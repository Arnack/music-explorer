import React, {useState} from "react";
import {useStore} from "effector-react";
import {fetchReleasesFx, searchStore} from "../../store/searchStore/searchStore";
import './splitList.scss';
import {ListItem} from "./listItem/ListItem";
import {IRelease} from "../../model/release/Release";
import {ReleaseDescription} from "./releaseDescription/ReleaseDescription";
import { Pagination } from 'antd';
import {IPagination} from "../../model/pagination/Pagination";


export const SplitList = () => {
    const releases: IRelease[] = useStore(searchStore).results;
    const searchText: string = useStore(searchStore).searchText;
    const paginationInfo: IPagination = useStore(searchStore).pagination;
    const [selectedReleaseId, setSelectedReleaseId] = useState<number | null>(null);

    const handlePaginate = (newPage: number) => {
        console.log('np', newPage)
        fetchReleasesFx({ release: searchText, page: newPage });
    }

    return <div className={"split-list-wrapper"}>
        <div className="list-container">
            {releases.map((release) =>
                <ListItem release={release}
                          handleSelect={setSelectedReleaseId}
                          selected={release.id === selectedReleaseId} />)}

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

        <div className="item-details">
                <ReleaseDescription releaseId={selectedReleaseId} />
        </div>
    </div>
}