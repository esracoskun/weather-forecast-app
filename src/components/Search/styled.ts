import styled from 'styled-components';
import { ReactComponent as SearchIconSvg } from '../../assets/search-icon.svg';

export const SearchElement = styled.div`
  position: relative;
  height: 3.25rem;
  border-radius: 26px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.4rem;
  display: flex;
  align-items: center;
  z-index: 1;
  background-color: rgb(255, 255, 255);
`;
export const SearchInput = styled.input`
  margin-left: 1rem;
  height: 3.25rem;
  border: none;
  background-color: rgb(255, 255, 255);
  font-size: 1.125rem;
  color: #494d51;
  width: 90%;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #2f5d8a9e;
  }
`;
export const SearchIcon = styled(SearchIconSvg)`
  margin-left: 1.2rem;
  fill: #4a6fa1;
`;
export const SearchResult = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background: rgb(255, 255, 255);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  width: 98%;
  left: 1%;
  top: 3.35rem;
  border-radius: 5px;
  overflow: hidden;
`;
export const SuggestionItem = styled.a`
  color: #2079c9;
  text-decoration: none;
  padding: 0.6rem 1rem;
  border-bottom: 1px dotted rgb(204, 204, 204);
  display: block;
  text-align: left;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: rgb(249, 249, 249);
  }
`;
