import React, {FC, useState} from "react";
import 'antd/dist/antd.css';
import './index.css';
import { Input, Space } from 'antd';
import { Layout, Breadcrumb } from 'antd';
import { Content, Footer, Header } from "antd/es/layout/layout";
import {SearchAPI} from "../../services/api/searchAPI";
import {ReleaseList} from "../../components/contentLists/ReleaseList";
import {Searchbox} from "../../components/searchbox/Searchbox";


const { Search } = Input;

export const IndexPage:FC = () => {
    const [searchText, setSearchText] = useState("");
    const [releases, setReleases] = useState<any[]>([]);

    // items: 3446
    // page: 1
    // pages: 173
    // per_page: 20
    const [paginationInfo, setPaginationInfo] = useState(undefined);


    const search = () => {
        SearchAPI.getReleases(searchText)
            .then((res) => {
                setReleases(res.data.results);
                setPaginationInfo(res.data.pagination);
            })


        // SearchAPI.getTracks(searchText)
        //     .then((res) => {
        //         console.log('res', res)
        //     })
    }

    return <Layout className="layout">
        <Header>
            <div className="logo">
                Explore Music
            </div>
            <div className="logo searchbox">
                <Searchbox />
            </div>
        </Header>
        <Content style={{ padding: '0 50px' }}>
            <div className="site-layout-content">
                <ReleaseList releases={releases} />
            </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
}