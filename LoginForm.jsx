import React from 'react';

function LoginForm({ formData, onFormDataChange }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onFormDataChange({ [name]: value });
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form>
        <fieldset>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email || ''}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password || ''}
              onChange={handleInputChange}
              required
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default LoginForm;