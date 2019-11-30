import React from "react";
import PropTypes from "prop-types";
import Head from "../components/head";
import Layout from "../components/layout/Layout";
import axios from "axios";
import { BASE_URL } from "../constants/API";
import Heading from "../components/layout/Heading";
import CharacterList from "../components/characters/list/CharacterList";

export default function Index(props) {
	return (
		<Layout>
			<Head title="Noroff Next" />
			<Heading>Elephants</Heading>
			<CharacterList elephants={props.elephants} />
		</Layout>
	);
}

Index.propTypes = {
	elephants: PropTypes.arrayOf(PropTypes.object).isRequired
};

Index.getInitialProps = async function() {
	let elephants = [];
	try {
		const headers = {
			"X-Requested-With": "XMLHttpRequest"
		};
		const response = await axios.get(BASE_URL, { headers });
		const data = response.data;
		elephants = data;
		console.log(elephants);
	} catch (error) {
		console.log(error);
	}
	return {
		elephants: elephants
	};
};
