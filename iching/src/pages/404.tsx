import React, { ReactElement } from 'react';
import Navbar from '../components/Navbar';

export default function FourOFour (): ReactElement {
  return (
    <>
      <Navbar />
      <div className="fourofour">
        <h1>404: Page Not Found</h1>
      </div>
    </>
  )
}

