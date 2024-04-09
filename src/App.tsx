import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import Login from "./Component/Login";
import './App.css'

function App() {
  const saveName = localStorage.getItem("name");
  const [isUser, setisUser] = useState<boolean>(saveName ? true : false);
  const [name, setName] = useState<string | null>(saveName);
  const [age, setAge] = React.useState("");
  const [state, setState] = React.useState("");
  const [uni, setUni] = React.useState("");
  const [deg, setDeg] = React.useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement> | undefined
  ): void => {
    if (event) {
    setAge(event.target.value );
    setState(event.target.value);
    setUni(event.target.value);
    setDeg(event.target.value );
    }
  };
  const handleChange1 = (
    event: React.ChangeEvent<HTMLInputElement> | undefined
  ): void => {
    if (event) {
      setName(event.target.value);
    
    }
  };
  const handleClick = (): void => {
    if (name && age && state && uni && deg ) {
      setisUser(true);
      localStorage.setItem("name", name );
      localStorage.setItem("age", age );
      localStorage.setItem("state", state );
      localStorage.setItem("uni", uni );
      localStorage.setItem("deg", deg );
    }
  };
  return (
    <>
      {/* <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "155ch" },
        }}
        noValidate
        autoComplete="off"
      >
       
      </Box> */}
      <Box
        sx={{
          "& > :not(style)": { width: "155ch"},
        padding:"25px"}}
      >
         <TextField
          onChange={handleChange1}
          id="outlined-basic"
          label="Type in search terms"
          variant="outlined"
          
          
        />
        <FormControl fullWidth >
        <h5 style={{fontFamily:"sans-serif"}}>Semester</h5>
          <Select
          
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="date"
            onChange={handleChange}
           
          >
            
            <MenuItem  value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
       
          <h5  style={{fontFamily:"sans-serif"}}>Federal State</h5>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state}
            label="State"
            onChange={handleChange}
          >
            <MenuItem value={10}>Hamburg</MenuItem>
            <MenuItem value={20}>Berlin</MenuItem>
            <MenuItem value={30}>Munich</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <h5  style={{fontFamily:"sans-serif"}}>University</h5>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={uni}
            label="univercity"
            onChange={handleChange}
          >
            <MenuItem value={10}>HTW</MenuItem>
            <MenuItem value={20}>Arden</MenuItem>
            <MenuItem value={30}>EIT</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <h5  style={{fontFamily:"sans-serif"}}>Type Of Degree</h5>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={deg}
            label="Degree"
            onChange={handleChange}
          >
            <MenuItem value={10}>Master</MenuItem>
            <MenuItem value={20}>Bachelor's</MenuItem>
            <MenuItem value={30}>Associate</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">(Partial) courses of study</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="All"
            />
            <FormControlLabel value="male" control={<Radio />} label="Partial courses of study" />
            <FormControlLabel value="other" control={<Radio />} label="Course Of Study" />
          </RadioGroup>
          <FormLabel id="demo-radio-buttons-group-label">Uni-assist responsible</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="All"
            />
            <FormControlLabel value="male" control={<Radio />} label="Yes" />
            <FormControlLabel value="other" control={<Radio />} label="No" />
          </RadioGroup>
          <FormLabel id="demo-radio-buttons-group-label">Online-only application</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="All"
            />
            <FormControlLabel value="male" control={<Radio />} label="Yes" />
            <FormControlLabel value="other" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
   
      </Box>
    
      <div className="relative mx-auto" >
      <Stack spacing={2} direction="row" sx={{marginLeft:"20px"}}>
      <Button onClick={handleClick} variant="contained">Login</Button>
    </Stack>
      </div>
      {/* <Login></Login> */}
    </>
  );
}

export default App;
