import React, { useState } from "react";
import "./App.css";
import ChoceMarcCar from "./Components/ChoceMarcCar/ChoceMarcCar";
import ArrCars from "./db/arrCars.json";
import InputRun from "./Components/InputRun/InputRun";
import TotalTable from "./Components/TotalTable/TotalTable";

function App() {
  const [car, setCar] = useState({});
  const [finishTotal, setFinishTotal] = useState({});

  const [choceMarcCarBloc, setChoceMarcCarBloc] = useState(true);
  const [mileageBloc, setMileageBloc] = useState(false);
  const [totalTableBloc, setTotalTableBloc] = useState(false);

  const getCarMarc = (marc) => {
    setCar(marc);
    setMileageBloc(true);
    setChoceMarcCarBloc(false);
  };

  const carTotalAll = (totalCar) => {
    setFinishTotal({ ...totalCar });
    setTotalTableBloc(true);
    setMileageBloc(false);
  };

  return (
    <>
      {choceMarcCarBloc && (
        <ChoceMarcCar arrCars={ArrCars} getCarMarc={getCarMarc} />
      )}
      {mileageBloc && <InputRun car={car} carTotalAll={carTotalAll} />}

      {totalTableBloc && <TotalTable finishTotal={finishTotal} />}
    </>
  );
}

export default App;
