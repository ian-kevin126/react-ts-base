import {FC} from "react";
import {Spin, Alert} from "antd";
import React from "react";
import "./index.less";

const SuspendFallbackLoading: FC = () => {
    return (<div className="loading__wrapper">
        <Spin size="large" className="loading" />
    </div>)
}

export default SuspendFallbackLoading
