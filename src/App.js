import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import FilterSearchPage from './Components/Pages/FilteredSearchPage';
import RecipientForm from './Components/Forms/ReciepentInfoForm';
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FilterSearchPage />} />
        <Route path="/checkout/:flowerId" element={<RecipientForm />} />
      </Routes>
    </Router>
  );
};

export default App;