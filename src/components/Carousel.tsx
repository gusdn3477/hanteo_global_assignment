import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import '../assets/slider.css';
import { cardEvents } from '../data/cardEvents';

const MySlider = Slider as unknown as React.FC<any>;

const Carousel = () => {
  const settings = {
    infinite: false,
    speed: 500, // 슬라이드 속도
    slidesToShow: 1, // 한 번에 보여줄 슬라이드 수
    slidesToScroll: 1, // 한 번에 스크롤할 슬라이드 수
    centerMode: true, // 현재 슬라이드를 가운데 정렬
    centerPadding: '15px', // 양쪽에 보일 카드의 너비
    arrows: false,
    dots: true,
  };

  return (
    <MySlider {...settings}>
      {cardEvents.map((card) => (
        <div key={card.id} className="mt-12">
          <div className="flex items-center justify-center">
            <div className="relative">
              {/* <img
                src={album.nfcImageUrl || ''}
                alt={card.title}
                className="h-[457px] w-[290px] rounded-2xl"
              /> */}
            </div>
          </div>
          <section className="mt-3 flex flex-col">
            <div className="flex w-full items-center justify-between">
              <strong className="w-3/4 truncate">{card.title}</strong>
              <button className="rounded-full border border-red-400 text-red-400">투표하기</button>
            </div>
            <p className="flex justify-end text-sm text-[#6C6C6C]">{card.date}</p>
          </section>
        </div>
      ))}
    </MySlider>
  );
};

export default Carousel;
