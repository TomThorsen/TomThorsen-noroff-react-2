import React from "react";
import useForm from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Layout from "../components/layout/Layout";

const schema = yup.object().shape({
	email: yup
		.string()
		.email("Please enter a valid email")
		.required("Email is required"),
	password: yup
		.string().required('Password is required')
		.min(8, "Password must be 8 characters minimum"),
	passwordConfirm: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Passwords must match')
});

export default function App() {
	const { register, handleSubmit, watch, errors } = useForm({
		validationSchema: schema
	});
	function onSubmit(data) {
		console.log("data", data);
	}

	return (
		<Layout>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Form.Group>
					<Form.Label>Email</Form.Label>
					<Form.Control name="email" placeholder="Enter your email" ref={register} />
					{errors.email && <p>{errors.email.message}</p>}
				</Form.Group>

				<Form.Group>
					<Form.Label>Password</Form.Label>
					<Form.Control name="password" placeholder="Enter a password, 8 characters minimum" type="password" ref={register} />
					{errors.password && <p>{errors.password.message}</p>}
				</Form.Group>

				<Form.Group>
					<Form.Label>PasswordConfirm</Form.Label>
					<Form.Control name="passwordConfirm" placeholder="Confirm your password" type="password" ref={register} />
					{errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}
				</Form.Group>

				<Button type="submit">Submit</Button>
			</Form>
		</Layout>
	);
}

