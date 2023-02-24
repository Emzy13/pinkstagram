import { faker } from "@faker-js/faker";
import  { useEffect, useState } from "react";

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    setSuggestions(
      [...Array(5)].map((profile) => ({
        userId: faker.datatype.uuid(),
        username: faker.internet.userName(),
        avatar: faker.image.avatar(),
      }))
    );
  }, []);
  console.log(suggestions);

  return (
      <div className="mt-4">
          <div className="flex items-center justify-between ">
             <p className="text-sm font-semibold text-pink-400 mt-1">
                Suggestions for you
             </p>
             <button className="font-semibold text-pink-600 text-xs">See All</button>
          </div>

            {suggestions.map((profile) => (
          <div className="flex items-center justify-between mt-6">
             <div className="flex items-center">
                 <div className="w-8 h-8 ">
                     <img src={profile.avatar} className="rounded-full" />
                 </div>
             <div className="ml-4">
                 <p className="text-sm font-semibold text-pink-400">{profile.username}</p>
                 <p className="text-xs text-pink-500">Suggested for you</p>
            </div>
          </div>

          <button className="text-xs font-semibold text-pink-800">
            Follow
          </button>
        </div>
      ))}

        <div className="flex text-xs mt-6 text-semibold text-red-200 space-x-1">
            <p>About</p>
               <span>&#8901;</span>
            <p>Help</p>
               <span>&#8901;</span>
            <p>Press</p>     
        </div>

        <div className="text-xs mt-4 text-semibold text-red-200">
            <p>© 2023 PINKSTAGRAM </p>
        </div>
    </div>
  );
};

export default Suggestions; 