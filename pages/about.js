import React from "react";
import Head from "../components/head";
import Layout from "../components/layout/Layout";
import Heading from "../components/layout/Heading";

export default function About() {
	return (
		<Layout>
			<Head title="About | Noroff Next" />

			<Heading background="#ebebeb">About this app</Heading>
		</Layout>
	);
}
