import React, {useState} from "react";
import { Card, Typography } from "antd";
import BrandHeader from "./BrandHeader";
import LoginForm from "./LoginForm";
import SignUpLinks from "./SignUpLinks";
import Footer from "./Footer";

const { Title } = Typography;
const Login: React.FC = () => {
    const [loading, setLoading] = useState(false);

    const handleLogin = async (values: any) => {
        setLoading(true);
        try {
            console.log("Login attempt:", values);
        }finally{
            setLoading(false);
        }
    }
    return (
        <div className="flex justify-center align-center">

            <Card className="shadow-lg w-[30%]">
                <BrandHeader title="Start Up Hub" subtitle="Eviare"/>
                <div className="text-center mb-6">
                    <Title level={3} className="!text-gray-800">
                        Sign In to continue
                    </Title>
                </div>

                <LoginForm onSubmit={handleLogin} loading={loading} />

                <SignUpLinks
                    onInvestor={() => console.log("Investor signup")}
                    onEntrepreneur={() => console.log("Entrepreneur signup")}
                    onMentor={() => console.log("Mentor signup")}
                />

                <Footer />
            </Card>
        </div>
    )
}

export default Login ;