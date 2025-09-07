import React from "react";
import { Button, Form, Input,Typography } from "antd";

const { Text , Link} = Typography;

interface LoginFormData {
  email: string;
  password: string;
}

interface LoginFormProps {
  onSubmit: (values: LoginFormData) => void;
  loading?: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, loading = false }) => {
  const [form] = Form.useForm<LoginFormData>();

  const handleFinish = (values: LoginFormData) => {
    onSubmit(values);
  };

  return (
    <div>
      <Form
        form={form}
        name="loginForm"
        onFinish={handleFinish}
        layout="vertical"
        size="large"
        autoComplete="off"
      >
        <Form.Item
          label={<Text strong>Email</Text>}
          name="email"
          rules={[
            { required: false, message: "Please enter your email!" },
            { type: "email", message: "Invalid email address!" },
          ]}
        >
          <Input placeholder="email@domain.com" />
        </Form.Item>

        <Form.Item 
          label= {<Text strong className="text-blue-700">Password</Text>}
          name = "password"
          rules = {[{ required: false, message: "Please enter your password!" }]} >
            <Input.Password/>
        </Form.Item>

        <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} style={{ backgroundColor: "#001A72", borderColor: "#051343" }} className="w-full h-12 font-semibold bg-[#051343]">
                Register
            </Button>
        </Form.Item>

        <div>
            <Link className="text-sm font-semibold !text-gray-400 hover:text-blue-600 right-0">
                Forget password?
            </Link>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
