// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import FormHandlingProject from './form-handling-project.jsx'
// import './form-handling-project.css'
// import TwoWay from './TwoWayBlindingMiniProject.jsx'
// import './TwoWayBlindingMiniProject.css'
import App from './App'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <FormHandlingProject /> */}
    {/* < TwoWay /> */}
    <App/>
  </StrictMode>
);
