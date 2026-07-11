import React from 'react';
import Card from './components/Card';

const App = () => {
  return (
    <div>
      <Card user="Shivam Rajput" age={22} />
      <Card user="Naman Rajput" age={20} />
      <Card user="Vivek" age={25} />
      <Card user="Arjit" age={15} />
    </div>
  );
}

export default App;
