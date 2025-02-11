// import { useSelector, useDispatch } from "react-redux";
// import { togglePlayPause,stopSong } from "../Redux/Slices/PlayerSlice";
// import { Play, Pause, StopCircle } from "lucide-react";

// const AudioPlayer = () => {
//   const dispatch = useDispatch();
//   const { currentSong, isPlaying } = useSelector((state) => state.player);

//   if (!currentSong) return null; 

//   return (
//     <div className="fixed bottom-0 w-full bg-gray-900 text-white p-4 flex items-center justify-between">
//       <div className="flex items-center gap-4">
//         <img src={currentSong.image} alt={currentSong.title} className="w-12 h-12 rounded-md" />
//         <div>
//           <p className="text-lg font-semibold">{currentSong.title}</p>
//         </div>
//       </div>
//       <div className="flex gap-4">
//         <button onClick={() => dispatch(togglePlayPause())}>
//           {isPlaying ? <Pause size={24} /> : <Play size={24} />}
//         </button>
//         <button onClick={() => dispatch(stopSong())}>
//           <StopCircle size={24} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AudioPlayer;
