/* eslint-disable react/prop-types */
const PlaceTree = ({ id, placesById, handleComplete }) => {
  const places = placesById[id];
  console.log(handleComplete);
  const childIds = places.childIds;

  return (
    <li>
      {places.title} <button onClick={()=>handleComplete}>complete</button>
      {childIds.length > 0 && (
        <ol>
          {childIds.map((id) => (
            <PlaceTree
            parentId={0}
              key={id}
              id={id}
              handleComplete={handleComplete}
              placesById={placesById}
            />
          ))}
        </ol>
      )}
    </li>
  );
};

export default PlaceTree;
