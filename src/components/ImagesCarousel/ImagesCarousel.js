import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import { useDispatch } from "react-redux";

import "./ImagesCarousel.scss";

function ImagesCarousel({ mediaToRender }) {
  useEffect(() => {
    setTimeout(() => {
      const buttoms = document.querySelectorAll(
        ".sliderDot__list--class > li > button",
      );
      buttoms.forEach((buttom, index) => {
        buttom.classList.add("btn");
        buttom.classList.add("blend-Mode");
        buttom.innerHTML = index + 1;
      });
    }, 500);
  }, []);
  const dispatch = useDispatch();

  function displaySelectedFilm(event, media, index) {
    dispatch({
      type: "updateSelectedMedia/movie",
      payload: { position_number: index, ...media },
    });
    handleActiveImage(event);
  }

  function handleActiveImage(event) {
    const imagesCarousel = document.querySelectorAll(
      ".imagesCarousel__container > ul > li > div >img",
    );
    imagesCarousel.forEach((image) => image.classList.remove("borderImage"));
    const selectedImage = event.target;
    selectedImage.classList.add("borderImage");
  }

  return (
    <>
      {mediaToRender?.length > 0 ? (
        <Carousel
          additionalTransfrom={0}
          arrows
          ssr={true} // means to render carousel on server-side.
          autoPlaySpeed={10000}
          centerMode={false}
          containerClass="imagesCarousel__container"
          dotListClass="sliderDot__list--class"
          draggable={true}
          focusOnSelect={false}
          infinite={false}
          itemClass="carrousel__item--movie"
          keyBoardControl
          minimumTouchDrag={0}
          renderButtonGroupOutside={false}
          renderDotsOutside={true}
          showDots={true}
          sliderClass=""
          slidesToSlide={1}
          swipeable={true}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 0,
              },
              items: 2.9,
              partialVisibilityGutter: 40,
            },
            // tablet: {
            //   breakpoint: {
            //     max: 1000,
            //     min: 0,
            //   },
            //   items: 4,
            //   partialVisibilityGutter: 0,
            // },
          }}
        >
          {mediaToRender.map((media, index) => (
            <div
              onDoubleClick={(event) =>
                displaySelectedFilm(event, media, index + 1)
              }
              key={index}
              className="imageContainer"
            >
              {media.poster_path === null ? (
                <img
                  alt="film-pic"
                  src="https://res.cloudinary.com/partycle/image/upload/v1634344600/defaultThumnailPlaylist_rwsh0u.jpg"
                />
              ) : (
                <img
                  alt="film-pic"
                  src={
                    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/" +
                    media.poster_path
                  }
                />
              )}
            </div>
          ))}
        </Carousel>
      ) : (
        <div className="spinner-border spinner-border-sm" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </>
  );
}

export default ImagesCarousel;
