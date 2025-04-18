// Import necessary components from react-router-dom
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './Dashboard'; // Your existing Dashboard component

function App() {
  return (
    <div className="App">
    <Dashboard />
  </div>
    // <Router basename='vinyasa_construction'>
    //     {/* You can add a navbar or any other component here */}
    //     <Routes>
    //       {/* Define routes here */}
    //       <Route path="/" element={<Navigate to="/vinyasa" replace />} />
    //       <Route path="/vinyasa" element={<Dashboard />} />
    //     </Routes>
    // </Router>
  );
}

export default App;
