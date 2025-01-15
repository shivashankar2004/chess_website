import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  MenuItem,
} from "@material-ui/core";

import Button from "./Button";

function DialogBox({ open, setOpen }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    contact: "",
    address: "",
    programLevel: "",
    timing: "",
  });
  
  const [errors, setErrors] = useState({
    name: false,
    age: false,
    contact: false,
    address: false,
    programLevel: false,
    timing: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      name: formData.name.trim() === "",
      age: formData.age.trim() === "",
      contact: formData.contact.trim() === "",
      address: formData.address.trim() === "",
      programLevel: formData.programLevel.trim() === "",
      timing: formData.timing.trim() === "",
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).includes(true)) {
      console.log("Form Data Submitted:", formData);
      setOpen(false);
    }
  };

  const isFormValid = !Object.values(errors).includes(true);

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle className="text-xl font-bold text-center">
        Book a Demo Class
      </DialogTitle>
      <DialogContent className="p-6 w-full max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            error={errors.name} 
            helperText={errors.name ? "Name is required" : ""}
            className="w-full"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            type="number"
            required
            error={errors.age} 
            helperText={errors.age ? "Age is required" : ""}
            className="w-full"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Contact Number"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            type="tel"
            required
            error={errors.contact} 
            helperText={errors.contact ? "Contact number is required" : ""}
            className="w-full"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            error={errors.address} 
            helperText={errors.address ? "Address is required" : ""}
            className="w-full"
          />
          <TextField
            fullWidth
            margin="normal"
            select
            label="Program Level"
            name="programLevel"
            value={formData.programLevel}
            onChange={handleChange}
            required
            error={errors.programLevel} 
            helperText={errors.programLevel ? "Program Level is required" : ""}
            className="w-full"
          >
            <MenuItem value="beginner">Beginner</MenuItem>
            <MenuItem value="intermediate">Intermediate</MenuItem>
            <MenuItem value="advanced">Advanced</MenuItem>
          </TextField>
          <TextField
            fullWidth
            margin="normal"
            select
            label="Timing"
            name="timing"
            value={formData.timing}
            onChange={handleChange}
            required
            error={errors.timing} 
            helperText={errors.timing ? "Timing is required" : ""}
            className="w-full"
          >
            <MenuItem value="10-11am">10-11am</MenuItem>
            <MenuItem value="12-1pm">12-1pm</MenuItem>
            <MenuItem value="4-5pm">4-5pm</MenuItem>
          </TextField>
          <DialogActions className="flex justify-between mt-4">
            <Button
              text="Cancel"
              size="text-lg"
              bgColor="bg-red-500"
              textColor="text-white"
              hoverBgColor="hover:bg-red-600"
              hoverTextColor="hover:text-white"
              width="w-full"
              onClick={() => setOpen(false)}
            />
            <Button
              text="Submit"
              size="text-lg"
              bgColor="bg-blue-500"
              textColor="text-white"
              hoverBgColor="hover:bg-blue-600"
              hoverTextColor="hover:text-white"
              width="w-full"
              onClick={handleSubmit}
              disabled={!isFormValid} 
            />
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default DialogBox;
