import './App.css';

function AppJSX() {
  const name = '혜민';
  const list = ['우유', '딸기', '바나나', '요거트'];
  return (
    <>
      <h1 className='orange'>{`hello! ${name}`}</h1>
      <h2>hello~~</h2>
      <p>{name}</p>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <img
        style={{ width: '500px', height: '500px' }}
        src='https://images.unsplash.com/photo-1689101298752-886c970ff200?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=60'
        alt='fox'
      />
    </>
  );
}

export default AppJSX;
