import React, {FC, useState} from 'react';

interface Props {
  name: string;
  age: number
}

const people = [
    {
      name: 'Bertie Yates',
      age: 29
    }, 
    {
      name: 'Hester Hogan',
      age: 32
    },
    {
      name: 'Bertie Yates',
      age: 29
    }, 
    {
      name: 'Hester Hogan',
      age: 32
    }
  ]


const Person: FC<Props> = ({name, age}) => {
  return (
    <>
     <h3>{name}</h3>
     <h4>{age} years old</h4>
    </>
  )
}

const App: FC = () => {
  const [value, setValue] = useState(people)
  return (
     <>
      <h5>{value.length} birtdays today</h5>
      <ol>
        {value.map(item => <li>
          <h5>{item.name}</h5>
          <h4>{item.age}</h4>
          </li>)}
      </ol>
      </>  
  );
}

export default App;
