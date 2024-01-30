import { useState } from "react";

import { initialTravelPlan } from "../data/newPlace";
import PlaceTree from "./PlaceTree";

const TravelPlan = () => {
  const [plan, setPlan] = useState(initialTravelPlan);
  const root = plan[0];
  const planetIds = root.childIds;
  const handleComplete = (parentId, chidlId) => {
    const parent = plan[parentId];
    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter((id) => id !== chidlId),
    };
    setPlan({
      ...plan,
    });
  };
  return (
    <div>
      <h2>Fuad hasan</h2>
      <ol>
        {planetIds.map((placesId) => (
          <PlaceTree
            handleComplete={handleComplete}
            key={placesId}
            id={placesId}
            placesById={plan}
          />
        ))}
      </ol>
    </div>
  );
};

export default TravelPlan;
