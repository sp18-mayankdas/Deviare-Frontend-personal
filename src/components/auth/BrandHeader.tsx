import React from "react";
import { Typography } from "antd";

const { Title, Text } = Typography;

interface BrandHeaderProps{
    title: string;
    subtitle?: string;
}

const BrandHeader: React.FC<BrandHeaderProps> = ({title , subtitle}) => {
    return(
        <div className="text-center">
           {title && <Title level= {2} className="text-lg">{title}</Title>}
           {subtitle && <Text className="text-sm text-gray-500">{subtitle}</Text>}
        </div>
    )
}

export default BrandHeader;