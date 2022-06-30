import Profile from './Profile/Profile'
import user from '../user.json';

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };


export default function App () {
    return <div><Profile
    name={user.username}
    tag={user.tag}
    location={user.location}
    photo={user.avatar}
    followers={user.stats.followers}
    views={user.stats.views}
    likes={user.stats.likes}
    
    /></div>
}