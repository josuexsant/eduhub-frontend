import { MainLayout } from "../layouts/MainLayout";
import img from "../assets/img.svg";
import { Button } from "../components/Button";
import { CardImage } from "../components/CardImage";
import { CardEmpty } from "../components/CardEmpty";
import waveTop from "../assets/wave-top.svg";
import waveBottom from "../assets/wave-bottom.svg";

export const Landing = () => {
  return (
    <MainLayout>
      <div className="blocks block h-auto relative top-16">
        {/* Block1 */}
        <div className="grid grid-cols-12 mx-28">
          <div className="col-span-7 p-20">
            <h2>Bienvenido a un portafolio</h2>
            <h1>INCREIBLE</h1>
            <p className="mb-5">
              Una plataforma pensada para que los estudiantes universitarios
              tengan un buen portafolio profesional que los prepare para su
              futuro...
            </p>
            <Button className="btn-1">¡Comienza ahora!</Button>
          </div>

          <div className="col-span-5 flex p-20 justify-center">
            <img src={img} alt="Image" />
          </div>
        </div>
        {/* Block1 */}

        {/* Block2 */}
        <div>
          <img src={waveTop} alt="wave" className="w-full" />
        </div>
        <div className="bg-color-5 ">
          <div className="flex mx-28 flex-row justify-around txt-color-3">
            {/* InfoCard */}
            <div className=" grid grid-cols-1 mx-5 md:grid-cols-5 w-full md:w-96 my-10 justify-center content-center">
              <div className="md:col-span-2 flex p-2 justify-center">
                <img src={img} alt="Image" />
              </div>
              <div className="md:col-span-3">
                <h3>Aprende</h3>
                <p className="mb-5">
                  Desarrolla un proyecto nuevo paso a paso con nuestros
                  roadmaps.
                </p>
              </div>
            </div>
            {/* InfoCard */}

            {/* InfoCard */}
            <div className=" grid grid-cols-1 mx-5 md:grid-cols-5 w-full md:w-96 my-10 justify-center content-center">
              <div className="md:col-span-2 flex p-2 justify-center">
                <img src={img} alt="Image" />
              </div>
              <div className="md:col-span-3">
                <h3>Diviértete</h3>
                <p className="mb-5">
                  Ponte a prueba con todos los retos que tenemos para ti.
                </p>
              </div>
            </div>
            {/* InfoCard */}

            {/* InfoCard */}
            <div className=" mx-5 grid grid-cols-1 md:grid-cols-5 w-full md:w-96 my-10 justify-center content-center">
              <div className="md:col-span-2 flex p-2 justify-center">
                <img src={img} alt="Image" />
              </div>
              <div className="md:col-span-3">
                <h3>Crea</h3>
                <p className="mb-5">
                  Con cada proyecto, estas a un paso mas cerca de tener un
                  portafolio para el mundo laboral moderno
                </p>
              </div>
            </div>
            {/* InfoCard */}
          </div>
        </div>
        <div>
          <img src={waveBottom} alt="wave" className="w-full" />
        </div>
        {/* Block2 */}

        {/* Block3 */}
        <div className="flex flex-col lg:grid lg:grid-cols-10 lg:p-10 lg:my-20 mx-28">
          <div className="flex lg:col-span-3 content-center justify-center">
            <img src={img} alt="" />
          </div>
          <div className="text-right lg:col-span-7">
            <h2 className="txt-color-5">Comienza a desarrollar</h2>
            <h3 className="txt-color-1">
              ...y a llenar tu portafolio con nuevos proyectos a tu propio
              ritmo.
            </h3>
          </div>
        </div>
        {/* Block3 */}

        {/* Block4 */}
        <div className="bg-color-1 txt-color-3 flex">
          <div className="mx-28 my-20 flex flex-col items-center">
            <div className="grid grid-cols-7 mb-20">
              <div className="col-span-4">
                <h2>¿Perdido?</h2>
                <h3>
                  ¡Guíate con nuestros{" "}
                  <span className="txt-color-4">ROAPMAPS</span> y al terminar
                  logra un proyecto perfecto para agregar a tu portafolio!{" "}
                </h3>
              </div>
              <div className="col-span-3 flex p-10 justify-center">
                <img src={img} alt="" />
              </div>
            </div>

            <div className="flex justify-center">
              <CardImage className="mx-10" svg={img} topic="Angular" />
              <CardImage className="mx-10" svg={img} topic="Angular" />
              <CardImage className="mx-10" svg={img} topic="Angular" />
            </div>
            <Button className="btn-2 mt-16">Ver todos</Button>
          </div>
        </div>
        {/* Block4 */}

        {/* Block5 */}
        <div className="my-20 mx-20 grid grid-cols-12">
          <div className="col-span-5 flex flex-col">
            <h3 className="txt-color-5">Fortalece tus habilidades</h3>
            <h4 className="txt-color-1">
              Un apoyo adicional para tu crecimiento academico y profesional
            </h4>
          </div>
          <div className="col-span-7 p-16 ">
            <ul>
              <li> Realiza prácticas para entender mejor el tema.</li>
              <li>¡Manten tu racha intacta!</li>
              <li>Avanza con tu proyecto a tu ritmo.</li>
              <li>Has practicas con feedback</li>
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Landing;
