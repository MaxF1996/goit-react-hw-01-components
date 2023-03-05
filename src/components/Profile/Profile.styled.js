import styled from 'styled-components';

export const ProfileContainer = styled.div`
  max-width: 300px;
  margin: 50px auto 50px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
`;

export const Description = styled.div`
  text-align: center;
  padding: 30px 0;
`;

export const Avatar = styled.img`
  margin: 0 auto 25px;
  border-radius: 50%;
  max-width: 100px;
`;

export const Name = styled.p`
  font-weight: 700;
  margin-bottom: 5px;
`;

export const Tag = styled.p`
  color: #a1a7ad;
  margin-bottom: 5px;
`;

export const Location = styled.p`
  color: #a1a7ad;
`;

export const Stats = styled.ul`
  display: flex;
  background-color: #f3f6f9;
  border-top: 2px solid #e5eaf1;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 3);
  text-align: center;
  padding: 20px;
  :not(:last-child) {
    border-right: 2px solid #e5eaf1;
  }
`;

export const Label = styled.span`
  font-size: 14px;
  color: #a5adb6;
`;

export const Quantity = styled.span`
  font-weight: 700;
`;
