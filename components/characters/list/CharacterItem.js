import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import Image from "./Image";
import Name from "./Name";

export default function CharacterItem({ character }) {
	const { name, image, species, sex } = character;

	return (
		<Card species={species} gender={sex}>
			<Name gender={sex}>{name}</Name>
			<Image src={image} gender={sex} />
		</Card>
	);
}

CharacterItem.propTypes = {
	character: PropTypes.object.isRequired
};
