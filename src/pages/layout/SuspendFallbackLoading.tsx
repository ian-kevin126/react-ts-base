import {FC} from "react";
import {Spin, Alert} from "antd";
import React from "react";
import "./index.less";

interface FallbackMessageProps {
    message: string

    description?: string
}

const SuspendFallbackLoading: FC<FallbackMessageProps> = ({message, description}) => {
    return (<div className="loading__wrapper">
        <Spin size="large" className="loading" />
    </div>)
}

export default SuspendFallbackLoading
