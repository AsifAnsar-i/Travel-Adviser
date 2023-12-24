import React from "react";

const List = ({ place,phone,address,name,price}) => {
  console.warn(place)
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg ">
      <img
        src={place ? place :"https://wallpaperbat.com/img/729584-restaurants-wallpaper-top-free-restaurants-background.jpg"}
        alt="listing cover"
        className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300 "
      />
      <div className="p-3">
        <p className="text-lg font-bold max-w-96">{name ? name:"Rooorkiii" }</p>
      </div>
      <div className="p-3">
        <p className="text-lg font-bold max-w-96">{price ? price:"$689.98" }</p>
      </div>
      <div className="p-3">
        <p className="text-lg font-semibold max-w-96">{address ? address:"Muradnagar Ghaziabad ,Uttar Pradesh" }</p>
      </div>
      <div className="p-3">
        <p className="text-lg font-semibold max-w-96">{phone ? phone :'+91 6378272829'}</p>
      </div>
    </div>
  );
};

export default List;
