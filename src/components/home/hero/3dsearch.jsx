import React, { useState } from 'react';

const Search3D = () => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <div className="perspective-[1000px] w-fit">
      <div
        className={`
          relative
          bg-white flex flex-row gap-3 px-8 py-2 border border-white rounded-lg
          transition-all duration-300 ease-out
          shadow-lg
          hover:translate-y-2
          hover:rotate-x-[10deg]
          hover:after:opacity-100
          active:translate-y-3
          active:rotate-x-[15deg]
          transform-style-preserve-3d
          after:absolute
          after:w-full
          after:h-full
          after:left-0
          after:-bottom-2
          after:-z-10
          after:rounded-lg
          after:bg-gradient-to-b
          after:from-white/80
          after:to-white/20
          after:opacity-0
          after:transition-opacity
          after:duration-300
          ${isPressed ? 'translate-y-3 rotate-x-[15deg] after:opacity-100' : ''}
        `}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => setIsPressed(false)}
      >
        <input
          type="text"
          placeholder="Search Properties"
          className="font-bold font-montserrat text-myGreen py-3 pl-2 focus:border-white focus:outline-none placeholder:text-myGreen"
        />
        <button className="transition-transform duration-300 active:scale-95">
          <img src="/search.svg" width={40} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Search3D;