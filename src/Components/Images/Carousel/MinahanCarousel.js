import React from "react";
import { Carousel, Image } from "react-bootstrap";
import DanBennett from "./DanBennett.png";
import DanCalla from "./DanCalla.png";
import DanEvie from "./DanEvie.png";
import Family from "./Family.png";
import Kids from "./Kids.png";
import KrystieDan from "./KrystieDan.png";
import KrystieDan2 from "./KrystieDan2.png";
import "./MinahanCarousel.css";

export function MinahanCarousel() {
  const carouselImages = [
    { pic: Family, altCaption: "Minahan's out for Dinner" },
    { pic: KrystieDan, altCaption: "Dan & Krystie" },
    { pic: KrystieDan2, altCaption: "Dan & Krystie at the GreenJackets" },
    { pic: Kids, altCaption: "First Day of School 2021!" },
    { pic: DanCalla, altCaption: "Dan & Calla" },
    { pic: DanEvie, altCaption: "Dan & Evie" },
    { pic: DanBennett, altCaption: "Dan & Bennett" },
  ];

  return (
    <Carousel fade prevLabel={null} nextLabel={null} id="mediaSize">
      {carouselImages.map((item) => (
        <Carousel.Item>
          <Image
            id="img"
            src={item.pic}
            className="d-block w-100 text-light"
            alt={item.altCaption}
          />
          <Carousel.Caption>
            <h3 className="fw-bold">{item.altCaption}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
