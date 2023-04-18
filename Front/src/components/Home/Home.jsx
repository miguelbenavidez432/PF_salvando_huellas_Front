import React from "react";
import style from "./Home.module.css";

export default function Home() {
  return (
    //contiene ademas del titulo imagenes que se mostraran automaticamente y las redes sociales para ir
    <div className={style.container}>
      <h1 className={style.title}>SALVANDO HUELLAS!</h1>

      <div className={style.img_Container}>
        {/*-------------------------------------------------------------------*/}

        <div class={style.slideshowContainer}>
          <div class={style.slideshow}>
            <img src="/img/home-dogs1.png" alt="Image 1" />
            <img src="/img/home-dogs2.png" alt="Image 2" />
            <img src="/img/home-dogs3.png" alt="Image 3" />
            <img src="/img/home-dogs4.png" alt="Image 4" />
            <img src="/img/home-dogs5.png" alt="Image 5" />
            <img src="/img/home-dogs6.png" alt="Image 6" />
            <img src="/img/home-dogs7.png" alt="Image 7" />
            <img src="/img/home-dogs8.png" alt="Image 8" />
            <img src="/img/home-dogs9.png" alt="Image 9" />
            <img src="/img/home-dogs10.png" alt="Image 10" />
          </div>
        </div>

        {/*-------------------------------------------------------------------*/}

        {/* <img className={style.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMHzZqXN5Oyq8D68x_x7jMVftbrCqI_aTIIA&usqp=CAU" alt="refugio" /> */}
      </div>

      <div className={style.iconsContainer}>
        <div>
          <h5 className={style.follow}>siguenos en redes sociales:</h5>

          <div className={style.icons}>
            {" "}
            {/*aqui pego los links de las redes sociales o contactos */}
            <a
              href="https://www.facebook.com/profile.php?id=100079609239145"
              target="_blank"
            >
              <img
                loading="lazy"
                alt="Síganos en Facebook"
                height="35"
                width="35"
                src=" https://1.bp.blogspot.com/-Pop-U7OywXs/YPhkfrImyiI/AAAAAAAAA1Y/UBnVfTK9j2U-bIUqwZYMNSQPvz_l06mbwCPcBGAYYCw/s0/facebook-icono.png"
                title="Síganos en Facebook"
              />
            </a>
            <a
              href="https://www.instagram.com/salvandohuellas9/"
              target="_blank"
            >
              <img
                loading="lazy"
                alt="Síganos en Instagram"
                height="35"
                width="35"
                src="https://1.bp.blogspot.com/-VFfOISywV0c/YPhkeRXuRQI/AAAAAAAAA1M/L75S9Usg5AovunH2Y-VzqJbaaY1LuK3eACPcBGAYYCw/s0/Instagram-icono.png"
                title="Síganos en Instagram"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
