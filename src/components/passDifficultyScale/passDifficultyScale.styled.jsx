import styled from 'styled-components';

const green = p => p.theme.colors.greenValid;
const red = p => p.theme.colors.redErrorLight;

export const List = styled.ul`
  display: flex;
  gap: 7px;
  position: absolute;
  top: 4px;
  right: 3px;

  @media screen and (min-width: 768px) {
    top: 92px;
  }
`;

export const Item = styled.li`
  position: relative;
  width: 39px;
  height: 7px;
  border-radius: 5px;

  font-size: 12px;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 37px;
    height: 7px;
  }

  background-color: ${({ state }) =>
    state === 'red' ? red : state === 'strong' ? green : 'lightgray'};

  &:first-child {
    color: ${red};
    background-color: ${({ state }) => state === 'weak' && red};
  }

  &:nth-child(1) {
    background-color: ${({ state }) => state === 'medium' && 'orange'};
  }
  &:nth-child(2) {
    color: orange;
    background-color: ${({ state }) => state === 'medium' && 'orange'};
  }

  &:nth-child(3) {
    color: ${green};
  }
`;

export const Span = styled.span`
  position: absolute;
  bottom: 9px;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (min-width: 768px) {
    top: 8px;
  }
`;
