import './App.css';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';
import LikeImgHOC from './components/WithHOC/LikeImgHOC.jsx';
import LikePostHOC from './components/WithHOC/LikePostHOC.jsx';
import LikeImgProps from './components/WithProps/LikeImgProps.jsx';
import LikePostProps from './components/WithProps/LikePostProps.jsx';

function App() {
  return (
    <div>
      <h3>Some Blog</h3>
      <div className='buttons'>
        <LikePost />
        <LikeImage />
      </div>
      <h3>Some Blog using HOC</h3>
      <div className='buttons'>
        <LikeImgHOC />
        <LikePostHOC />
      </div>
      <h3>Some Blog using Props</h3>
      <div className='buttons'>
        <LikeImgProps />
        <LikePostProps />
      </div>
    </div>
  );
}

export default App;
