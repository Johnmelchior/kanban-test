import './App.scss';
import { Provider } from 'react-redux'
import store from './store/store';
import TalentCenter from './components/TalentCenter/TalentCenter';

function App() {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   axios.get("https://randomuser.me/api/?results=20").then((res) => {
  //     setUsers(res.data.results);
  //   })
  // }, []);

  // const cardUsers = users.map((user, index) => {
  //   return <Card key={index} name={`${user.name.first} ${user.name.last}`} email={user.email}></Card>
  // })

  return (
    <div className="App">
      <Provider store={store}>
        <TalentCenter />
      </Provider>
    </div>
  );
}

export default App;
