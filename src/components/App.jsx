import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from '../JSONS/user.json';
import data from '../JSONS/data.json';
import friends from '../JSONS/friends';
import transactions from '../JSONS/transactions';

export default function App() {
  return [
    <Profile
      key="1"
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />,
    <Statistics key="2" title="Upload stats" stats={data} />,
    <FriendList key="3" friends={friends} />,
    <TransactionHistory key="4" items={transactions} />,
  ];
}
