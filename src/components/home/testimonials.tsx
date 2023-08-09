'use client'
import { Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/pagination'

export function Testimonials() {
  return (
    <section className="py-20 lg:py-40" id="testimonials">
      <h2 className="mb-16 ml-6 w-64 font-title text-3xl font-bold text-dark md:mx-auto md:w-[481px] md:text-center">
        Depoimentos de quem já passou por aqui
      </h2>
      <div className="mx-auto max-w-7xl">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
        >
          <SwiperSlide>
            <div className="p-4">
              <blockquote className="rounded bg-white p-8 shadow-[0rem_0rem_0.75rem_0rem_#00000014]">
                <p className="relative indent-7 font-text text-dark">
                  <span className="absolute -left-7 -top-1 font-[serif] text-5xl leading-none text-primary">
                    &ldquo;
                  </span>
                  Eu sou cliente do Beautysalon há 5 anos e não troco por nada!
                  Certamente meu cabelo mudou muito depois que comecei a tratar
                  somente com produtos naturais e veganos. São profissionais
                  incríveis e qualificados.
                </p>
                <cite className="mt-6 flex items-center">
                  <Image
                    className="mr-2 rounded-full"
                    src="https://randomuser.me/api/portraits/lego/4.jpg"
                    alt=""
                    width={32}
                    height={32}
                  />
                  Wanessa Souza
                </cite>
              </blockquote>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-4">
              <blockquote className="rounded bg-white p-8 shadow-[0rem_0rem_0.75rem_0rem_#00000014]">
                <p className="relative indent-7 font-text text-dark">
                  <span className="absolute -left-7 -top-1 font-[serif] text-5xl leading-none text-primary">
                    &ldquo;
                  </span>
                  Eu ok cliente do Beautysalon há 5 anos e não troco por nada!
                  Certamente meu cabelo mudou muito depois que comecei a tratar
                  somente com produtos naturais e veganos. São profissionais
                  incríveis e qualificados.
                </p>
                <cite className="mt-6 flex items-center">
                  <Image
                    className="mr-2 rounded-full"
                    src="https://randomuser.me/api/portraits/lego/4.jpg"
                    alt=""
                    width={32}
                    height={32}
                  />
                  Wanessa Souza
                </cite>
              </blockquote>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-4">
              <blockquote className="rounded bg-white p-8 shadow-[0rem_0rem_0.75rem_0rem_#00000014]">
                <p className="relative indent-7 font-text text-dark">
                  <span className="absolute -left-7 -top-1 font-[serif] text-5xl leading-none text-primary">
                    &ldquo;
                  </span>
                  Eu sou cliente do Beautysalon há 5 anos e não troco por nada!
                  Certamente meu cabelo mudou muito depois que comecei a tratar
                  somente com produtos naturais e veganos. São profissionais
                  incríveis e qualificados.
                </p>
                <cite className="mt-6 flex items-center">
                  <Image
                    className="mr-2 rounded-full"
                    src="https://randomuser.me/api/portraits/lego/4.jpg"
                    alt=""
                    width={32}
                    height={32}
                  />
                  Wanessa Souza
                </cite>
              </blockquote>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}
