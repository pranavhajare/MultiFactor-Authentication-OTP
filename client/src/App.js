
import './App.css';
import Login from './components/Login';

const centerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  // minHeight: '100vh'
};

function App() {
  return (
    <div className="App">
      <div style={centerStyle} >
                <h1>
                    Multi Factor Authentication (MFA) using
                    MERN Stack
                </h1>
            </div>
            <Login />
    </div>
  );
}

export default App;
