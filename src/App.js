import './App.css';
import ImageContainer from "./components/ImageContainer"

function App() {
  const unsplashImageUrls = [
    'https://source.unsplash.com?1400x1200girls',
    'https://source.unsplash.com/1000x1000?women',
    'https://source.unsplash.com/1400x1000?card',
    'https://source.unsplash.com/1000x1000?bike',
    'https://source.unsplash.com/1200x1000?boy',
    'https://source.unsplash.com/1600x1000?train',
];
  return (
    <div>
      <ImageContainer imageUrl={unsplashImageUrls}/>
      </div>
  );
}

export default App;
