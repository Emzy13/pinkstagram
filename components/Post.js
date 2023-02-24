import {
  BookmarkIcon,
  HeartIcon,
  PaperAirplaneIcon,
  ChatBubbleLeftIcon,
  EllipsisHorizontalIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/outline";

function Post({ username, userImg, postImg, caption }) {
  return (
    <div className="bg-pink-100 mt-8 mb-0 border-pink-200 border-b-2 border-b-pink-400 p-12 pt-0 rounded-sm">
      {/* Header */}
      <div className="flex items-center p-3">
        <img
          src={userImg}
          className="rounded-full h-12 w-12 object-contain border-pink-200 border p-1 mr-3"
          alt=""
        />
        <p className="flex-1 font-bold text-pink-500">{username}</p>
        <EllipsisHorizontalIcon className="h-5 stroke-pink-500" />
      </div>

      {/*IMG */}
      <div>
        <img src={postImg} className="object-cover w-full rounded-md ml-2" />
      </div>

      {/* Buttons */}
      <div className="flex justify-between px-4 py-2">
        <div className="flex space-x-4">
          <HeartIcon
            className="h-7 hover:scale-125 cursor-pointer
         transition-all duration-150 ease-out fill-pink-200 stroke-pink-500"/>

          <ChatBubbleLeftIcon
            className="h-7 hover:scale-125 cursor-pointer
         transition-all duration-150 ease-out fill-pink-200 stroke-pink-500" />

          <PaperAirplaneIcon
            className="h-7 hover:scale-125 cursor-pointer
         transition-all duration-150 ease-out fill-pink-200 stroke-pink-500" />  
        </div>

        <BookmarkIcon
          className="h-7 hover:scale-125 cursor-pointer
         transition-all duration-150 ease-out fill-pink-200 stroke-pink-500" />
      </div>

      {/* caption */}
      <p className="p-5">
          <span className="font-bold mr-1 text-pink-500">{username}</span>
          <span className="text-pink-700">{caption}</span>
      </p>

      {/* input box */}
      <form className="flex items-center p-4">
         <input type="text" 
         placeholder="Add a comment..."
         className="border-none flex-1 focus:ring-0 outline-none rounded-md text-pink-700"></input>
        <FaceSmileIcon className="h-7 fill-pink-100 stroke-pink-600"/>
      </form>

    </div>
  );
}

export default Post;
