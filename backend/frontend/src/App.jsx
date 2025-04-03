import React from 'react';
import { Telegram } from '@twa-dev/sdk';

function App() {
  const handleUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    
    await fetch('http://localhost:8000/upload', {
      method: 'POST',
      body: formData
    });
    Telegram.WebApp.showAlert('Файл загружен!');
  };

  return (
    <div>
      <input type="file" onChange={handleUpload} />
    </div>
  );
}
export default App;
