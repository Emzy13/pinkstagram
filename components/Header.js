import {
  MagnifyingGlassIcon,
  HomeIcon,
  Bars3Icon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  GlobeAltIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

function Header() {
  return (
    <div className="flex flex-col border-r border-pink-400 bg-pink-300 fixed min-h-screen w-52">
      <div className="flex flex-col gap-y-5">
 
        <div className="relative w-34 h-28 top-2 mr-3 cursor-pointer">
          <img src="/small.png"/>
        </div>
       
        <div className="flex flex-col items-center -space-x-32 space-y-10">

         <div className="relative hidden h-7 md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out"> 
            <HomeIcon className="h-7 md:inline-flex cursor-pointer mr-32 hover:scale-125
           transition-all duration-150 ease-out fill-pink-300 stroke-purple-700" />
            <p className="w-7 mt-1 mr-20 font-semibold text-pink-800 flex absolute -right-1">Home</p>
         </div>

         <div className="relative hidden h-7 md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out">
            <MagnifyingGlassIcon className="h-7 md:inline-flex cursor-pointer hover:scale-125
            transition-all duration-150 ease-out fill-pink-300 stroke-purple-700" />
             <p className="w-7 font-semibold text-pink-800 ml-1 flex absolute left-12">Search</p>
         </div>

         <div className="relative hidden h-7 md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out">
            <GlobeAltIcon className="h-7 md:inline-flex cursor-pointer hover:scale-125
            transition-all duration-150 ease-out fill-pink-300 stroke-purple-700" />
             <p className="w-7 font-semibold text-pink-800 ml-1 flex absolute left-12">Explore</p>
         </div>

          <div className="relative hidden h-7 md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out">
            <PaperAirplaneIcon
              className="h-7
         md:inline-flex cursor-pointer hover:scale-125
         transition-all duration-150 ease-out -rotate-45 fill-pink-300 stroke-purple-700"
            />
            <div className="absolute -top-2 -right-2 text-xs w-5 h-5 bg-red-400 rounded-full flex items-center justify-center animate-pulse text-white">
              3
            </div>
            <p className="w-7 font-semibold text-pink-800 ml-1 flex absolute left-12">Messages</p>
          </div>

          <div className="relative hidden h-7 md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out">
            <HeartIcon className="h-7 md:inline-flex cursor-pointer hover:scale-125
            transition-all duration-150 ease-out fill-pink-300 stroke-purple-700" />
             <p className="w-7 font-semibold text-pink-800 mr-2 flex absolute left-12">Notifications</p>
         </div>

         <div className="relative hidden h-7 md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out">
            <PlusCircleIcon className="h-7 md:inline-flex cursor-pointer hover:scale-125
            transition-all duration-150 ease-out fill-pink-300 stroke-purple-700" />
             <p className="w-7 font-semibold text-pink-800 ml-1 flex absolute left-12">Create</p>
         </div>

         <div className="relative hidden h-7 md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out">
          <img
            src="/3.jpeg"
            alt="profile pic"
            className="w-7 h-8 rounded-full cursor-pointer"/>
            <p className="w-7 font-semibold text-pink-800 ml-1 flex absolute left-12">Profile</p>
         </div>

         <div className="relative hidden h-7 md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out">
            <Bars3Icon className="h-7 md:inline-flex cursor-pointer hover:scale-125
            transition-all duration-150 ease-out fill-pink-300 stroke-purple-700" />
             <p className="w-7 font-semibold text-pink-800 ml-1 flex absolute left-12">More</p>
         </div>
       
        </div>
      </div>
    </div>
  );
}

export default Header;