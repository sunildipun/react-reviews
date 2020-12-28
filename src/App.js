import './App.css';

import Review from './components/review/review.component';

function App() {
  return (
    <section className="container">
    <div>
      <div className="title">
        <h2>Our Reviews</h2>
        <div className="underline"></div>
      </div>
      <Review />
    </div>
    </section>
  );
}

export default App;
