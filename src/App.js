
import './App.css';
import './components/Header.css'

const Spaceimg = new URL('./img/image 2.jpg', import.meta.url)

function App() {
  return (
   <div className="earchimg">
       <img src={Spaceimg} alt=''/>
   </div>
  );
}

export default App;
