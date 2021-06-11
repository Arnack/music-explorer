import React, {FC, useState} from "react";
import {Tabs, Table, Radio, Divider} from 'antd';

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
            return <img style={{height: '20px', width: '20px', backgroundColor: 'gray'}} src={imgUrl}/>
        }

        return <div style={{height: '20px', width: '20px', backgroundColor: 'gray'}}/>
    }
}, {
    title: 'Name',
    dataIndex: 'title'
}, {
    title: 'Genres',
    dataIndex: 'genre',
    render: (genres: string[]) => genres.join(', ')
},  {
    title: 'Labels',
    dataIndex: 'label',
    render: (labels: string[]) => labels.join(', ')
}, {
    title: 'Year',
    dataIndex: 'year'
},
]

export const ContentLists: FC<IProps> = ({releases}) => {

    return <div>
        <div className={"table-wrapper"} style={{width: '50%'}}>
            <table>
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Genres</th>
                    <th>Labels</th>
                    <th>Year</th>
                </tr>
                </thead>
                <tbody>
                {
                    releases.map((release: any) => <tr className={"single-release"}>
                        <td>
                            {
                                release.cover_image ?
                                    <img style={{height: '50px', width: '50', backgroundColor: 'gray'}}
                                         src={release.cover_image}/> :
                                    <div style={{height: '50px', width: '50px', backgroundColor: 'gray'}}/>
                            }
                        </td>
                        <td>
                            {release.title}
                        </td>
                        <td>
                            {release.genre.join(", ")}
                        </td>
                        <td>
                            {release.label.join(", ")}
                        </td>
                        <td>
                            {release.year}
                        </td>
                    </tr>)
                }
                </tbody>
            </table>
        </div>



    </div>
}