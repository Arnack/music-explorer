import React, {FC, useState} from "react";
import {Tabs, Table, Radio, Divider, Spin, Tooltip} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import {useStore} from "effector-react";
import {fetchReleasesFx, searchStore} from "../../store/searchStore/searchStore";
import {Searchbox} from "../searchbox/Searchbox";

const {TabPane} = Tabs;


interface IProps {
    // ArtistsInfo: any;
    // TracksInfo: any;
    releases: any[];
}


//cover_image, title, year, genre[], label[]
const columns = [{
    title: '',
    dataIndex: 'cover_image',
    render: (imgUrl: string) => {
        if (imgUrl) {
            return <img style={{height: '50px', width: '50px', backgroundColor: 'gray'}} src={imgUrl}/>
        }

        return <div style={{height: '50px', width: '50px', backgroundColor: 'gray'}}/>
    }
}, {
    title: 'Name',
    dataIndex: 'title',
    ellipsis: {
        showTitle: false,
    },
}, {
    title: 'Genres',
    dataIndex: 'genre',
    render: (genres: string[]) => genres.join(', '),
    ellipsis: {
        showTitle: false,
    },
},  {
    title: 'Labels',
    dataIndex: 'label',
    render: (labels: string[]) => labels.join(', '),
    ellipsis: {
        showTitle: false,
    },
}, {
    title: 'Year',
    dataIndex: 'year'
},
]
const loadingIcon = <LoadingOutlined style={{ fontSize: 40 }} spin />;


export const ReleaseList: FC<IProps> = ({}) => {

    const releases = useStore(searchStore).results;
    const pending = useStore(fetchReleasesFx.pending);
    const [] = useState()

    const expandable = { expandedRowRender: () => <p>Fuck yeah!</p> };

    if (pending) {
        return <div>
            <Spin indicator={loadingIcon} />
            <span>Loading...</span>
        </div>
    }

    if (!releases || releases.length === 0) {
        return <div>
            <h1>Search for releases</h1>
            <Searchbox />
        </div>
    }

    return <div>
        <div className={"table-wrapper"}>

            <Table expandable={expandable} dataSource={releases} columns={columns} />

            {/*<table>*/}
            {/*    <thead>*/}
            {/*    <tr>*/}
            {/*        <th></th>*/}
            {/*        <th>Name</th>*/}
            {/*        <th>Genres</th>*/}
            {/*        <th>Labels</th>*/}
            {/*        <th>Year</th>*/}
            {/*    </tr>*/}
            {/*    </thead>*/}
            {/*    <tbody>*/}
            {/*    {*/}
            {/*        releases.map((release: any) =>*/}
            {/*            <tr className={"single-release"}*/}
            {/*                style={{*/}
            {/*                    // background-color: "rgba(0, 0, 0 , .3)",*/}
            {/*                    // backgroundImage: `url(${release.cover_image})`*/}
            {/*                }}*/}
            {/*            >*/}
            {/*            <td>*/}
            {/*                {*/}
            {/*                    release.cover_image ?*/}
            {/*                        <img style={{height: '50px', width: '50', backgroundColor: 'gray'}}*/}
            {/*                             src={release.cover_image}/> :*/}
            {/*                        <div style={{height: '50px', width: '50px', backgroundColor: 'gray'}}/>*/}
            {/*                }*/}
            {/*            </td>*/}
            {/*            <td>*/}
            {/*                {release.title}*/}
            {/*            </td>*/}
            {/*            <td>*/}
            {/*                {release.genre.join(", ")}*/}
            {/*            </td>*/}
            {/*            <td>*/}
            {/*                {release.label.join(", ")}*/}
            {/*            </td>*/}
            {/*            <td>*/}
            {/*                {release.year}*/}
            {/*            </td>*/}
            {/*        </tr>)*/}
            {/*    }*/}
            {/*    </tbody>*/}
            {/*</table>*/}
        </div>



    </div>
}