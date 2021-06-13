import React, {FC} from "react";
import 'antd/dist/antd.css';
import './Layout.scss';
import {Layout} from 'antd';
import {Content, Header} from "antd/es/layout/layout";
import {Releases} from "../../components/contentLists/Releases";
import {Searchbox} from "../../components/searchbox/Searchbox";

export const IndexPage: FC = () => {
    return <Layout className="layout">
        <Header>
            <div className="logo">
                Explore Music
            </div>
            <div className="logo searchbox">
                <Searchbox/>
            </div>
        </Header>
        <Content style={{padding: '0 50px'}}>
            <div className="site-layout-content">
                <Releases/>
            </div>
        </Content>
    </Layout>
}