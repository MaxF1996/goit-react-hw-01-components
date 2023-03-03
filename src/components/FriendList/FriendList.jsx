import css from '../FriendList/FriendList.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span className={`${css.status} ${isOnline ? css.online : css.offline}`}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

const FriendList = ({ friends }) => {
  return (
    <ul className={css['friend-list']}>
      {friends.map(({ id, ...friend }) => (
        <FriendListItem key={id} {...friend} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendList;
