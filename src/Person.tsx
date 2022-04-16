import React, {FC, useState} from 'react';
import {Props } from './modules/note.module';

const Person: FC<Props> = ({name, age, email, hairColor}) => {
   const [country, setCountry] = useState<string | null>(null);

   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
     setCountry(event.target.value)
   }
    return (
        <>
         <h2>{name}</h2>
         <h2>{age}</h2>
         <h2>{email}</h2>
         <h3>{hairColor}</h3>
         <input placeholder="enter country name here"   onChange={handleChange}/>
         {country}
        </>
    )
}
export default Person