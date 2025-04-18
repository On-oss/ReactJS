import './App.css';
import Header from '../Header/Header'; // import Header component
import Footer from '../Footer/Footer';
import LeftContent from '../Content/Left/Left';
import RightContent from '../Content/Right/Right';
import {render } from'@testing-library/react';
function App() {
  return (
    <div id="container">
      <Header />  {/* gọi component Header ở đây */}

      <div id="content">
        {/* this is the content for menu */}
        <LeftContent />
        <RightContent />

        {/* footer content */}
        <Footer /> {/* gọi component Footer ở đây */}
      </div>
    </div>
  );
}

export default App;
