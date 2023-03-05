import { v4 as uuidv4 } from 'uuid';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

export default function App() {
  return [
    <Profile
      key={uuidv4()}
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />,
    <Statistics key={uuidv4()} title="Upload stats" stats={data} />,
    <FriendList key={uuidv4()} friends={friends} />,
    <TransactionHistory key={uuidv4()} items={transactions} />,
  ];
}
