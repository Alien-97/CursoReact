import React from 'react';

function App() {
  const greetings = {
    greeting_one: 'Hello',
    greeting_two: 'world',
  };
  return (
    <div>
      <h1>
        {greetings.greeting_one}, {greetings.greeting_two}
      </h1>
    </div>
  );
}

export default App;
