import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // Asegúrate de que la ruta es correcta

const FirestoreData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "usuarios"));
        const dataArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setData(dataArray);
      } catch (error) {
        console.error("Error al obtener los datos: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Datos de<strong className="purple"> Firebase</strong> 
      </h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <strong>Correo:</strong> {item.correo}<br />
            <strong>Informacióoon:</strong> {item.información}<br />
            <strong>Nombre:</strong> {item.nombre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FirestoreData;
