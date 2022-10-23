import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";
//react-flip-move {explained}
//This module was built to tackle the common but arduous problem of animating a list of items when the list's order changes.
//CSS transitions only work for CSS properties. If your list is shuffled, the items have rearranged themselves, but without the use of CSS. The DOM nodes don't know that their on-screen location has changed; from their perspective, they've been removed and inserted elsewhere in the document.


function Results({ results }) {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results.map((result) => (
        //mapping as key and second entire results through as props
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  );
}

export default Results;
