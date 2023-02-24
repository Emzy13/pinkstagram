
function MiniProfile(){
   return (
<div className="flex items-center justify-between mt-14 ml-0">
    <img className="w-10 h-12 rounded-full border p-1" 
    src="3.jpeg"
    />
    <div className="flex-1 mx-4" >
        <h2 className="font-bold text-pink-500">emmzzit</h2>
        <h3 className="text-sm text-pink-400">Welcome to Pinksta</h3>
    </div>
    <button className="text-pink-400 text-sm font-semibold">Sign Out</button>

</div>
);
}

export default MiniProfile;