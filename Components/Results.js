import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

function Results({ results }) {
  console.log(results);
  return (
    <div className="px-5 py-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl-flex flex-wrap justify-center ">
      {results.map((result) => {
        return <Thumbnail result={result} key={result.id} />;
      })}
    </div>
  );
}

export default Results;
