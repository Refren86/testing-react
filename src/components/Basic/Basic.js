import { useEffect, useState } from 'react';

function Basic() {
  const [data, setData] = useState(null);
  const [visible, setVisible] = useState(false);
  const [enteredText, setEnteredText] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setData('sen chopengare');
    }, 800);
  }, []);

  const toggle = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div>
      <h1 style={{ color: 'red' }}>Hello world</h1>
      <button onClick={toggle}>Click me</button>

      <input
        placeholder="input value..."
        value={enteredText}
        onChange={(e) => setEnteredText(e.target.value)}
      />

      {visible && <p>Hi mom</p>}

      {data && <p data-testid="fetch-res">{data}</p>}
    </div>
  );
}

export default Basic;
