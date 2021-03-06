import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Contaier = styled.div`
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;

const Title = styled.span`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 25px;
`;

const Grid = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 125px);
  grid-gap: 25px;
`;

const Section = ({ title, children }) => (
  <Contaier>
    <Title> {title} </Title>
    <Grid> {children} </Grid>
  </Contaier>
);

Section.propTypes = {
  tilte: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Section;
