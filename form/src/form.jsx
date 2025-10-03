import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    number: "",
    gender: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let tempErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
    } else if (formData.name.length < 4) {
      tempErrors.name = "Name must be at least 4 characters";
    }

    // Age validation
    if (!formData.age) {
      tempErrors.age = "Age is required";
    } else if (isNaN(formData.age) || formData.age <= 0) {
      tempErrors.age = "Enter a valid age";
    }

    // Number validation
    if (!formData.number) {
      tempErrors.number = "Number is required";
    } else if (!/^\d{10}$/.test(formData.number)) {
      tempErrors.number = "Number must be exactly 10 digits";
    }

    // Gender validation
    if (!formData.gender) {
      tempErrors.gender = "Please select your gender";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully ✅");
      console.log(formData);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      style={{ maxWidth: "400px", margin: "20px auto" }}
    >
      <h2>Form Validation Example</h2>

      <div>
        <label>Name:</label><br />
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>

      <div>
        <label>Age:</label><br />
        <input 
          type="number" 
          name="age" 
          value={formData.age} 
          onChange={handleChange} 
        />
        {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}
      </div>

      <div>
        <label>Number:</label><br />
        <input 
          type="text" 
          name="number" 
          value={formData.number} 
          onChange={handleChange} 
        />
        {errors.number && <p style={{ color: "red" }}>{errors.number}</p>}
      </div>

      <div>
        <label>Gender:</label><br />
        <input 
          type="radio" 
          name="gender" 
          value="Male" 
          checked={formData.gender === "Male"} 
          onChange={handleChange} 
        /> Male
        <input 
          type="radio" 
          name="gender" 
          value="Female" 
          checked={formData.gender === "Female"} 
          onChange={handleChange} 
        /> Female
        {errors.gender && <p style={{ color: "red" }}>{errors.gender}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
