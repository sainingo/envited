import { Routes, Route} from "react-router-dom";
import './App.css';
import CreateEvent from "./components/CreateEvent";
import Home from './components/Home';
import EventPage from './components/EventPage'

function App() {
  return (
    <div className="bg-[F6F2FF]">
    <Routes >
       <Route path="/" element={ <Home />}/>
       <Route path="/create" element={<CreateEvent />} />
       <Route path="/event" element={<EventPage />} />
     </Routes>
    </div>
  );
}

export default App;
