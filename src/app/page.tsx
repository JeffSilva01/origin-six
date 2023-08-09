import { Header } from '@/components/header'
import { Testimonials } from '@/components/home/testimonials'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-zinc-50  pb-20 pt-40 lg:py-40" id="home">
          <div className="m-auto max-w-7xl lg:flex lg:flex-row-reverse lg:items-center lg:justify-between">
            <Image
              className="w-11/12 max-w-xl rounded shadow-[3rem_-3rem_0px_#CCF4E6] md:m-auto lg:m-0"
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
              alt=""
              width={561}
              height={375}
            />
            <div className="mx-6 text-center lg:text-start">
              <h2 className="mb-4 mt-8 font-title text-3xl font-bold text-dark">
                Saúde natural para <br /> os seus cabelos
              </h2>
              <p className="mb-8 font-text text-neutral-500">
                Um salão exclusivo em São Paulo, <br /> especializado em
                tratamentos naturais.
              </p>
              <a
                className="inline-flex h-14 items-center rounded bg-primary px-8 font-text font-medium text-zinc-50"
                href="https://wa.me/5585998655310"
                target="_blank"
              >
                Agendar um horário
              </a>
            </div>
          </div>
        </section>
        <div className="h-0.5 bg-gradient-to-r from-zinc-50 to-primary"></div>
        <section className="pb-20 pt-[8rem] lg:py-40" id="about">
          <div className="m-auto max-w-7xl items-start lg:flex lg:gap-16">
            <Image
              className="h-auto rounded-r-lg shadow-[-8.5rem_-3rem_0px_#CCF4E6] lg:-ml-16"
              src="https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
              alt=""
              width={617}
              height={412}
            />
            <div className="mx-6 space-y-4">
              <h2 className="mt-8 font-title text-3xl font-bold text-dark lg:mt-0">
                Sobre nós
              </h2>
              <p className="font-text text-neutral-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse sagittis arcu quis nisi luctus, id accumsan felis
                tristique. Proin quis bibendum diam. Sed consequat nisl laoreet
                eros ultricies pellentesque. Nullam in est porta, pellentesque
                massa vitae, vehicula risus.
              </p>
              <p className="font-text text-neutral-500">
                In placerat, felis vitae sodales dictum, lacus quam pretium mi,
                ut pretium urna turpis eu dui. Vestibulum id ullamcorper nibh.
                Donec luctus, nunc finibus elementum suscipit, tortor augue
                vulputate sapien, vitae feugiat enim augue sed.{' '}
              </p>
              <p className="font-text text-neutral-500">
                Quisque id aliquam elit. Suspendisse congue pharetra maximus.
                Duis rutrum velit a leo euismod dictum. Sed sodales est
                efficitur arcu tincidunt tincidunt. Curabitur fringilla, risus
                at feugiat feugiat, nisl nulla tincidunt tellus, elementum
                elementum lorem nisl eleifend dolor. Nullam eget dui at sem
                ullamcorper luctus.
              </p>
            </div>
          </div>
        </section>
        <div className="h-0.5 bg-gradient-to-l from-zinc-50 to-primary"></div>
        <section className="bg-zinc-50 px-6 py-20 lg:py-40" id="services">
          <h2 className="mb-4 font-title text-3xl font-bold text-dark md:text-center">
            Serviços
          </h2>
          <p className="mb-16 max-w-lg font-text text-dark md:mx-auto md:text-center">
            Com mais de 10 anos no mercado, o{' '}
            <span className="font-bold text-primary">Beautysalon</span> já
            conquistou clientes de inúmeros países com seus tratamentos
            exclusivos e totalmente naturais
          </p>
          <div className="mx-auto flex flex-col gap-6 md:flex-row lg:max-w-7xl">
            <div className="flex flex-col items-center rounded-t-lg border-b-4 border-primary bg-white px-8 py-14 text-center shadow-lg">
              <Image src="/woman-hair.svg" alt="" width={80} height={80} />
              <h3 className="mb-3 mt-6 font-title text-3xl font-bold text-dark">
                Terapia capilar
              </h3>
              <p className="font-text text-neutral-500">
                Terapia completa para couro cabeludo e fios, protegendo todos os
                tipos de cabelos, inclusive os longos e finos.
              </p>
            </div>
            <div className="flex flex-col items-center rounded-t-lg border-b-4 border-primary bg-white px-8 py-14 text-center shadow-lg">
              <Image src="/trim.svg" alt="" width={80} height={80} />
              <h3 className="mb-3 mt-6 font-title text-3xl font-bold text-dark">
                Cortes
              </h3>
              <p className="font-text text-neutral-500">
                A nossa equipe é repleta de profissionais renomados, famosos por
                lançarem tendências com cortes diferenciados e clássicos.
              </p>
            </div>
            <div className="flex flex-col items-center rounded-t-lg border-b-4 border-primary bg-white px-8 py-14 text-center shadow-lg">
              <Image src="/cosmetic.svg" alt="" width={80} height={80} />
              <h3 className="mb-3 mt-6 font-title text-3xl font-bold text-dark">
                Tratamentos
              </h3>
              <p className="font-text text-neutral-500">
                O beautysalon conta com diversos tratamentos naturais e
                totalmente veganos, para qualquer tipo de cabelo.
              </p>
            </div>
          </div>
        </section>
        <div className="h-0.5 bg-gradient-to-r from-zinc-50 to-primary"></div>
        <Testimonials />
        <div className="h-0.5 bg-gradient-to-l from-zinc-50 to-primary"></div>
        <section className="bg-zinc-50 px-6 py-20 lg:py-40" id="contact">
          <div className="mx-auto max-w-7xl md:grid md:grid-cols-2 md:items-center md:gap-32">
            <div>
              <h2 className="mb-4 font-title text-3xl font-bold text-dark">
                Entre em contato <br /> com a gente!
              </h2>
              <p className="mb-8 font-text text-neutral-500">
                Entre em contato com a Beautysalon,
                <br /> queremos tirar sua dúvidas, ouvir suas
                <br /> críticas e sugestões.
              </p>
              <a
                className="inline-flex h-14 items-center rounded bg-primary px-8 font-text font-medium text-zinc-50"
                href="https://wa.me/5585998655310"
              >
                <Image
                  className="mr-3"
                  src="/whatsapp.svg"
                  width={24}
                  height={24}
                  alt=""
                />
                Entrar em contato
              </a>
            </div>
            <div className="mt-16 flex flex-col gap-8 md:mt-0">
              <p className="flex items-center gap-3 font-text text-neutral-500">
                <Image
                  className="mr-3"
                  src="/phone.svg"
                  width={24}
                  height={24}
                  alt=""
                />
                85 99865-5310
              </p>
              <p className="flex items-center gap-3 font-text text-neutral-500">
                <Image
                  className="mr-3"
                  src="/map-pin.svg"
                  width={24}
                  height={24}
                  alt=""
                />
                R. Amauri Souza, 346
              </p>
              <p className="flex items-center gap-3 font-text text-neutral-500">
                <Image
                  className="mr-3"
                  src="/email.svg"
                  width={24}
                  height={24}
                  alt=""
                />
                jeffsilva01.dev@gmail.com
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary px-6 py-20 lg:py-40">
        <div className="mx-auto max-w-7xl md:flex md:items-center md:justify-between">
          <div>
            <a href="#home" className="font-title text-2xl font-bold text-dark">
              beauty<span className="text-zinc-50">salon</span>.
            </a>
            <p className="mb-3 mt-8 font-text text-zinc-50">
              ©2021 Beautysalon.
            </p>
            <p className="font-text text-zinc-50">
              Todos os direitos reservados.
            </p>
          </div>
          <div className="mt-8 flex items-center gap-8">
            <Image src="/instagram.svg" alt="" width={24} height={24} />
            <Image src="/facebook.svg" alt="" width={24} height={24} />
            <Image src="/youtube.svg" alt="" width={24} height={24} />
          </div>
        </div>
      </footer>
    </>
  )
}
