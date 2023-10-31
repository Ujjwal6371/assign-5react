import React, { useState } from 'react';

function AgeCalculator() {
    const [dob, setDob] = useState('');
    const [age, setAge] = useState(null);

    const calculateAge = () => {
        const dobDate = new Date(dob);
        const today = new Date();

        if (isNaN(dobDate)) {
            alert('Please enter a valid date of birth.');
            return;
        }

        const ageDiff = today - dobDate;
        const ageDate = new Date(ageDiff);

        const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);

        setAge(`Your age is: ${calculatedAge} years old`);
    };

    return (
        <div className="age-calculator">
            <h1>Age Calculator</h1>
            <h6>Enter your Date of Birth</h6>
            {/* <label htmlFor="dob"></label> */}
            <input type="date" id="dob" value={dob} onChange={(e) => setDob(e.target.value)}
                style={{ width: '25%', fontSize: '18px' }} />

            <br />
            <br />
            <button className="btn btn-primary" onClick={calculateAge} >Calculate Age</button>
            <h4>{age}</h4>
        </div>
    );
}

export default AgeCalculator;
