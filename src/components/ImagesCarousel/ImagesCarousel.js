import React from "react";
import Carousel from "react-multi-carousel";
import { useSelector, useDispatch } from "react-redux";

import "./ImagesCarousel.scss";

function ImagesCarousel({ mediaToRender }) {
  const dispatch = useDispatch();

  function displaySelectedFilm(media, index) {
    dispatch({
      type: "updateSelectedMedia/movie",
      payload: { position_number: index, ...media },
    });
  }

  function ArrowFix(arrowProps) {
    const { carouselState, children, ...restArrowProps } = arrowProps;
    return <span {...restArrowProps}> {children} </span>;
  }

  return (
    <>
      {mediaToRender?.length > 0 ? (
        <Carousel
          additionalTransfrom={0}
          arrows
          ssr={true} // means to render carousel on server-side.
          autoPlaySpeed={10}
          centerMode={false}
          containerClass="imagesCarousel__container"
          dotListClass="sliderDot__list--class"
          draggable={true}
          focusOnSelect={false}
          infinite={true}
          itemClass="carrousel__item--movie"
          keyBoardControl
          // customLeftArrow={
          //   <ArrowFix>
          //     <i className="fas fa-chevron-left carrousel__left--arrow"></i>
          //   </ArrowFix>
          // }
          // customRightArrow={
          //   <ArrowFix>
          //     <i className="fas fa-chevron-right carrousel__right--arrow"></i>
          //   </ArrowFix>
          // }
          minimumTouchDrag={0}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          showDots={false}
          sliderClass=""
          slidesToSlide={2}
          swipeable={true}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1000,
              },
              items: 2,
              partialVisibilityGutter: 40,
            },
            tablet: {
              breakpoint: {
                max: 1000,
                min: 0,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
        >
          {mediaToRender.map((media, index) => (
            <div
              onDoubleClick={() => displaySelectedFilm(media, index + 1)}
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
