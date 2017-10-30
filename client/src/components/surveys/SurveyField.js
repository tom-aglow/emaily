import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
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
      <p className="help is-danger">{touched && error}</p>
    </div>
  );
};
