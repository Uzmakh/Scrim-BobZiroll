import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  });

  return (
    <>
      <label>
        First Name:
        <input
          type="text"
          value={form.firstName}
          onChange={(e) => {
            setForm({ ...form, firstName: e.target.value });
          }}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          value={form.lastName}
          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </label>
      <p>{form.firstName}</p>
      <p>{form.lastName}</p>
      <p>{form.email}</p>
    </>
  );
};

export default Form;
