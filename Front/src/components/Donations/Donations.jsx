import styles from "./Donation.module.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

export default function Donation() {
  initMercadoPago("TEST-99c0a5cc-1346-4b33-9653-d582c80c7732");
  const [isReady, setIsReady] = useState(true);
  const [preferenceId, setPreferenceId] = useState(null);
  const [price, setPrice] = useState(100);
  const [showPay, setShowPay] = useState(false);

  const handlePrice = (e) => {
    let newPrice = Number(e.target.value);
    if (newPrice > 0) {
      setPrice(newPrice);
    } else setPrice(1)
  };

  const handleOnReady = () => {
    setIsReady(true);
  };

  const fetchPreferenceId = async () => {
    const response = await axios.post("/payment/donations", {
      unit_price: price,
    });
    setPreferenceId(response.data.preferenceId);
  };

  useEffect(() => {
    if(showPay){
      fetchPreferenceId();
    }
  }, [price, showPay]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>¡Salvando huellas!</h1>
      <div className={styles.containerh5}>
        <h5 className={styles.h5}>
          Donar dinero o insumos de alimentos para perritos en adopción puede
          marcar una gran diferencia en la vida de estos animales necesitados.
          Muchas organizaciones sin fines de lucro dependen de la generosidad de
          la gente para rescatar, cuidar y encontrar hogares amorosos para
          perros abandonados y en situación de calle. Además, adoptar un perro
          puede tener un impacto positivo en la salud mental y física de las
          personas, y ayudar a reducir la sobrepoblación de animales en
          situación de calle. Donar es una manera fácil y efectiva de contribuir
          a la sociedad y mejorar la vida de los perritos en adopción.
        </h5>
      </div>
      
        <div>
          <h4>¿Cuánto quieres donar?</h4>
          <input
            className={styles.input}
            value={price}
            onChange={handlePrice}
            type="number"
          />
          <button
            onClick={() => {
              setShowPay(true);
            }}
          >
            Ir a donar
          </button>
          <div className={showPay ? styles.wallet : styles.hide}>
            <button
              onClick={() => {
                setShowPay(false);
              }}
            >
              X
            </button>
            <h4>Donar con Mercado Pago</h4>
            {isReady && preferenceId ? (
            <Wallet
              initialization={{ preferenceId: preferenceId }}
              onReady={handleOnReady}
            />
            ) : (
              <span>Cargando...</span>
            )}
          </div>
        </div>
      
    </div>
  );
}
