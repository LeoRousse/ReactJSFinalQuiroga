import { useState } from 'react';

function CheckoutForm({ onConfirm }) {
  const [ name, setName ] = useState("");
  const [ phone, setPhone ] = useState("");
  const [ email, setEmail ] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = { name, phone, email };

    onConfirm(userData);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="field">
        <label className="label">Nombre</label>
        <div className="control">
          <input className="input" type="text" value={name} onChange={({ target }) => setName(target.value)} />
        </div>
      </div>
      <div className="field">
        <label className="label">Teléfono</label>
        <div className="control">
          <input className="input" type="text" value={phone} onChange={({ target }) => setPhone(target.value)} />
        </div>
      </div>
      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input className="input" type="email" value={email} onChange={({ target }) => setEmail(target.value)} />
        </div>
      </div>
      <div className="field is-grouped is-grouped-centered">
        <div className="control">
          <button type="submit" className="button is-primary">Confirmar</button>
        </div>
      </div>
    </form>
  );
}

export default CheckoutForm;