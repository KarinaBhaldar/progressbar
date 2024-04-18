import React, { useState } from 'react';
import StepForm from './StepForm';
import ProgressIndicator from './ProgressIndicator';
import './App.css';


   
function App() {
  const [formData, setFormData] = useState({});
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4; // Total number of steps

  const handleFormDataChange = (data) => {
    setFormData({ ...formData, ...data });
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    // Submit form data, save to local storage, etc.
    // Redirect to next page or display summary
  };

  return (
    
  <div className="text-right">
  <h1>CODEZILA</h1>
  <p>WELCOME ALL CANDIDATES</p>

  
    <div>
      <ProgressIndicator currentStep={currentStep} totalSteps={totalSteps} />
      <StepForm
        currentStep={currentStep}
        formData={formData}
        onFormDataChange={handleFormDataChange}
      />
      <div>
        {currentStep !== 1 && (
          <button onClick={handlePrevStep}>Previous</button>
        )}
        {currentStep !== totalSteps ? (
          <button onClick={handleNextStep}>Next</button>
        ) : (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
    </div>
  );
}

export default App;