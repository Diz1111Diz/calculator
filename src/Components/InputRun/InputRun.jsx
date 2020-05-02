import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

import storage from "../../helpers/storage";

const useStyles = makeStyles((theme) => ({
  form: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  text: {
    height: 50,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const formInitialState = {
  age1: "",
  operNad: "",
  oldMileage: "",
  newMileage: "",
};

const InputRun = ({ car, carTotalAll }) => {
  const [form, setForm] = useState(formInitialState);

  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const { age1, operNad, oldMileage, newMileage } = form;

    const totalCar = {
      age: age1 || operNad,
      oldMileage,
      newMileage,
      baseRate: car.baseRate,
      operationInKiev: car.operationInKiev,
      operationalAllowance: car.operationalAllowance,
    };

    carTotalAll(totalCar);
  };

  useEffect(() => {
    const arrContacts = storage.get("carTotalAll");
    if (!arrContacts) {
      storage.save("carTotalAll", []);
      return;
    }
    setForm(arrContacts);
  }, []);

  useEffect(() => {
    storage.save("carTotalAll", { ...form });
  }, [form]);

  const { age1, operNad, oldMileage, newMileage } = form;

  const classes = useStyles();

  return (
    <form onSubmit={formSubmit}>
      <FormControl fullWidth variant="outlined" className={classes.form}>
        <InputLabel id="demo-simple-select-label">Вік А\М</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="1"
          variant="outlined"
          name="age1"
          value={age1}
          onChange={inputHandler}
          disabled={operNad ? true : false}
        >
          <MenuItem key={26}>Відмінити</MenuItem>
          {car.ageCar.map((el) => (
            <MenuItem key={el} value={el}>
              {`${el} %`}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth variant="outlined" className={classes.form}>
        <InputLabel id="demo-simple-select-label">Напружені умови</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="2"
          variant="outlined"
          name="operNad"
          value={operNad}
          onChange={inputHandler}
          disabled={age1 ? true : false}
        >
          <MenuItem key={53}>Відмінити</MenuItem>
          <MenuItem key={54} value={0.1}>
            10 %
          </MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth className={classes.form}>
        <TextField
          id="1"
          label="Старий пробіг"
          variant="outlined"
          autoFocus
          onChange={inputHandler}
          name="oldMileage"
          value={oldMileage}
          type="number"
          required
        />
        <TextField
          id="2"
          label="Новий пробіг"
          variant="outlined"
          onChange={inputHandler}
          name="newMileage"
          value={newMileage}
          type="number"
          required
        />
        <Button
          type="submit"
          className={classes.text}
          variant="contained"
          color="primary"
        >
          Далі
        </Button>
      </FormControl>
    </form>
  );
};

export default InputRun;