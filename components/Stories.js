import  { faker } from '@faker-js/faker'
import { useEffect, useState } from 'react';
import Story  from "../components/Story";

function Stories() {
    const [suggestions, setSuggestions] = useState([]);
    useEffect(() => {
      const suggestions = [...Array(6)].map((_, i) => ({
        userId: faker.datatype.uuid(),
        username: faker.internet.userName(),
        avatar: faker.image.avatar(),
      }));
      setSuggestions(suggestions);
    }, []);
   return(
   
    <div className="flex space-x-2 p-1 bg-pink-100 mt-6 ml-8 mr-3 mb-0 border-pink-200 overflow-x-scroll scrollbar-thin ">
    {
      suggestions.map(suggestion => <Story key={suggestion.userId} username={suggestion.username} avatar={suggestion.avatar}/>)
    }
    </div>
   )

}
export default Stories 