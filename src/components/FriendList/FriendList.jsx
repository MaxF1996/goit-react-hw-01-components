// import css from './FriendList/FriendList.module.css';
import PropTypes from 'prop-types';
import { FriendListContainer, FriendListLi, Status } from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <FriendListContainer>
      {friends.map(({ id, ...friend }) => (
        <FriendListItem key={id} {...friend} />
      ))}
    </FriendListContainer>
  );
};

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <FriendListLi>
      <Status isOnline={isOnline}></Status>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </FriendListLi>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendList;
