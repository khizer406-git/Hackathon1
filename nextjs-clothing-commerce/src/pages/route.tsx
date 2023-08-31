import { db } from '@vercel/postgres';
import { useState } from 'react';

const Name = () => {
  const [message, setMessage] = useState('');

  async function GET() {
    
    console.log(process.env.POSTGRES_URL)
    const client = await db.connect();
    try {
      await client.query(
        'CREATE TABLE IF NOT EXISTS Pets (Name varchar(255), Owner varchar(255));'
      );

      setMessage('Table created successfully');
    } catch (error) {
      console.error(error);
      setMessage('An error occurred');
    } finally {
      client.release();
    }
  }

  return (
    <div>
      <button onClick={GET} type="button">
        Click
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Name;
