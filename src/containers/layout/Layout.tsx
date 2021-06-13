import React, {FC, useState} from "react";
import 'antd/dist/antd.css';
import './index.css';
import { Input, Space } from 'antd';
import { Layout, Breadcrumb } from 'antd';
import { Content, Footer, Header } from "antd/es/layout/layout";
import {ReleaseAPI} from "../../services/api/releaseAPI";
import {ReleaseList} from "../../components/contentLists/ReleaseList";
import {Searchbox} from "../../components/searchbox/Searchbox";
export const IndexPage:FC = () => {

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
                <ReleaseList />
            </div>
        </Content>
        {/*<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>*/}
    </Layout>
}