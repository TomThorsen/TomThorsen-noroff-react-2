import styled from "styled-components";

const Card = styled.div`
	padding: 1em;
	margin-bottom: 1em;
	box-shadow: ${props => (props.species === "Asian" ? "0 3px 4px #ccc;" : "none")};
	background: ${props => (props.gender === "Female" ? "#920f21" : "#12a260")};
	border-width: 5px;
	border-style: solid;
	border-color: grey;
	border-radius: 5px;
`;

export default Card;
