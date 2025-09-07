import React from "react";
import { Typography, Space } from "antd";

const {Text, Link} = Typography;

const Footer : React.FC = () => {
    return (
        <div  className="mt-8 text-center">
            <Text className="text-xs text-gray-400 block mb-2"> © 2022 Deviare. All Rights Reserved.</Text>
            <Space split = {<span className="text-xs text-gray-400">and</span>}>
                <Link className="text-xs text-gray-400 hover:text-gray-600">Term of Service</Link>
                <Link className="text-xs text-gray-400 hover:text-gray-600"> Privacy Policy </Link>
            </Space>
        </div>
    )
}

export default Footer;