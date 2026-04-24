import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import {
    ContainerCarousel,
    ContainerMain,
    ContainerSection,
    SectionEyebrow,
    SectionText,
    SlideImage,
    Title,
} from './style';
import img1 from '../../assets/TesteCarr.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Carousel() {
    return (
        <ContainerMain id='projetos'>
            <ContainerSection>
                <SectionEyebrow>Projetos realizados</SectionEyebrow>

                <Title>Alguns ambientes que traduzem nosso processo na prática</Title>

                <SectionText>
                    Cada projeto combina direção estética, funcionalidade e detalhamento para gerar
                    espaços coerentes com a rotina e a identidade de quem vai usar.
                </SectionText>

                <ContainerCarousel>
                    <Swiper
                        cssMode={true}
                        navigation={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <SlideImage src={img1} alt="Projeto residencial com integração de ambientes" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <SlideImage src={img1} alt="Ambiente interno com marcenaria sob medida" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <SlideImage src={img1} alt="Espaço social com composição contemporânea" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <SlideImage src={img1} alt="Projeto com foco em iluminação e texturas" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <SlideImage src={img1} alt="Detalhe de area interna com acabamentos sofisticados" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <SlideImage src={img1} alt="Ambiente residencial com layout funcional" />
                        </SwiperSlide>
                    </Swiper>
                </ContainerCarousel>
            </ContainerSection>
        </ContainerMain>
  );
}