
import './App.css';
import Header from '../Header/Header'; // import Header component
import Footer from '../Footer/Footer';



function App() {
  return (
      <div id="container">
       <Header />  {/*gọi component Header ở đây */}

      <Content /> {/*gọi component Content ở đây */}
         {/* footer content */}
         <Footer /> {/*gọi component Footer ở đây */}
      </div>
      );
      }
    

export default App;
