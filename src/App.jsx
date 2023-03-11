import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import DocumentProcessing from './DocumentProcessing.jsx';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<DocumentProcessing />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;