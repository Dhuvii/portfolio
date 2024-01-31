import Image from "next/image";
import profile_pic from "../../public/profile_pic.jpg";

export default function Home() {
  return (
    <main>
      {/* hero */}
      <section className="">
        <header className="relative w-full h-[55dvh] bg-gradient-to-b from-black to-gray-950">
          {/* grid pattern */}
          <div className="pointer-events-none absolute inset-x-0 h-full w-full [mask-image:linear-gradient(180deg,transparent,black)]">
            <div className="pattern -ml-2 -mt-1 h-full w-full opacity-80"></div>
          </div>
          {/* end of grid pattern */}
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute z-20 -mt-72 w-96 aspect-square rounded-[5rem] overflow-hidden shadow-lg">
                <Image
                  fill
                  src={profile_pic}
                  placeholder="blur"
                  className="w-full h-full object-cover grayscale"
                  alt="Thuvaragan Parameshwaran's profile picture"
                />
              </div>
              <div className="absolute z-10 rotate-[15deg] opacity-65 -mt-72 w-96 aspect-square rounded-[3rem] overflow-hidden shadow-lg">
                <Image
                  fill
                  src={profile_pic}
                  placeholder="blur"
                  className="w-full h-full object-cover grayscale"
                  alt="Thuvaragan Parameshwaran's profile picture"
                />
              </div>
            </div>
          </div>
        </header>

        <div className="mt-28">
          <h1 className="text-6xl font-bold tracking-wide text-gray-800 text-center">
            Thuvaragan Parameshwaran
          </h1>

          <p className="mt-3 text-base font-normal text-gray-600 text-center tracking-wider">
            Full stack web application developer
          </p>

          <div className="mt-12 flex items-center justify-center gap-12">
            <div className="flex items-start justify-start gap-2">
              <div className="rounded-full p-2 bg-green-100 text-green-700 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M17 12a5 5 0 1 1-9.999 0A5 5 0 0 1 17 12z" />
                    <path d="M13.848 13.913c.1-.606.152-1.256.152-1.913s-.052-1.307-.152-1.913a7.9 7.9 0 0 0-.434-1.623c-.185-.464-.406-.832-.649-1.083C12.523 7.129 12.263 7 12 7s-.523.13-.765.38c-.243.252-.463.62-.65 1.084a7.9 7.9 0 0 0-.433 1.623c-.1.606-.152 1.256-.152 1.913s.052 1.307.152 1.913c.1.607.248 1.158.434 1.623c.185.464.406.832.649 1.083c.242.252.502.381.765.381s.523-.13.765-.38c.243-.252.463-.62.65-1.085a7.9 7.9 0 0 0 .433-1.622Z" />
                    <path
                      stroke-linecap="round"
                      d="M7 12h10M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2c.811 0 1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 2.505-.837 4.437-2 5.913M3.193 14c.857 4.298 4.383 6.513 6.706 7.527c.721.315 1.082.473 2.101.473c1.02 0 1.38-.158 2.101-.473c.579-.252 1.231-.58 1.899-.994"
                    />
                  </g>
                </svg>
              </div>

              <div className="">
                <h3 className="text-5xl text-gray-800">10+</h3>
                <p className="text-[0.6rem] text-gray-600 uppercase tracking-wider">
                  successfull projects
                </p>
              </div>
            </div>

            <div className="flex items-start justify-start gap-2">
              <div className="rounded-full p-2 bg-blue-100 text-blue-700 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="1.5"
                    d="m18.66 8.286l.368-.368c.342-.343.514-.514.617-.692a1.562 1.562 0 0 0 0-1.562c-.103-.178-.275-.35-.617-.692c-.342-.342-.514-.514-.692-.616a1.562 1.562 0 0 0-1.562 0c-.178.102-.35.274-.692.616l-.368.368m-4.419 10.31l-5.523 5.524c-.343.343-.514.514-.692.617a1.562 1.562 0 0 1-1.562 0c-.179-.103-.35-.274-.692-.617c-.343-.342-.514-.514-.617-.692a1.562 1.562 0 0 1 0-1.562c.103-.178.274-.35.617-.692l5.523-5.523M18 17.75c-.898.827-1.542 1.24-2.286 1.24c-1.079 0-1.947-.868-3.682-2.604l-4.42-4.419C5.878 10.233 5.01 9.365 5.01 8.286c0-1.078.868-1.946 2.604-3.682C9.349 2.868 10.217 2 11.295 2c1.079 0 1.947.868 3.682 2.604l4.42 4.419C21.131 10.758 22 11.626 22 12.705c0 .747-.416 1.392-1.248 2.295"
                  />
                </svg>
              </div>

              <div className="">
                <h3 className="text-5xl text-gray-800">5 Yrs</h3>
                <p className="text-[0.6rem] text-gray-600 uppercase tracking-wider">
                  Experience
                </p>
              </div>
            </div>

            <div className="flex items-start justify-start gap-2">
              <div className="rounded-full p-2 bg-pink-100 text-pink-700 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M8 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0Zm14 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0ZM8 19a3 3 0 1 1-6 0a3 3 0 0 1 6 0Zm14 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z" />
                    <path
                      stroke-linecap="round"
                      d="M8 5h8m3 11v-3m0-5v1m-3 10h-3m-3 0H8m-3-3V8"
                    />
                  </g>
                </svg>
              </div>

              <div className="">
                <h3 className="text-5xl text-gray-800">8+</h3>
                <p className="text-[0.6rem] text-gray-600 uppercase tracking-wider">
                  Frameworks
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* hero */}
    </main>
  );
}
