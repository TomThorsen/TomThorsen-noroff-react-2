import styled from "styled-components";

const Name = styled.h5`
	border: 2px black solid;
	text-align: center;
	padding-top: 3px;
	padding-bottom: 3px;
	margin-bottom: 15px;
	font-size: 0.9em;
	text-transform: uppercase;
	color: ${props => (props.gender === "Female" ? "white" : "black")};
`;

export default Name;
