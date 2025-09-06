import { Button } from "@components/button";
// import { MoveRight } from "lucide-react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export const SignIn = () => {
  return (
    <section className="bg-gray-400/20 max-w-3xl mx-auto rounded-md shadow-2xl p-20 m-20">
      <Link to="/send-otp">
        <Button type="primary" icon={<ArrowRightOutlined />} iconPosition="end">
          Continue Login using Phone Number
        </Button>
      </Link>
    </section>
  );
};
