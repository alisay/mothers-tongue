import './App.css';
import InfiniteScroll from './InfiniteScroll';

function App() {

  const arrowStyle = {
    // border: '3px solid red',
    position: 'fixed',
    bottom: '10vh',
    right: '10vh',
    fontSize: '250%',
    opacity: '1.0',
    color: 'white',
    cursor: 'pointer',
  }

  const scrollFunc = () => {
    console.log("oh, you're trying to scroll")
    setInterval(function(){
      window.scrollBy(0,1);
    },100);
    // window.scrollTo(0,document.body.scrollHeight);
  }

  const arrow = <div style={arrowStyle} onClick={scrollFunc} onTouchEnd={scrollFunc}>↓</div>

  return (<div onKeyDown={scrollFunc}>
    {arrow}
    <InfiniteScroll />
  </div>);
}

export default App;
