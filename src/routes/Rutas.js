import React from 'react';
import {Routes, Route} from "react-router-dom";
import Layout from '../layout/Layout';
import Tabla from '../Components/Tabla/Tabla';

function Rutas() {
  return (
    <div>
      <Layout>
        <Routes>
            <Route path='/' element={<Tabla/>}/>
        </Routes>
      </Layout>
    </div>
  )
}

export default Rutas
