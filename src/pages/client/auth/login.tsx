import type { FormProps } from "antd";
import { App, Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "@/services/api";
import "./login.scss";
import { useState } from "react";

type FieldType = {
	username: string;
	password: string;
};

const Login = () => {
	const [isSubmit, setIsSubmit] = useState(false);
	const { message } = App.useApp();
	const navigate = useNavigate();

	const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
		// console.log("Success:", values);
		setIsSubmit(true);
		const { username, password } = values;
		const res = await loginAPI(username, password);

		if (res.data) {
			// success
			message.success("Đăng nhập thành công");
			navigate("/");
		} else {
			// error
			message.error("Đăng nhập thất bại");
		}
		setIsSubmit(false);
	};

	// const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
	// 	errorInfo
	// ) => {
	// 	console.log("Failed:", errorInfo);
	// };

	return (
		<div className="login-page">
			<main className="main">
				<div className="container">
					<section className="wrapper">
						<div className="heading">
							<h1 className="text text-large">Đăng nhập</h1>
							{/* <Divider /> */}
						</div>
						<Form
							name="basic"
							labelCol={{ span: 10 }}
							wrapperCol={{ span: 25 }}
							layout="vertical"
							style={{ maxWidth: 600 }}
							initialValues={{ remember: true }}
							onFinish={onFinish}
							// onFinishFailed={onFinishFailed}
							autoComplete="off"
						>
							<Form.Item<FieldType>
								label="Họ tên"
								name="username"
								rules={[
									{
										required: true,
										message: "Please input your username!",
									},
								]}
							>
								<Input />
							</Form.Item>

							<Form.Item<FieldType>
								label="Mật khẩu"
								name="password"
								rules={[
									{
										required: true,
										message: "Please input your password!",
									},
								]}
							>
								<Input.Password />
							</Form.Item>

							<Form.Item label={null}>
								<Button
									type="primary"
									htmlType="submit"
									loading={isSubmit}
								>
									Submit
								</Button>
							</Form.Item>
						</Form>
					</section>
					{/* <section>
						<div className="divider-or">
							<Divider />
							<div>
								<p className="text-or">Or</p>
							</div>
							<Divider />
						</div>
						<div className="social-login">
							<p className="">Đã có tài khoản ?&nbsp;</p>
							<Link to={"/login"}>Đăng nhập</Link>
						</div>
					</section> */}
				</div>
			</main>
		</div>
	);
};

export default Login;
