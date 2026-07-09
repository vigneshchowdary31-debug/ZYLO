import SEO from "../components/shared/SEO";
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc
} from 'firebase/firestore';
export default function Admin() {
  const [employees, setEmployees] = useState([]);
  const handleLogout = async () => {
    await signOut(auth);
  };
  const [form, setForm] = useState({
    name: '',
    role: '',
    description: '',
    image: '',
    order: ''
  });

  const [imageFile, setImageFile] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const employeesCollection = collection(db, 'employees');

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const data = await getDocs(employeesCollection);

      console.log("Documents found:", data.docs.length);

      data.docs.forEach((doc) => {
        console.log("Employee:", doc.id, doc.data());
      });

      setEmployees(
        data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    } catch (error) {
      console.error("Firestore Error:", error);
    }
  };
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const editEmployee = (employee) => {
    setEditingId(employee.id);

    setForm({
      name: employee.name || '',
      role: employee.role || '',
      description: employee.description || '',
      image: employee.image || '',
      order: employee.order || ''
    });
  };

  const addEmployee = async (e) => {
    e.preventDefault();

    if (!form.name || !form.role) {
      alert('Please fill required fields');
      return;
    }

    let imageUrl = '';

    if (imageFile) {
      const data = new FormData();

      data.append('file', imageFile);
      data.append('upload_preset', 'zylo-employees');

      const response = await fetch(
        'https://api.cloudinary.com/v1_1/dgjcon69o/image/upload',
        {
          method: 'POST',
          body: data
        }
      );

      const uploadedImage = await response.json();

      imageUrl = uploadedImage.secure_url;
    }

    if (editingId) {

      const employeeDoc = doc(db, 'employees', editingId);

      await updateDoc(employeeDoc, {
        name: form.name,
        role: form.role,
        description: form.description,
        image: imageUrl || form.image,
        order: Number(form.order)
      });

    } else {

      await addDoc(employeesCollection, {
        name: form.name,
        role: form.role,
        description: form.description,
        image: imageUrl,
        order: Number(form.order)
      });
    }

    setForm({
      name: '',
      role: '',
      description: '',
      image: '',
      order: ''
    });

    setImageFile(null);
    setEditingId(null);
    fetchEmployees();
  };

  const deleteEmployee = async (id) => {
    const employeeDoc = doc(db, 'employees', id);

    await deleteDoc(employeeDoc);

    fetchEmployees();
  };

  return (
    <div style={{ padding: '40px' }}>
      <SEO title="Admin" noindex={true} />
      <button
        onClick={handleLogout}
        style={{
          marginBottom: '20px',
          padding: '10px 20px',
          cursor: 'pointer'
        }}
      >
        Logout
      </button>
      <h1>Zylo Admin Dashboard</h1>

      <form
        onSubmit={addEmployee}
        style={{
          marginTop: '30px',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          maxWidth: '500px'
        }}
      >
        <input
          name="name"
          placeholder="Employee Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="role"
          placeholder="Role"
          value={form.role}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />
        <input
          type="number"
          name="order"
          placeholder="Display Order"
          value={form.order}
          onChange={handleChange}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])}
        />


        <button type="submit">
          {editingId ? 'Update Employee' : 'Add Employee'}
        </button>
      </form>

      <hr style={{ margin: '40px 0' }} />

      <h2>Employees</h2>

      {employees.map((emp) => (
        <div
          key={emp.id}
          style={{
            border: '1px solid #ddd',
            padding: '15px',
            marginBottom: '15px'
          }}
        >
          <h3>{emp.name}</h3>
          <p>{emp.role}</p>
          <p>{emp.description}</p>

          <div style={{ display: 'flex', gap: '10px' }}>

            <button
              type="button"
              onClick={() => editEmployee(emp)}
            >
              Edit
            </button>

            <button
              type="button"
              onClick={() => deleteEmployee(emp.id)}
            >
              Delete
            </button>

          </div>
        </div>
      ))}
    </div>
  );
}