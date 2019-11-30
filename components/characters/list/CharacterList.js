import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CharacterItem from "./CharacterItem";

export default function CharacterList({ elephants }) {
	return (
		<Row>
			{elephants.map(character => {
				return (
					<Col sm={6} md={3} key={character.id}>
						<CharacterItem character={character} />
					</Col>
				);
			})}
		</Row>
	);
}

CharacterList.propTypes = {
	elephants: PropTypes.arrayOf(PropTypes.object).isRequired
};
