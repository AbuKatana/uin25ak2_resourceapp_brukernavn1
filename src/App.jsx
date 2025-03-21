import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Resources from './components/Resources';
import './styles/main.scss';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Resources category="html" />} />
          <Route path="html" element={<Resources category="html" />} />
          <Route path="css" element={<Resources category="css" />} />
          <Route path="javascript" element={<Resources category="javascript" />} />
          <Route path="react" element={<Resources category="react" />} />
          <Route path="sanity" element={<Resources category="headless-cms" />} />
        </Route>
      </Routes>
    </Router>
  );
}