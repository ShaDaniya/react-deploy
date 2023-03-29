import './App.css';
import profileImage from './img/photo.jpeg'

function App() {
  return (
    <div className="App">
      <h1>My react app</h1>
      <h2>Author: Daniya</h2>
      <img src={profileImage} alt="profile-image" />
    </div>
  );
}

export default App;
