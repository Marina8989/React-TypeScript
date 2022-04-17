import React, {FC} from 'react';

interface Props {
  name: string;
  age: number
}

const Person: FC<Props> = ({name, age}) => {
  return (
    <>
     <h3>{name}</h3>
     <h4>{age} years old</h4>
    </>
  )
}

const App: FC = () => {
  return (
    <>
      <h5>5 birtdays today</h5>
      <ol>
        <li><Person name='Bertie Yates' age={29}/></li>
        <li><Person name='Hester Hogan' age={32}/></li>
        <li><Person name='Larry Little' age={36}/></li>
        <li><Person name='Sean Walsh' age={34}/></li>
        <li><Person name='Lola Gardner' age={29}/></li>
      </ol>
    </>
  );
}

export default App;
