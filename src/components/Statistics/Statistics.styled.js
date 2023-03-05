import styled from 'styled-components';

export const StatisticsContainer = styled.section`
  max-width: 300px;
  margin: 50px auto;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  text-align: center;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  padding: 20px 0;
`;

export const StatList = styled.ul`
  display: flex;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 5);
  padding: 5px 5px;
`;

export const Label = styled.span`
  padding-bottom: 5px;
  color: white;
`;

export const Percentage = styled.span`
  color: white;
`;
