import type { FormProps } from "antd";
import { App, Button, Divider, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { registerAPI } from "@/services/api";
import "./register.scss";
import { useState } from "react";

type FieldType = {
	fullName: string;
	email: string;
	password: string;
	phone: string;
};

const RegisterPage = () => {
	const [isSubmit, setIsSubmit] = useState(false);
	const { message } = App.useApp();
	const navigate = useNavigate();

	const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
		// console.log("Success:", values);
		setIsSubmit(true);
		const { email, fullName, password, phone } = values;
		const res = await registerAPI(fullName, email, password, phone);

		if (res.data) {
			// success
			message.success("Đăng ký thành công");
			navigate("/login");
		} else {
			// error
			message.error("Đăng ký thất bại");
		}
		setIsSubmit(false);
	};

	// const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
	// 	errorInfo
	// ) => {
	// 	console.log("Failed:", errorInfo);
	// };

	return (
		<div className="register-page">
			<main className="main">
				<div className="container">
					<section className="wrapper">
						<div className="heading">
							<h1 className="text text-large">
								Đăng ký tài khoản
							</h1>
							<Divider />
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
								name="fullName"
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
								label="Email"
								name="email"
								rules={[
									{
										required: true,
										message: "Please input your username!",
									},
									{
										type: "email",
										message:
											"The input is not valid E-mail!",
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

							<Form.Item<FieldType>
								label="Số điện thoại"
								name="phone"
								rules={[
									{
										required: true,
										message: "Please input your password!",
									},
								]}
							>
								<Input />
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
					<section>
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
					</section>
				</div>
			</main>
		</div>
	);
};

export default RegisterPage;
