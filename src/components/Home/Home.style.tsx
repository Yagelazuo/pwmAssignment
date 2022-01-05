import styled from "styled-components";
import { Related } from "../Related/Related";

export const GridContainer = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(200px, auto));
  width: 90%;
  margin-left: 5%;
  margin-top: 30px;
`;

export const RelatedBar = styled(Related)`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
