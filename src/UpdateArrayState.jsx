//...

import { useState } from "react";

const UpdateArrayState = () => {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  //add foot into the list
  const handleAddFood = () => {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";

    //a recomended naming convention for using an updater function is to use
    //the first letter of the array to be updated
    setFoods((f) => [...f, newFood]);
  };

  const handleRemoveFood = (index) => {
    //if you see an underscore,means that the parameter is ignored
    setFoods(foods.filter((_, i) => i !== index));
  };
  return (
    <>
      <h2>List Of Food</h2>

      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {" "}
            {food}
          </li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter food name" />
      <button onClick={handleAddFood}>Add Food</button>
    </>
  );
};
export default UpdateArrayState;
