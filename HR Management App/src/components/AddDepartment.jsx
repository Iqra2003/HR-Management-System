import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddDepartment = () => {
    const [department, setDepartment] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Department state:", department);

        // Ensure department is not empty before sending
        if (!department.trim()) {
            alert("Please enter a department name.");
            return;
        }

        axios.post('http://localhost:3000/auth/add_department', { department })
            .then(result => {
                if (result.data.Status) {
                    navigate('/dashboard/department');
                } else {
                    alert(result.data.Error);
                }
            })
            .catch(err => {
                console.error("Error occurred:", err);
                alert("An error occurred while adding the department: " + err.message);
            });
    }

    return (
        <div className='d-flex justify-content-center align-items-center h-75'>
            <div className='p-3 rounded w-25 border'>
                <h2>Add Department</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="department"><strong>Department:</strong></label>
                        <input 
                            type="text" 
                            name='department' 
                            placeholder='Enter Department'
                            value={department} // Control the input value
                            onChange={(e) => setDepartment(e.target.value)} 
                            className='form-control rounded-0' 
                        />
                    </div>
                    <button type="submit" className='btn btn-success w-100 rounded-0 mb-2'>Add Department</button>
                </form>
            </div>
        </div>
    );
}

export default AddDepartment;
