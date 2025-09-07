import React from "react";
import { Typography } from "antd";
const { Link } = Typography;

interface SignUpLinksProps {
    onInvestor?: () => void;
    onEntrepreneur?: () => void;
    onMentor?: () => void;
}

const SignUpLinks: React.FC<SignUpLinksProps> = ({ onInvestor, onEntrepreneur, onMentor }) => (
    <div className="text-center mt-6 space-y-2">
      <Link onClick={onInvestor} className="text-blue-600 hover:text-blue-700 block">
        Sign Up as an Investor
      </Link>
      <Link onClick={onEntrepreneur} className="text-blue-600 hover:text-blue-700 block">
        Sign Up as an Entrepreneur
      </Link>
      <Link onClick={onMentor} className="text-blue-600 hover:text-blue-700 block">
        Sign Up as a Mentor
      </Link>
    </div>
);
  
export default SignUpLinks;