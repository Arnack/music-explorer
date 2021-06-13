import React, {FC} from "react";
import {Spin} from "antd";
import { LoadingOutlined } from '@ant-design/icons';

const loadingIcon = <LoadingOutlined style={{ fontSize: 40 }} spin />;

export const Loader: FC = () => {
    return <div>
        <Spin indicator={loadingIcon} />
        <span> Loading...</span>
    </div>
}