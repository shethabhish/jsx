// Import react and react dom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create react components
const App = function () {
  return (
    <div>
      <label className="label" for="name">
        Enter Name
      </label>
      <input id="name" type="text"></input>
      <button style={{ backgroundColor: 'blue', color: 'white' }} type="submit">
        Submit
      </button>
    </div>
  );
};

// Take the react component and show that on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
