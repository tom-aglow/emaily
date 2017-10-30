import React from 'react';

export default ({ input, label }) => {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <input
          className="input"
          placeholder="Type in something here"
          {...input}
        />
      </div>
    </div>
  );
};
