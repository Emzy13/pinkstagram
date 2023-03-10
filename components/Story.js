function Story({avatar, username}) {
  return(
    <div className="p-3 bg-pink-100">
      <img className="h-14 w-14 l-5 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer
      hover:scale-110 transition transform duration-200 ease-out" src={avatar} alt="image" />
      <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  )

}
export default Story