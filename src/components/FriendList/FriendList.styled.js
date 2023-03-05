import styled from 'styled-components';

export const FriendListContainer = styled.ul`
  max-width: 300px;
  margin: 0 auto;
`;

export const FriendListLi = styled.li`
  margin: 20px auto;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  padding: 10px;
  column-gap: 15px;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;
