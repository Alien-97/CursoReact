import React from 'react';

function App() {
  function getGreetingMessage() {
    return 'Hello, World';
  }
  return (
    <div>
      <h1>{getGreetingMessage()}</h1>
    </div>
  );
}

export default App;
