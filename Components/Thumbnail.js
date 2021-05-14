import Image from "next/image";
import { forwardRef } from "react";
import { ThumbUpIcon } from "@heroicons/react/outline";

const Thumbnail = forwardRef(({ result, id }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  console.log(result);
  return (
    <div
      ref={ref}
      className="group cursor-pointer p-2 transition duration-100
     transform sm:hover:scale-105 "
    >
      <Image
        layout="responsive"
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        height={1080}
        width={1920}
      />
      <div className="p-2">
        <p className="truncate max-w-md p-2">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}{" "}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          movie {result.media_type && `${result.media_type} `} •{" "}
          {result.release_date || result.first_air_date} • {"  "}
          <ThumbUpIcon className="h-5 mx-2" />
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;
