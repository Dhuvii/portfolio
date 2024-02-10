import Image from "next/image";
import kifgo from "../../public/kifgo.png";
import kifgo2 from "../../public/kifgo-2.png";
import motionridge from "../../public/motionridge.png";
import motionridge2 from "../../public/motionridge-2.png";
import layerplots from "../../public/layerplots.png";
import layerplots2 from "../../public/layerplots-2.png";
import TestimonialProfilePic from "./TestimonialProfilePic";

export default function Home() {
  return (
    <main>
      {/* hero */}
      <section className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center px-5">
        {/* background effects */}
        <div className="pointer-events-none absolute inset-x-0 h-full w-full [mask-image:linear-gradient(0deg,transparent,black,transparent,transparent)]">
          <div className="pattern -ml-2 -mt-1 h-full w-full opacity-80"></div>
        </div>

        <div className="pointer-events-none absolute inset-0 -ml-32 mt-52 flex items-center justify-center">
          <div className="flex rotate-45 items-center justify-center">
            <div className="h-40 w-32 rounded-full bg-blue-500 opacity-25 blur-[100px] md:w-96"></div>
            <div className="h-64 w-52 rounded-full bg-pink-500 opacity-25 blur-[150px] md:w-[32rem]"></div>
          </div>
        </div>
        {/* background effects */}

        <h1 className="relative max-w-screen-lg text-center text-5xl font-bold text-white md:text-6xl">
          <span className="">
            Thuvaragan Parameshwaran <br /> your{" "}
            <span className="relative">
              <span className="relative z-20 text-blue-500">friendly Web</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute bottom-0 right-0 z-10 h-[0.58em] w-full fill-blue-500/60 md:-mb-3"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
              </svg>
            </span>{" "}
            Wizard
          </span>
        </h1>

        <p className="mt-8 max-w-3xl text-center text-sm/6 tracking-wide text-gray-400 md:text-base/6">
          I&apos;m passionate about crafting digital wonders and{" "}
          <span className="text-pink-400">solving problems </span> with lines of
          code. <br />
          Expertise in{" "}
          <span className="text-sky-400">Full Stack applications</span>,
          let&apos;s connect and build something extraordinary together
        </p>

        <div className="mx-auto mt-10 flex flex-col items-center justify-center divide-gray-700 md:flex-row md:divide-x">
          <div className="md:pr-5">
            <p className="text-center text-xs text-gray-300">
              You can find me at
            </p>
            <div className="mt-2 flex items-center justify-center gap-10">
              <a
                href="#"
                className="flex items-center justify-start gap-2 text-sm text-gray-200 hover:text-gray-100 hover:underline"
              >
                <span className="flex items-center justify-center rounded-full bg-gray-600 p-1 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                    />
                  </svg>
                </span>
                Github
              </a>

              <a
                href="#"
                className="flex items-center justify-start gap-2 text-sm text-gray-200 hover:text-gray-100 hover:underline"
              >
                <span className="flex items-center justify-center rounded-full bg-gray-600 p-1 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                    />
                  </svg>
                </span>
                Linkedin
              </a>
            </div>
          </div>

          <div className="mt-10 md:mt-0 md:pl-5">
            <p className="text-center text-xs text-gray-300">
              Download my resume
            </p>
            <div className="mt-2 flex items-center justify-center gap-10">
              <a
                href="#"
                className="flex items-center justify-start gap-2 text-sm text-gray-200 hover:text-gray-100 hover:underline"
              >
                <span className="flex items-center justify-center rounded-full bg-gray-600 p-1 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m2.755 14.716l.517 1.932c.604 2.255.907 3.383 1.592 4.114a4 4 0 0 0 2.01 1.16c.976.228 2.104-.074 4.36-.678c2.254-.604 3.382-.906 4.113-1.591c.06-.057.12-.116.176-.176a9.115 9.115 0 0 1-1.014-.15c-.696-.138-1.523-.36-2.501-.622l-.107-.029l-.025-.006c-1.064-.286-1.953-.524-2.663-.78c-.747-.27-1.425-.603-2.002-1.143a5.5 5.5 0 0 1-1.596-2.765c-.18-.769-.128-1.523.012-2.304c.134-.749.374-1.647.662-2.722l.535-1.994l.018-.07c-1.92.517-2.931.823-3.605 1.454a4 4 0 0 0-1.161 2.012c-.228.975.074 2.103.679 4.358"
                    />
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="m20.83 10.715l-.518 1.932c-.605 2.255-.907 3.383-1.592 4.114a4 4 0 0 1-2.01 1.161c-.097.023-.195.04-.295.052c-.915.113-2.032-.186-4.064-.73c-2.255-.605-3.383-.907-4.114-1.592a4 4 0 0 1-1.161-2.011c-.228-.976.074-2.103.679-4.358l.517-1.932l.244-.905c.455-1.666.761-2.583 1.348-3.21a4 4 0 0 1 2.01-1.16c.976-.228 2.104.074 4.36.679c2.254.604 3.382.906 4.113 1.59a4 4 0 0 1 1.161 2.012c.228.976-.075 2.103-.679 4.358m-9.778-.91a.75.75 0 0 1 .919-.53l4.83 1.295a.75.75 0 1 1-.389 1.448l-4.83-1.294a.75.75 0 0 1-.53-.918m-.776 2.898a.75.75 0 0 1 .918-.53l2.898.777a.75.75 0 1 1-.388 1.448l-2.898-.776a.75.75 0 0 1-.53-.919"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                Resume
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* hero */}

      {/* projects */}
      <section className="mx-auto min-h-[100dvh] w-full max-w-screen-xl px-5">
        <div className="mb-32">
          <h2 className="text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            “Best practices” don’t actually work.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-center text-base text-gray-400 sm:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            vero similique eligendi adipisci illo molestiae optio modi sequi
            quasi quam ullam velit iure autem, voluptate rem explicabo tenetur
            alias maiores.
          </p>
        </div>

        <div className="flex w-full flex-col items-start justify-between gap-10 md:flex-row">
          {/* image */}
          <div className="relative w-full md:w-[60%]">
            <div className="relative z-30 w-full">
              <div className="relative w-[90%] overflow-hidden rounded-xl border border-gray-700 bg-white/10 md:[transform:perspective(40cm)rotateY(30deg)]">
                {/* gradient line */}
                <div className="absolute inset-x-0 top-0 -mt-[1.9rem] flex h-8 w-full items-end overflow-hidden">
                  <div className="-mb-px flex h-[3px] w-full -scale-x-100">
                    <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                    <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 z-40 -mb-px flex h-8 w-full items-end overflow-hidden">
                  <div className="-mb-px flex h-[3px] w-full -scale-x-100">
                    <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                    <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                  </div>
                </div>
                {/* gradient line */}

                <div className="flex h-8 w-full items-center justify-start gap-2 p-3">
                  <div className="aspect-square w-3 rounded-full bg-white/20"></div>
                  <div className="aspect-square w-3 rounded-full bg-white/20"></div>
                  <div className="aspect-square w-3 rounded-full bg-white/20"></div>
                </div>

                <div className="relative inset-x-0 z-30 aspect-video w-full max-w-screen-md">
                  <Image
                    fill
                    src={kifgo}
                    placeholder="blur"
                    className="object-fit h-full w-full rounded-lg"
                    alt="Screenshot of the landing page of motionridge.com"
                  />
                </div>
              </div>

              <div className="absolute bottom-0 right-0 z-40 -mb-10 flex h-full w-[40%] items-end md:-mr-10">
                <div className="relative inset-x-0 z-20 aspect-video w-full max-w-screen-md">
                  {/* gradient line top */}
                  <div className="absolute inset-x-0 top-0 -mt-[1.9rem] flex h-8 w-full items-end overflow-hidden">
                    <div className="-mb-px flex h-[3px] w-full -scale-x-100">
                      <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                      <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                    </div>
                  </div>
                  {/* gradient line top */}
                  <Image
                    fill
                    src={kifgo2}
                    placeholder="blur"
                    className="object-fit h-full w-full rounded-md shadow-xl"
                    alt="Screenshot of the landing page of motionridge.com"
                  />

                  {/* gradient line bottom */}
                  <div className="absolute inset-x-0 bottom-0 -mb-[2.05rem] flex h-8 w-full rotate-180 items-end overflow-hidden">
                    <div className="-mb-px flex h-[3px] w-full -scale-x-100">
                      <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                      <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                    </div>
                  </div>
                  {/* gradient line bottom */}
                </div>
              </div>
            </div>

            <div className="absolute inset-x-0 z-10 -mt-10 flex justify-center">
              <div className="h-20 w-52 bg-[#cd0a5d] blur-[150px]"></div>
            </div>
          </div>
          {/* image */}

          {/* content */}
          <div className="mt-10 w-full md:mt-0 md:w-[40%]">
            <div className="flex w-full items-center justify-between gap-5">
              <h3 className="text-xl font-semibold text-white">Kifgo.lk</h3>
              <a
                target="_blank"
                href="https://nextjs.org/"
                className="flex items-center justify-start gap-2 text-xs text-gray-200 hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 rotate-45"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M8.037 9.858a.5.5 0 0 0-.68.243l-4.193 9.402c-.667 1.496.815 3.047 2.202 2.306l5.904-3.152c.46-.245 1-.245 1.459 0l5.904 3.152c1.387.741 2.869-.81 2.202-2.306l-1.572-3.524a2 2 0 0 0-.932-.975z"
                  />
                  <path
                    fill="currentColor"
                    d="M8.61 8.467a.5.5 0 0 1-.234-.65l2.151-4.823c.59-1.324 2.355-1.324 2.945 0l3.968 8.898a.5.5 0 0 1-.68.65z"
                    opacity=".5"
                  />
                </svg>

                <span className="mt-1">Visit site</span>
              </a>
            </div>

            <p className="mt-5 text-sm/6 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              temporibus blanditiis ducimus error quidem numquam, rem odio unde
              esse cum.
            </p>

            <p className="mt-5 text-sm/6 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              temporibus blanditiis ducimus error quidem numquam, rem odio unde
              esse cum.
            </p>

            <div className="mt-5 w-full">
              <h3 className="text-right text-sm font-medium tracking-wide text-gray-300">
                Technologies used
              </h3>
              <div className="mt-4 flex w-full flex-wrap items-center justify-end gap-5">
                <a
                  target="_blank"
                  href="https://nextjs.org/"
                  className="rounded-full bg-white/70 p-0.5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    viewBox="0 0 128 128"
                  >
                    <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z" />
                  </svg>
                </a>

                <a target="_blank" href="https://tanstack.com/query/v3/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 256 230"
                  >
                    <path
                      fill="#00435B"
                      d="m157.98 142.487l-4.91 8.527a8.288 8.288 0 0 1-7.182 4.151H108.27a8.288 8.288 0 0 1-7.182-4.151l-4.911-8.527h61.802Zm13.747-23.87l-8.658 15.034h-71.98l-8.658-15.034h89.296Zm-8.34-23.342l8.354 14.506H82.417l8.354-14.506h72.616Zm-17.5-22.066a8.288 8.288 0 0 1 7.183 4.151l5.228 9.079H95.86l5.229-9.079a8.288 8.288 0 0 1 7.182-4.151h37.617Z"
                    />
                    <path
                      fill="#002B3B"
                      d="M53.523 69.252c-4.167-20.206-5.062-35.704-2.368-46.957c1.602-6.693 4.53-12.153 8.984-16.093c4.702-4.159 10.646-6.2 17.326-6.2c11.018 0 22.602 5.025 34.98 14.57c5.05 3.894 10.29 8.587 15.732 14.082c.434-.557.923-1.083 1.469-1.57c15.386-13.71 28.34-22.23 39.42-25.514c6.588-1.954 12.773-2.14 18.405-.244c5.946 2 10.683 6.137 14.026 11.93c5.516 9.561 6.97 22.124 4.914 37.637c-.838 6.323-2.271 13.21-4.296 20.673c.764.092 1.53.262 2.288.513c19.521 6.47 33.345 13.426 41.714 21.377c4.98 4.73 8.231 9.996 9.407 15.826c1.24 6.153.03 12.324-3.308 18.113c-5.506 9.548-15.63 17.077-30.052 23.041c-5.79 2.395-12.343 4.564-19.664 6.515c.334.754.594 1.555.767 2.395c4.167 20.206 5.061 35.704 2.368 46.957c-1.602 6.693-4.531 12.153-8.985 16.093c-4.701 4.159-10.646 6.2-17.325 6.2c-11.019 0-22.602-5.025-34.98-14.57c-5.104-3.936-10.402-8.687-15.907-14.258a11.737 11.737 0 0 1-2.084 2.442c-15.386 13.712-28.34 22.23-39.42 25.515c-6.588 1.954-12.773 2.14-18.405.244c-5.946-2-10.683-6.137-14.026-11.93c-5.516-9.561-6.97-22.124-4.914-37.637c.869-6.551 2.376-13.709 4.518-21.485a11.732 11.732 0 0 1-2.51-.537c-19.521-6.47-33.345-13.426-41.714-21.377c-4.98-4.73-8.231-9.996-9.407-15.826c-1.24-6.153-.03-12.325 3.308-18.114c5.506-9.547 15.63-17.077 30.052-23.04c5.963-2.467 12.734-4.693 20.32-6.689a11.81 11.81 0 0 1-.633-2.082Z"
                    />
                    <path
                      fill="#FF4154"
                      d="M189.647 161.333a3.684 3.684 0 0 1 4.235 2.81l.023.112l.207 1.075c6.71 35.276 1.983 52.915-14.18 52.915c-15.813 0-35.944-15.051-60.392-45.153a3.684 3.684 0 0 1 2.777-6.005h.114l1.288.009c10.288.056 20.289-.303 30.004-1.076c11.467-.913 23.442-2.475 35.924-4.687ZM78.646 134.667l.062.105l.646 1.127c5.177 9 10.57 17.542 16.18 25.627c6.608 9.52 14.038 19.158 22.29 28.914a3.684 3.684 0 0 1-.309 5.082l-.093.083l-.83.715c-27.307 23.397-45.055 28.068-53.244 14.012c-8.017-13.757-5.11-38.773 8.719-75.047a3.683 3.683 0 0 1 6.579-.618Zm124.857-52.054l.112.037l1.028.354c33.705 11.725 46.51 24.61 38.416 38.655c-7.916 13.736-30.93 23.738-69.041 30.004a3.683 3.683 0 0 1-3.773-5.501c5.458-9.286 10.375-18.524 14.749-27.717c4.96-10.425 9.615-21.616 13.965-33.57a3.684 3.684 0 0 1 4.432-2.295l.112.033ZM84.446 76.71a3.683 3.683 0 0 1 1.31 5.042c-5.46 9.285-10.376 18.524-14.75 27.717c-4.96 10.425-9.615 21.615-13.965 33.57a3.684 3.684 0 0 1-4.544 2.262l-.112-.037l-1.028-.355c-33.705-11.724-46.51-24.61-38.416-38.654c7.916-13.737 30.93-23.738 69.041-30.004c.85-.14 1.722.022 2.464.459Zm108.206-57.748c8.017 13.758 5.11 38.774-8.719 75.048a3.683 3.683 0 0 1-6.579.618l-.062-.105l-.646-1.127c-5.177-9-10.57-17.542-16.18-25.627c-6.608-9.52-14.038-19.158-22.29-28.914a3.684 3.684 0 0 1 .309-5.082l.093-.083l.83-.715c27.307-23.397 45.055-28.068 53.244-14.013ZM77.45 10.59c15.814 0 35.945 15.05 60.392 45.152a3.684 3.684 0 0 1-2.777 6.005h-.114l-1.288-.008c-10.287-.056-20.289.303-30.003 1.076c-11.468.913-23.443 2.475-35.925 4.687a3.684 3.684 0 0 1-4.234-2.81l-.024-.113l-.207-1.074C56.56 28.228 61.286 10.59 77.45 10.59Z"
                    />
                    <path
                      fill="#FFD94C"
                      d="M111.295 73.67h31.576a12.89 12.89 0 0 1 11.181 6.475l15.855 27.626a12.892 12.892 0 0 1 0 12.834l-15.855 27.626a12.892 12.892 0 0 1-11.181 6.475h-31.576c-4.618 0-8.883-2.47-11.182-6.475L84.26 120.605a12.892 12.892 0 0 1 0-12.834l15.854-27.626a12.892 12.892 0 0 1 11.182-6.475Zm26.763 8.338c4.62 0 8.888 2.473 11.185 6.481l11.056 19.288a12.892 12.892 0 0 1 0 12.822l-11.056 19.288a12.892 12.892 0 0 1-11.185 6.48h-21.95c-4.62 0-8.888-2.472-11.185-6.48l-11.056-19.288a12.892 12.892 0 0 1 0-12.822l11.056-19.288a12.892 12.892 0 0 1 11.184-6.48h21.951Zm-5.187 9.12h-11.576a12.892 12.892 0 0 0-11.179 6.47l-5.842 10.167a12.892 12.892 0 0 0 0 12.846l5.842 10.168a12.892 12.892 0 0 0 11.179 6.47h11.576c4.616 0 8.88-2.468 11.179-6.47l5.842-10.168a12.892 12.892 0 0 0 0-12.846l-5.842-10.168a12.892 12.892 0 0 0-11.179-6.47Zm-4.994 8.729c4.612 0 8.873 2.464 11.173 6.46l.829 1.44a12.892 12.892 0 0 1 0 12.862l-.829 1.44a12.892 12.892 0 0 1-11.173 6.46h-1.588a12.892 12.892 0 0 1-11.173-6.46l-.829-1.44a12.892 12.892 0 0 1 0-12.862l.829-1.44a12.892 12.892 0 0 1 11.173-6.46h1.588Zm-.792 8.599a5.738 5.738 0 0 0-4.97 2.866a5.729 5.729 0 0 0 0 5.732a5.738 5.738 0 0 0 9.937 0a5.729 5.729 0 0 0 0-5.732a5.736 5.736 0 0 0-4.967-2.866Zm-46.509 5.732h10.32"
                    />
                  </svg>
                </a>

                <a target="_blank" href="https://tailwindcss.com/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="#44a8b3"
                      d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1Zm-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1Z"
                    />
                  </svg>
                </a>

                <a
                  target="_blank"
                  href="https://www.framer.com/motion/"
                  className="flex aspect-square h-8 w-8 items-center justify-center rounded-full bg-white/70 p-0.5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-1 h-6 w-6"
                    viewBox="0 0 128 128"
                  >
                    <path d="M22.684 0h84.253v42.667H64.81L22.684 0Zm0 42.667H64.81l42.127 42.666H64.81V128L22.684 85.333V42.667Z" />
                  </svg>
                </a>

                <a target="_blank" href="https://www.mongodb.com/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 256 256"
                  >
                    <g fill="none">
                      <rect width="256" height="256" fill="#023430" rx="60" />
                      <path
                        fill="#10AA50"
                        d="M171.173 107.591c-10.537-46.481-32.497-58.855-38.099-67.602A99.398 99.398 0 0 1 126.949 28c-.296 4.13-.84 6.73-4.35 9.862c-7.047 6.283-36.977 30.673-39.496 83.486c-2.347 49.242 36.2 79.605 41.292 82.744c3.916 1.927 8.685.041 11.012-1.728c18.581-12.752 43.969-46.75 35.786-94.773"
                      />
                      <path
                        fill="#B8C4C2"
                        d="M128.545 177.871c-.97 12.188-1.665 19.27-4.129 26.235c0 0 1.617 11.603 2.753 23.894h4.019a223.446 223.446 0 0 1 4.384-25.732c-5.203-2.56-6.827-13.702-7.027-24.397Z"
                      />
                      <path
                        fill="#12924F"
                        d="M135.565 202.275c-5.258-2.429-6.779-13.806-7.013-24.404a499.824 499.824 0 0 0 1.136-52.545c-.276-9.194.13-85.158-2.265-96.28a92.425 92.425 0 0 0 5.651 10.936c5.602 8.754 27.569 21.128 38.099 67.609c8.203 47.941-17.047 81.849-35.608 94.684Z"
                      />
                    </g>
                  </svg>
                </a>

                <a target="_blank" href="https://nestjs.com/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 256 256"
                  >
                    <g fill="none">
                      <rect width="256" height="256" fill="#242938" rx="60" />
                      <path
                        fill="#E0234E"
                        d="M146.728 18c-1.556 0-3.001.342-4.335.799c2.835 1.939 4.391 4.506 5.169 7.415c.056.399.167.684.222 1.083c.056.343.112.685.112 1.027c.222 5.02-1.279 5.647-2.335 8.613c-1.612 3.822-1.167 7.928.778 11.237c.167.399.389.855.667 1.255c-2.112-14.431 9.616-16.599 11.784-21.105c.166-3.936-3.002-6.56-5.503-8.385c-2.39-1.483-4.558-1.939-6.559-1.939Zm17.676 3.251c-.223 1.312-.056.97-.111 1.654c-.056.457-.056 1.027-.112 1.483a12.56 12.56 0 0 1-.389 1.37c-.111.456-.278.912-.444 1.368c-.223.457-.389.856-.612 1.312c-.166.228-.278.456-.444.685l-.334.513c-.278.4-.556.799-.834 1.14c-.333.343-.611.742-1 1.027v.058c-.334.285-.667.627-1.056.912c-1.167.913-2.501 1.597-3.724 2.453c-.389.285-.778.513-1.112.855c-.389.286-.722.57-1.056.913c-.389.342-.667.684-1 1.084c-.278.342-.612.741-.834 1.14c-.278.4-.556.8-.778 1.198c-.223.457-.389.856-.612 1.312c-.166.457-.333.856-.444 1.312c-.167.514-.278.97-.389 1.426c-.056.228-.056.514-.112.742c-.055.228-.055.456-.111.684c0 .456-.055.97-.055 1.426c0 .342 0 .685.055 1.027c0 .456.056.912.167 1.426c.056.456.167.912.278 1.369c.167.456.278.912.445 1.369c.111.285.278.57.389.798l-12.784-5.076a134.536 134.536 0 0 0-6.448-1.711l-3.502-.856a100.696 100.696 0 0 0-10.116-1.54c-.111 0-.166-.057-.278-.057a96.867 96.867 0 0 0-9.949-.514c-2.446 0-4.891.114-7.281.286c-3.39.228-6.781.684-10.172 1.255c-.834.114-1.667.285-2.501.456c-1.723.342-3.39.741-5.003 1.14l-2.5.685c-.835.342-1.613.742-2.39 1.084l-1.835.855c-.111.057-.222.057-.278.114c-.556.286-1.056.514-1.556.799a2.667 2.667 0 0 0-.39.171c-.61.285-1.222.627-1.722.913c-.39.17-.779.399-1.112.57c-.167.114-.39.228-.5.285c-.5.286-1 .57-1.446.856c-.5.285-.944.57-1.334.855c-.389.286-.778.514-1.111.799c-.056.057-.111.057-.167.114c-.333.228-.722.513-1.056.799l-.111.114l-.834.684c-.11.057-.222.171-.333.228c-.278.228-.556.514-.834.742c-.056.114-.167.17-.222.228c-.334.342-.667.627-1 .97c-.057 0-.057.057-.112.114c-.334.285-.667.627-1 .97c-.056.056-.056.113-.112.113c-.278.285-.555.57-.833.913c-.111.114-.278.228-.39.342c-.277.342-.61.685-.944 1.027c-.056.114-.167.171-.223.285c-.444.456-.834.913-1.278 1.369l-.167.171c-.89.97-1.834 1.94-2.835 2.795c-1 .913-2.056 1.768-3.112 2.51a41.904 41.904 0 0 1-3.335 2.167a33.512 33.512 0 0 1-3.502 1.711a39.4 39.4 0 0 1-3.613 1.37c-2.334.513-4.724 1.482-6.78 1.653c-.446 0-.946.114-1.39.172c-.5.114-.945.228-1.39.342c-.445.17-.89.342-1.334.513c-.445.171-.89.4-1.334.628c-.39.285-.834.513-1.223.798a9.13 9.13 0 0 0-1.111.97c-.39.285-.779.684-1.112 1.026c-.334.4-.667.742-.945 1.141c-.278.457-.611.856-.834 1.312c-.278.4-.556.856-.778 1.312c-.222.513-.445.97-.611 1.483c-.167.456-.334.97-.5 1.483c-.112.456-.223.913-.278 1.369c0 .057-.056.114-.056.171c-.111.514-.111 1.198-.167 1.54c-.056.4-.111.742-.111 1.141c0 .228 0 .513.056.742c.055.399.11.741.222 1.083c.111.343.223.685.39 1.027v.057c.166.342.388.684.61 1.027c.223.342.445.684.723 1.026c.278.286.612.628.945.913a8.16 8.16 0 0 0 1.056.913c1.334 1.197 1.668 1.597 3.39 2.509c.279.172.556.286.89.457c.056 0 .111.057.167.057c0 .114 0 .171.055.285c.056.456.167.913.278 1.369c.111.513.278.97.445 1.369c.167.342.278.684.445 1.027c.055.114.11.228.166.285c.223.456.445.855.667 1.255l.834 1.198c.278.342.612.741.945 1.083c.334.343.667.628 1.056.97c0 0 .056.057.111.057c.334.285.667.571 1 .799c.39.285.779.513 1.224.741a9.03 9.03 0 0 0 1.278.628c.333.171.722.285 1.112.399c.055.057.11.057.222.114c.222.057.5.114.723.171c-.167 3.08-.223 5.989.222 7.016c.5 1.141 2.946-2.339 5.392-6.332c-.334 3.936-.556 8.556 0 9.925c.61 1.426 3.946-3.023 6.836-7.928c39.408-9.355 75.37 18.595 79.15 58.066c-.723-6.161-8.115-9.583-11.506-8.727c-1.667 4.22-4.502 9.639-9.06 13.004c.39-3.764.223-7.643-.555-11.407c-1.223 5.247-3.613 10.153-6.893 14.373c-5.28.4-10.56-2.224-13.34-6.16c-.222-.171-.277-.513-.444-.741c-.167-.4-.334-.799-.445-1.198a4.835 4.835 0 0 1-.333-1.198c-.056-.399-.056-.798-.056-1.255v-.855c.056-.4.167-.799.278-1.198c.11-.399.222-.799.389-1.198c.222-.399.389-.798.667-1.198c.945-2.738.945-4.962-.778-6.274a6.283 6.283 0 0 0-1.056-.57c-.223-.058-.5-.172-.723-.229c-.167-.057-.278-.114-.444-.171c-.39-.114-.779-.228-1.168-.285a4.133 4.133 0 0 0-1.167-.171a8.869 8.869 0 0 0-1.223-.114c-.278 0-.556.057-.834.057c-.444 0-.833.057-1.222.171c-.39.057-.779.114-1.168.228c-.389.114-.778.229-1.167.4s-.722.342-1.111.513c-.334.171-.668.399-1.057.57c-12.95 8.67-5.224 28.976 3.613 34.851c-3.335.628-6.725 1.369-7.67 2.111l-.111.114c2.39 1.483 4.891 2.738 7.504 3.821a179.626 179.626 0 0 0 9.004 2.738v.057a52.428 52.428 0 0 0 14.007 1.027c24.623-1.768 44.799-20.99 48.468-46.316c.111.514.222.97.333 1.483c.167 1.027.389 2.111.501 3.194v.058c.111.513.166 1.026.222 1.483v.228c.056.513.111 1.027.111 1.483c.056.627.111 1.255.111 1.882v.913c0 .285.056.627.056.912c0 .343-.056.685-.056 1.027v.799c0 .399-.055.741-.055 1.141c0 .228 0 .456-.056.741c0 .399-.056.799-.056 1.255c-.056.171-.056.342-.056.513c-.055.457-.111.856-.166 1.312c0 .171 0 .342-.056.514c-.056.57-.167 1.083-.222 1.654v.114c-.111.513-.223 1.084-.334 1.597v.171l-.333 1.54c0 .057-.056.171-.056.228a15.517 15.517 0 0 1-.389 1.541v.171c-.167.57-.334 1.083-.445 1.597c-.055.057-.055.114-.055.114l-.501 1.711c-.222.57-.389 1.084-.611 1.654c-.222.57-.389 1.141-.611 1.654c-.223.571-.445 1.084-.667 1.654h-.056c-.223.514-.445 1.084-.723 1.597a2.832 2.832 0 0 1-.167.4c-.055.057-.055.114-.111.171c-3.613 7.472-8.948 14.031-15.618 19.165c-.445.285-.89.627-1.334.97c-.111.113-.278.171-.389.285c-.39.285-.779.57-1.223.855l.166.343h.056l2.335-.343h.055c1.445-.228 2.891-.513 4.336-.798a9.518 9.518 0 0 0 1.223-.285c.277-.058.5-.114.778-.172c.389-.057.778-.171 1.167-.228c.333-.114.667-.171 1-.285c5.559-1.369 10.95-3.251 16.119-5.476c-8.837 12.378-20.676 22.36-34.516 28.919c6.392-.456 12.784-1.54 18.953-3.365c22.4-6.788 41.243-22.246 52.526-43.065c-2.279 13.176-7.393 25.725-14.952 36.676a88.023 88.023 0 0 0 14.841-12.662c12.45-13.347 20.621-30.288 23.4-48.483a93.136 93.136 0 0 1 1.612 27.492c40.131-57.438 3.335-116.987-12.061-132.672c-.056-.114-.111-.172-.111-.286c-.056.058-.056.058-.056.114c0-.057 0-.057-.056-.114c0 .685-.056 1.37-.111 2.054a78.116 78.116 0 0 1-.556 3.821c-.278 1.255-.611 2.51-.945 3.765a47.898 47.898 0 0 1-1.334 3.65a49.601 49.601 0 0 1-1.667 3.48c-.612 1.084-1.279 2.224-2.001 3.251a43.7 43.7 0 0 1-2.279 3.08c-.834 1.027-1.723 1.94-2.612 2.852c-.556.514-1.057.97-1.612 1.426c-.445.4-.834.742-1.279 1.14c-1 .8-2.001 1.54-3.112 2.225c-1.056.685-2.168 1.37-3.28 1.94a95.02 95.02 0 0 1-3.501 1.597a38.598 38.598 0 0 1-3.613 1.198a43.872 43.872 0 0 1-3.724.855c-1.279.229-2.557.343-3.78.457c-.889.057-1.779.114-2.668.114c-1.278 0-2.557-.114-3.78-.229c-1.278-.114-2.556-.285-3.779-.57c-1.279-.228-2.501-.57-3.724-.97h-.056c1.223-.114 2.446-.228 3.669-.456a39.423 39.423 0 0 0 3.724-.856a38.452 38.452 0 0 0 3.612-1.198c1.223-.456 2.39-1.026 3.502-1.597c1.167-.57 2.223-1.197 3.335-1.882c1.056-.741 2.112-1.483 3.113-2.281a30.68 30.68 0 0 0 2.834-2.567c.945-.856 1.779-1.825 2.613-2.795a55.775 55.775 0 0 0 2.334-3.08c.111-.171.223-.4.334-.57a70.926 70.926 0 0 0 1.612-2.739a39.8 39.8 0 0 0 1.667-3.479a40.7 40.7 0 0 0 1.334-3.65c.389-1.198.667-2.453.945-3.708c.223-1.312.445-2.567.556-3.821c.111-1.312.222-2.624.222-3.88c0-.912-.055-1.824-.111-2.737c-.111-1.312-.278-2.567-.444-3.822a42.647 42.647 0 0 0-.834-3.821c-.389-1.198-.778-2.453-1.223-3.65c-.445-1.199-1-2.396-1.556-3.537c-.612-1.14-1.223-2.282-1.89-3.365a63.283 63.283 0 0 0-2.223-3.138c-.834-.97-1.668-1.939-2.557-2.909c-.445-.456-.945-.97-1.445-1.425a102.618 102.618 0 0 0-7.726-5.59a9.92 9.92 0 0 0-1.112-.57c-1.834-1.199-3.557-1.826-5.28-2.396Z"
                      />
                    </g>
                  </svg>
                </a>

                <a target="_blank" href="https://firebase.google.com">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 256 351"
                  >
                    <defs>
                      <filter
                        id="logosFirebase0"
                        width="200%"
                        height="200%"
                        x="-50%"
                        y="-50%"
                        filterUnits="objectBoundingBox"
                      >
                        <feGaussianBlur
                          in="SourceAlpha"
                          result="shadowBlurInner1"
                          stdDeviation="17.5"
                        />
                        <feOffset
                          in="shadowBlurInner1"
                          result="shadowOffsetInner1"
                        />
                        <feComposite
                          in="shadowOffsetInner1"
                          in2="SourceAlpha"
                          k2="-1"
                          k3="1"
                          operator="arithmetic"
                          result="shadowInnerInner1"
                        />
                        <feColorMatrix
                          in="shadowInnerInner1"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                        />
                      </filter>
                      <filter
                        id="logosFirebase1"
                        width="200%"
                        height="200%"
                        x="-50%"
                        y="-50%"
                        filterUnits="objectBoundingBox"
                      >
                        <feGaussianBlur
                          in="SourceAlpha"
                          result="shadowBlurInner1"
                          stdDeviation="3.5"
                        />
                        <feOffset
                          dx="1"
                          dy="-9"
                          in="shadowBlurInner1"
                          result="shadowOffsetInner1"
                        />
                        <feComposite
                          in="shadowOffsetInner1"
                          in2="SourceAlpha"
                          k2="-1"
                          k3="1"
                          operator="arithmetic"
                          result="shadowInnerInner1"
                        />
                        <feColorMatrix
                          in="shadowInnerInner1"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
                        />
                      </filter>
                      <path
                        id="logosFirebase2"
                        d="m1.253 280.732l1.605-3.131l99.353-188.518l-44.15-83.475C54.392-1.283 45.074.474 43.87 8.188z"
                      />
                      <path
                        id="logosFirebase3"
                        d="m134.417 148.974l32.039-32.812l-32.039-61.007c-3.042-5.791-10.433-6.398-13.443-.59l-17.705 34.109l-.53 1.744z"
                      />
                    </defs>
                    <path
                      fill="#FFC24A"
                      d="m0 282.998l2.123-2.972L102.527 89.512l.212-2.017L58.48 4.358C54.77-2.606 44.33-.845 43.114 6.951z"
                    />
                    <use
                      fill="#FFA712"
                      fill-rule="evenodd"
                      href="#logosFirebase2"
                    />
                    <use filter="url(#logosFirebase0)" href="#logosFirebase2" />
                    <path
                      fill="#F4BD62"
                      d="m135.005 150.38l32.955-33.75l-32.965-62.93c-3.129-5.957-11.866-5.975-14.962 0L102.42 87.287v2.86z"
                    />
                    <use
                      fill="#FFA50E"
                      fill-rule="evenodd"
                      href="#logosFirebase3"
                    />
                    <use filter="url(#logosFirebase1)" href="#logosFirebase3" />
                    <path
                      fill="#F6820C"
                      d="m0 282.998l.962-.968l3.496-1.42l128.477-128l1.628-4.431l-32.05-61.074z"
                    />
                    <path
                      fill="#FDE068"
                      d="m139.121 347.551l116.275-64.847l-33.204-204.495c-1.039-6.398-8.888-8.927-13.468-4.34L0 282.998l115.608 64.548a24.126 24.126 0 0 0 23.513.005"
                    />
                    <path
                      fill="#FCCA3F"
                      d="M254.354 282.16L221.402 79.218c-1.03-6.35-7.558-8.977-12.103-4.424L1.29 282.6l114.339 63.908a23.943 23.943 0 0 0 23.334.006z"
                    />
                    <path
                      fill="#EEAB37"
                      d="M139.12 345.64a24.126 24.126 0 0 1-23.512-.005L.931 282.015l-.93.983l115.607 64.548a24.126 24.126 0 0 0 23.513.005l116.275-64.847l-.285-1.752z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* content */}
        </div>

        <div className="my-32 flex w-full flex-col-reverse items-start justify-between gap-10 md:my-60 md:flex-row">
          {/* content */}
          <div className="mt-10 w-full md:mt-0 md:w-[40%]">
            <div className="flex w-full items-center justify-between gap-5">
              <h3 className="text-xl font-semibold text-white">
                Motionridge.com
              </h3>
              <a
                target="_blank"
                href="https://nextjs.org/"
                className="flex items-center justify-start gap-2 text-xs text-gray-200 hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 rotate-45"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M8.037 9.858a.5.5 0 0 0-.68.243l-4.193 9.402c-.667 1.496.815 3.047 2.202 2.306l5.904-3.152c.46-.245 1-.245 1.459 0l5.904 3.152c1.387.741 2.869-.81 2.202-2.306l-1.572-3.524a2 2 0 0 0-.932-.975z"
                  />
                  <path
                    fill="currentColor"
                    d="M8.61 8.467a.5.5 0 0 1-.234-.65l2.151-4.823c.59-1.324 2.355-1.324 2.945 0l3.968 8.898a.5.5 0 0 1-.68.65z"
                    opacity=".5"
                  />
                </svg>

                <span className="mt-1">Visit site</span>
              </a>
            </div>

            <p className="mt-5 text-sm/6 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              temporibus blanditiis ducimus error quidem numquam, rem odio unde
              esse cum.
            </p>

            <p className="mt-5 text-sm/6 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              temporibus blanditiis ducimus error quidem numquam, rem odio unde
              esse cum.
            </p>

            <div className="mt-5 w-full">
              <h3 className="text-right text-sm font-medium tracking-wide text-gray-300">
                Technologies used
              </h3>
              <div className="mt-4 flex w-full flex-wrap items-center justify-end gap-5">
                <a
                  target="_blank"
                  href="https://nextjs.org/"
                  className="rounded-full bg-white/70 p-0.5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    viewBox="0 0 128 128"
                  >
                    <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z" />
                  </svg>
                </a>

                <a target="_blank" href="https://tanstack.com/query/v3/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 256 230"
                  >
                    <path
                      fill="#00435B"
                      d="m157.98 142.487l-4.91 8.527a8.288 8.288 0 0 1-7.182 4.151H108.27a8.288 8.288 0 0 1-7.182-4.151l-4.911-8.527h61.802Zm13.747-23.87l-8.658 15.034h-71.98l-8.658-15.034h89.296Zm-8.34-23.342l8.354 14.506H82.417l8.354-14.506h72.616Zm-17.5-22.066a8.288 8.288 0 0 1 7.183 4.151l5.228 9.079H95.86l5.229-9.079a8.288 8.288 0 0 1 7.182-4.151h37.617Z"
                    />
                    <path
                      fill="#002B3B"
                      d="M53.523 69.252c-4.167-20.206-5.062-35.704-2.368-46.957c1.602-6.693 4.53-12.153 8.984-16.093c4.702-4.159 10.646-6.2 17.326-6.2c11.018 0 22.602 5.025 34.98 14.57c5.05 3.894 10.29 8.587 15.732 14.082c.434-.557.923-1.083 1.469-1.57c15.386-13.71 28.34-22.23 39.42-25.514c6.588-1.954 12.773-2.14 18.405-.244c5.946 2 10.683 6.137 14.026 11.93c5.516 9.561 6.97 22.124 4.914 37.637c-.838 6.323-2.271 13.21-4.296 20.673c.764.092 1.53.262 2.288.513c19.521 6.47 33.345 13.426 41.714 21.377c4.98 4.73 8.231 9.996 9.407 15.826c1.24 6.153.03 12.324-3.308 18.113c-5.506 9.548-15.63 17.077-30.052 23.041c-5.79 2.395-12.343 4.564-19.664 6.515c.334.754.594 1.555.767 2.395c4.167 20.206 5.061 35.704 2.368 46.957c-1.602 6.693-4.531 12.153-8.985 16.093c-4.701 4.159-10.646 6.2-17.325 6.2c-11.019 0-22.602-5.025-34.98-14.57c-5.104-3.936-10.402-8.687-15.907-14.258a11.737 11.737 0 0 1-2.084 2.442c-15.386 13.712-28.34 22.23-39.42 25.515c-6.588 1.954-12.773 2.14-18.405.244c-5.946-2-10.683-6.137-14.026-11.93c-5.516-9.561-6.97-22.124-4.914-37.637c.869-6.551 2.376-13.709 4.518-21.485a11.732 11.732 0 0 1-2.51-.537c-19.521-6.47-33.345-13.426-41.714-21.377c-4.98-4.73-8.231-9.996-9.407-15.826c-1.24-6.153-.03-12.325 3.308-18.114c5.506-9.547 15.63-17.077 30.052-23.04c5.963-2.467 12.734-4.693 20.32-6.689a11.81 11.81 0 0 1-.633-2.082Z"
                    />
                    <path
                      fill="#FF4154"
                      d="M189.647 161.333a3.684 3.684 0 0 1 4.235 2.81l.023.112l.207 1.075c6.71 35.276 1.983 52.915-14.18 52.915c-15.813 0-35.944-15.051-60.392-45.153a3.684 3.684 0 0 1 2.777-6.005h.114l1.288.009c10.288.056 20.289-.303 30.004-1.076c11.467-.913 23.442-2.475 35.924-4.687ZM78.646 134.667l.062.105l.646 1.127c5.177 9 10.57 17.542 16.18 25.627c6.608 9.52 14.038 19.158 22.29 28.914a3.684 3.684 0 0 1-.309 5.082l-.093.083l-.83.715c-27.307 23.397-45.055 28.068-53.244 14.012c-8.017-13.757-5.11-38.773 8.719-75.047a3.683 3.683 0 0 1 6.579-.618Zm124.857-52.054l.112.037l1.028.354c33.705 11.725 46.51 24.61 38.416 38.655c-7.916 13.736-30.93 23.738-69.041 30.004a3.683 3.683 0 0 1-3.773-5.501c5.458-9.286 10.375-18.524 14.749-27.717c4.96-10.425 9.615-21.616 13.965-33.57a3.684 3.684 0 0 1 4.432-2.295l.112.033ZM84.446 76.71a3.683 3.683 0 0 1 1.31 5.042c-5.46 9.285-10.376 18.524-14.75 27.717c-4.96 10.425-9.615 21.615-13.965 33.57a3.684 3.684 0 0 1-4.544 2.262l-.112-.037l-1.028-.355c-33.705-11.724-46.51-24.61-38.416-38.654c7.916-13.737 30.93-23.738 69.041-30.004c.85-.14 1.722.022 2.464.459Zm108.206-57.748c8.017 13.758 5.11 38.774-8.719 75.048a3.683 3.683 0 0 1-6.579.618l-.062-.105l-.646-1.127c-5.177-9-10.57-17.542-16.18-25.627c-6.608-9.52-14.038-19.158-22.29-28.914a3.684 3.684 0 0 1 .309-5.082l.093-.083l.83-.715c27.307-23.397 45.055-28.068 53.244-14.013ZM77.45 10.59c15.814 0 35.945 15.05 60.392 45.152a3.684 3.684 0 0 1-2.777 6.005h-.114l-1.288-.008c-10.287-.056-20.289.303-30.003 1.076c-11.468.913-23.443 2.475-35.925 4.687a3.684 3.684 0 0 1-4.234-2.81l-.024-.113l-.207-1.074C56.56 28.228 61.286 10.59 77.45 10.59Z"
                    />
                    <path
                      fill="#FFD94C"
                      d="M111.295 73.67h31.576a12.89 12.89 0 0 1 11.181 6.475l15.855 27.626a12.892 12.892 0 0 1 0 12.834l-15.855 27.626a12.892 12.892 0 0 1-11.181 6.475h-31.576c-4.618 0-8.883-2.47-11.182-6.475L84.26 120.605a12.892 12.892 0 0 1 0-12.834l15.854-27.626a12.892 12.892 0 0 1 11.182-6.475Zm26.763 8.338c4.62 0 8.888 2.473 11.185 6.481l11.056 19.288a12.892 12.892 0 0 1 0 12.822l-11.056 19.288a12.892 12.892 0 0 1-11.185 6.48h-21.95c-4.62 0-8.888-2.472-11.185-6.48l-11.056-19.288a12.892 12.892 0 0 1 0-12.822l11.056-19.288a12.892 12.892 0 0 1 11.184-6.48h21.951Zm-5.187 9.12h-11.576a12.892 12.892 0 0 0-11.179 6.47l-5.842 10.167a12.892 12.892 0 0 0 0 12.846l5.842 10.168a12.892 12.892 0 0 0 11.179 6.47h11.576c4.616 0 8.88-2.468 11.179-6.47l5.842-10.168a12.892 12.892 0 0 0 0-12.846l-5.842-10.168a12.892 12.892 0 0 0-11.179-6.47Zm-4.994 8.729c4.612 0 8.873 2.464 11.173 6.46l.829 1.44a12.892 12.892 0 0 1 0 12.862l-.829 1.44a12.892 12.892 0 0 1-11.173 6.46h-1.588a12.892 12.892 0 0 1-11.173-6.46l-.829-1.44a12.892 12.892 0 0 1 0-12.862l.829-1.44a12.892 12.892 0 0 1 11.173-6.46h1.588Zm-.792 8.599a5.738 5.738 0 0 0-4.97 2.866a5.729 5.729 0 0 0 0 5.732a5.738 5.738 0 0 0 9.937 0a5.729 5.729 0 0 0 0-5.732a5.736 5.736 0 0 0-4.967-2.866Zm-46.509 5.732h10.32"
                    />
                  </svg>
                </a>

                <a target="_blank" href="https://tailwindcss.com/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="#44a8b3"
                      d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1Zm-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1Z"
                    />
                  </svg>
                </a>

                <a
                  target="_blank"
                  href="https://www.framer.com/motion/"
                  className="flex aspect-square h-8 w-8 items-center justify-center rounded-full bg-white/70 p-0.5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-1 h-6 w-6"
                    viewBox="0 0 128 128"
                  >
                    <path d="M22.684 0h84.253v42.667H64.81L22.684 0Zm0 42.667H64.81l42.127 42.666H64.81V128L22.684 85.333V42.667Z" />
                  </svg>
                </a>

                <a target="_blank" href="https://www.mongodb.com/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 256 256"
                  >
                    <g fill="none">
                      <rect width="256" height="256" fill="#023430" rx="60" />
                      <path
                        fill="#10AA50"
                        d="M171.173 107.591c-10.537-46.481-32.497-58.855-38.099-67.602A99.398 99.398 0 0 1 126.949 28c-.296 4.13-.84 6.73-4.35 9.862c-7.047 6.283-36.977 30.673-39.496 83.486c-2.347 49.242 36.2 79.605 41.292 82.744c3.916 1.927 8.685.041 11.012-1.728c18.581-12.752 43.969-46.75 35.786-94.773"
                      />
                      <path
                        fill="#B8C4C2"
                        d="M128.545 177.871c-.97 12.188-1.665 19.27-4.129 26.235c0 0 1.617 11.603 2.753 23.894h4.019a223.446 223.446 0 0 1 4.384-25.732c-5.203-2.56-6.827-13.702-7.027-24.397Z"
                      />
                      <path
                        fill="#12924F"
                        d="M135.565 202.275c-5.258-2.429-6.779-13.806-7.013-24.404a499.824 499.824 0 0 0 1.136-52.545c-.276-9.194.13-85.158-2.265-96.28a92.425 92.425 0 0 0 5.651 10.936c5.602 8.754 27.569 21.128 38.099 67.609c8.203 47.941-17.047 81.849-35.608 94.684Z"
                      />
                    </g>
                  </svg>
                </a>

                <a target="_blank" href="https://nestjs.com/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 256 256"
                  >
                    <g fill="none">
                      <rect width="256" height="256" fill="#242938" rx="60" />
                      <path
                        fill="#E0234E"
                        d="M146.728 18c-1.556 0-3.001.342-4.335.799c2.835 1.939 4.391 4.506 5.169 7.415c.056.399.167.684.222 1.083c.056.343.112.685.112 1.027c.222 5.02-1.279 5.647-2.335 8.613c-1.612 3.822-1.167 7.928.778 11.237c.167.399.389.855.667 1.255c-2.112-14.431 9.616-16.599 11.784-21.105c.166-3.936-3.002-6.56-5.503-8.385c-2.39-1.483-4.558-1.939-6.559-1.939Zm17.676 3.251c-.223 1.312-.056.97-.111 1.654c-.056.457-.056 1.027-.112 1.483a12.56 12.56 0 0 1-.389 1.37c-.111.456-.278.912-.444 1.368c-.223.457-.389.856-.612 1.312c-.166.228-.278.456-.444.685l-.334.513c-.278.4-.556.799-.834 1.14c-.333.343-.611.742-1 1.027v.058c-.334.285-.667.627-1.056.912c-1.167.913-2.501 1.597-3.724 2.453c-.389.285-.778.513-1.112.855c-.389.286-.722.57-1.056.913c-.389.342-.667.684-1 1.084c-.278.342-.612.741-.834 1.14c-.278.4-.556.8-.778 1.198c-.223.457-.389.856-.612 1.312c-.166.457-.333.856-.444 1.312c-.167.514-.278.97-.389 1.426c-.056.228-.056.514-.112.742c-.055.228-.055.456-.111.684c0 .456-.055.97-.055 1.426c0 .342 0 .685.055 1.027c0 .456.056.912.167 1.426c.056.456.167.912.278 1.369c.167.456.278.912.445 1.369c.111.285.278.57.389.798l-12.784-5.076a134.536 134.536 0 0 0-6.448-1.711l-3.502-.856a100.696 100.696 0 0 0-10.116-1.54c-.111 0-.166-.057-.278-.057a96.867 96.867 0 0 0-9.949-.514c-2.446 0-4.891.114-7.281.286c-3.39.228-6.781.684-10.172 1.255c-.834.114-1.667.285-2.501.456c-1.723.342-3.39.741-5.003 1.14l-2.5.685c-.835.342-1.613.742-2.39 1.084l-1.835.855c-.111.057-.222.057-.278.114c-.556.286-1.056.514-1.556.799a2.667 2.667 0 0 0-.39.171c-.61.285-1.222.627-1.722.913c-.39.17-.779.399-1.112.57c-.167.114-.39.228-.5.285c-.5.286-1 .57-1.446.856c-.5.285-.944.57-1.334.855c-.389.286-.778.514-1.111.799c-.056.057-.111.057-.167.114c-.333.228-.722.513-1.056.799l-.111.114l-.834.684c-.11.057-.222.171-.333.228c-.278.228-.556.514-.834.742c-.056.114-.167.17-.222.228c-.334.342-.667.627-1 .97c-.057 0-.057.057-.112.114c-.334.285-.667.627-1 .97c-.056.056-.056.113-.112.113c-.278.285-.555.57-.833.913c-.111.114-.278.228-.39.342c-.277.342-.61.685-.944 1.027c-.056.114-.167.171-.223.285c-.444.456-.834.913-1.278 1.369l-.167.171c-.89.97-1.834 1.94-2.835 2.795c-1 .913-2.056 1.768-3.112 2.51a41.904 41.904 0 0 1-3.335 2.167a33.512 33.512 0 0 1-3.502 1.711a39.4 39.4 0 0 1-3.613 1.37c-2.334.513-4.724 1.482-6.78 1.653c-.446 0-.946.114-1.39.172c-.5.114-.945.228-1.39.342c-.445.17-.89.342-1.334.513c-.445.171-.89.4-1.334.628c-.39.285-.834.513-1.223.798a9.13 9.13 0 0 0-1.111.97c-.39.285-.779.684-1.112 1.026c-.334.4-.667.742-.945 1.141c-.278.457-.611.856-.834 1.312c-.278.4-.556.856-.778 1.312c-.222.513-.445.97-.611 1.483c-.167.456-.334.97-.5 1.483c-.112.456-.223.913-.278 1.369c0 .057-.056.114-.056.171c-.111.514-.111 1.198-.167 1.54c-.056.4-.111.742-.111 1.141c0 .228 0 .513.056.742c.055.399.11.741.222 1.083c.111.343.223.685.39 1.027v.057c.166.342.388.684.61 1.027c.223.342.445.684.723 1.026c.278.286.612.628.945.913a8.16 8.16 0 0 0 1.056.913c1.334 1.197 1.668 1.597 3.39 2.509c.279.172.556.286.89.457c.056 0 .111.057.167.057c0 .114 0 .171.055.285c.056.456.167.913.278 1.369c.111.513.278.97.445 1.369c.167.342.278.684.445 1.027c.055.114.11.228.166.285c.223.456.445.855.667 1.255l.834 1.198c.278.342.612.741.945 1.083c.334.343.667.628 1.056.97c0 0 .056.057.111.057c.334.285.667.571 1 .799c.39.285.779.513 1.224.741a9.03 9.03 0 0 0 1.278.628c.333.171.722.285 1.112.399c.055.057.11.057.222.114c.222.057.5.114.723.171c-.167 3.08-.223 5.989.222 7.016c.5 1.141 2.946-2.339 5.392-6.332c-.334 3.936-.556 8.556 0 9.925c.61 1.426 3.946-3.023 6.836-7.928c39.408-9.355 75.37 18.595 79.15 58.066c-.723-6.161-8.115-9.583-11.506-8.727c-1.667 4.22-4.502 9.639-9.06 13.004c.39-3.764.223-7.643-.555-11.407c-1.223 5.247-3.613 10.153-6.893 14.373c-5.28.4-10.56-2.224-13.34-6.16c-.222-.171-.277-.513-.444-.741c-.167-.4-.334-.799-.445-1.198a4.835 4.835 0 0 1-.333-1.198c-.056-.399-.056-.798-.056-1.255v-.855c.056-.4.167-.799.278-1.198c.11-.399.222-.799.389-1.198c.222-.399.389-.798.667-1.198c.945-2.738.945-4.962-.778-6.274a6.283 6.283 0 0 0-1.056-.57c-.223-.058-.5-.172-.723-.229c-.167-.057-.278-.114-.444-.171c-.39-.114-.779-.228-1.168-.285a4.133 4.133 0 0 0-1.167-.171a8.869 8.869 0 0 0-1.223-.114c-.278 0-.556.057-.834.057c-.444 0-.833.057-1.222.171c-.39.057-.779.114-1.168.228c-.389.114-.778.229-1.167.4s-.722.342-1.111.513c-.334.171-.668.399-1.057.57c-12.95 8.67-5.224 28.976 3.613 34.851c-3.335.628-6.725 1.369-7.67 2.111l-.111.114c2.39 1.483 4.891 2.738 7.504 3.821a179.626 179.626 0 0 0 9.004 2.738v.057a52.428 52.428 0 0 0 14.007 1.027c24.623-1.768 44.799-20.99 48.468-46.316c.111.514.222.97.333 1.483c.167 1.027.389 2.111.501 3.194v.058c.111.513.166 1.026.222 1.483v.228c.056.513.111 1.027.111 1.483c.056.627.111 1.255.111 1.882v.913c0 .285.056.627.056.912c0 .343-.056.685-.056 1.027v.799c0 .399-.055.741-.055 1.141c0 .228 0 .456-.056.741c0 .399-.056.799-.056 1.255c-.056.171-.056.342-.056.513c-.055.457-.111.856-.166 1.312c0 .171 0 .342-.056.514c-.056.57-.167 1.083-.222 1.654v.114c-.111.513-.223 1.084-.334 1.597v.171l-.333 1.54c0 .057-.056.171-.056.228a15.517 15.517 0 0 1-.389 1.541v.171c-.167.57-.334 1.083-.445 1.597c-.055.057-.055.114-.055.114l-.501 1.711c-.222.57-.389 1.084-.611 1.654c-.222.57-.389 1.141-.611 1.654c-.223.571-.445 1.084-.667 1.654h-.056c-.223.514-.445 1.084-.723 1.597a2.832 2.832 0 0 1-.167.4c-.055.057-.055.114-.111.171c-3.613 7.472-8.948 14.031-15.618 19.165c-.445.285-.89.627-1.334.97c-.111.113-.278.171-.389.285c-.39.285-.779.57-1.223.855l.166.343h.056l2.335-.343h.055c1.445-.228 2.891-.513 4.336-.798a9.518 9.518 0 0 0 1.223-.285c.277-.058.5-.114.778-.172c.389-.057.778-.171 1.167-.228c.333-.114.667-.171 1-.285c5.559-1.369 10.95-3.251 16.119-5.476c-8.837 12.378-20.676 22.36-34.516 28.919c6.392-.456 12.784-1.54 18.953-3.365c22.4-6.788 41.243-22.246 52.526-43.065c-2.279 13.176-7.393 25.725-14.952 36.676a88.023 88.023 0 0 0 14.841-12.662c12.45-13.347 20.621-30.288 23.4-48.483a93.136 93.136 0 0 1 1.612 27.492c40.131-57.438 3.335-116.987-12.061-132.672c-.056-.114-.111-.172-.111-.286c-.056.058-.056.058-.056.114c0-.057 0-.057-.056-.114c0 .685-.056 1.37-.111 2.054a78.116 78.116 0 0 1-.556 3.821c-.278 1.255-.611 2.51-.945 3.765a47.898 47.898 0 0 1-1.334 3.65a49.601 49.601 0 0 1-1.667 3.48c-.612 1.084-1.279 2.224-2.001 3.251a43.7 43.7 0 0 1-2.279 3.08c-.834 1.027-1.723 1.94-2.612 2.852c-.556.514-1.057.97-1.612 1.426c-.445.4-.834.742-1.279 1.14c-1 .8-2.001 1.54-3.112 2.225c-1.056.685-2.168 1.37-3.28 1.94a95.02 95.02 0 0 1-3.501 1.597a38.598 38.598 0 0 1-3.613 1.198a43.872 43.872 0 0 1-3.724.855c-1.279.229-2.557.343-3.78.457c-.889.057-1.779.114-2.668.114c-1.278 0-2.557-.114-3.78-.229c-1.278-.114-2.556-.285-3.779-.57c-1.279-.228-2.501-.57-3.724-.97h-.056c1.223-.114 2.446-.228 3.669-.456a39.423 39.423 0 0 0 3.724-.856a38.452 38.452 0 0 0 3.612-1.198c1.223-.456 2.39-1.026 3.502-1.597c1.167-.57 2.223-1.197 3.335-1.882c1.056-.741 2.112-1.483 3.113-2.281a30.68 30.68 0 0 0 2.834-2.567c.945-.856 1.779-1.825 2.613-2.795a55.775 55.775 0 0 0 2.334-3.08c.111-.171.223-.4.334-.57a70.926 70.926 0 0 0 1.612-2.739a39.8 39.8 0 0 0 1.667-3.479a40.7 40.7 0 0 0 1.334-3.65c.389-1.198.667-2.453.945-3.708c.223-1.312.445-2.567.556-3.821c.111-1.312.222-2.624.222-3.88c0-.912-.055-1.824-.111-2.737c-.111-1.312-.278-2.567-.444-3.822a42.647 42.647 0 0 0-.834-3.821c-.389-1.198-.778-2.453-1.223-3.65c-.445-1.199-1-2.396-1.556-3.537c-.612-1.14-1.223-2.282-1.89-3.365a63.283 63.283 0 0 0-2.223-3.138c-.834-.97-1.668-1.939-2.557-2.909c-.445-.456-.945-.97-1.445-1.425a102.618 102.618 0 0 0-7.726-5.59a9.92 9.92 0 0 0-1.112-.57c-1.834-1.199-3.557-1.826-5.28-2.396Z"
                      />
                    </g>
                  </svg>
                </a>

                <a target="_blank" href="https://firebase.google.com">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 256 351"
                  >
                    <defs>
                      <filter
                        id="logosFirebase0"
                        width="200%"
                        height="200%"
                        x="-50%"
                        y="-50%"
                        filterUnits="objectBoundingBox"
                      >
                        <feGaussianBlur
                          in="SourceAlpha"
                          result="shadowBlurInner1"
                          stdDeviation="17.5"
                        />
                        <feOffset
                          in="shadowBlurInner1"
                          result="shadowOffsetInner1"
                        />
                        <feComposite
                          in="shadowOffsetInner1"
                          in2="SourceAlpha"
                          k2="-1"
                          k3="1"
                          operator="arithmetic"
                          result="shadowInnerInner1"
                        />
                        <feColorMatrix
                          in="shadowInnerInner1"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                        />
                      </filter>
                      <filter
                        id="logosFirebase1"
                        width="200%"
                        height="200%"
                        x="-50%"
                        y="-50%"
                        filterUnits="objectBoundingBox"
                      >
                        <feGaussianBlur
                          in="SourceAlpha"
                          result="shadowBlurInner1"
                          stdDeviation="3.5"
                        />
                        <feOffset
                          dx="1"
                          dy="-9"
                          in="shadowBlurInner1"
                          result="shadowOffsetInner1"
                        />
                        <feComposite
                          in="shadowOffsetInner1"
                          in2="SourceAlpha"
                          k2="-1"
                          k3="1"
                          operator="arithmetic"
                          result="shadowInnerInner1"
                        />
                        <feColorMatrix
                          in="shadowInnerInner1"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
                        />
                      </filter>
                      <path
                        id="logosFirebase2"
                        d="m1.253 280.732l1.605-3.131l99.353-188.518l-44.15-83.475C54.392-1.283 45.074.474 43.87 8.188z"
                      />
                      <path
                        id="logosFirebase3"
                        d="m134.417 148.974l32.039-32.812l-32.039-61.007c-3.042-5.791-10.433-6.398-13.443-.59l-17.705 34.109l-.53 1.744z"
                      />
                    </defs>
                    <path
                      fill="#FFC24A"
                      d="m0 282.998l2.123-2.972L102.527 89.512l.212-2.017L58.48 4.358C54.77-2.606 44.33-.845 43.114 6.951z"
                    />
                    <use
                      fill="#FFA712"
                      fill-rule="evenodd"
                      href="#logosFirebase2"
                    />
                    <use filter="url(#logosFirebase0)" href="#logosFirebase2" />
                    <path
                      fill="#F4BD62"
                      d="m135.005 150.38l32.955-33.75l-32.965-62.93c-3.129-5.957-11.866-5.975-14.962 0L102.42 87.287v2.86z"
                    />
                    <use
                      fill="#FFA50E"
                      fill-rule="evenodd"
                      href="#logosFirebase3"
                    />
                    <use filter="url(#logosFirebase1)" href="#logosFirebase3" />
                    <path
                      fill="#F6820C"
                      d="m0 282.998l.962-.968l3.496-1.42l128.477-128l1.628-4.431l-32.05-61.074z"
                    />
                    <path
                      fill="#FDE068"
                      d="m139.121 347.551l116.275-64.847l-33.204-204.495c-1.039-6.398-8.888-8.927-13.468-4.34L0 282.998l115.608 64.548a24.126 24.126 0 0 0 23.513.005"
                    />
                    <path
                      fill="#FCCA3F"
                      d="M254.354 282.16L221.402 79.218c-1.03-6.35-7.558-8.977-12.103-4.424L1.29 282.6l114.339 63.908a23.943 23.943 0 0 0 23.334.006z"
                    />
                    <path
                      fill="#EEAB37"
                      d="M139.12 345.64a24.126 24.126 0 0 1-23.512-.005L.931 282.015l-.93.983l115.607 64.548a24.126 24.126 0 0 0 23.513.005l116.275-64.847l-.285-1.752z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* content */}

          {/* image */}
          <div className="relative w-full md:w-[60%]">
            <div className="relative z-30 flex w-full justify-end">
              <div className="relative w-[90%] overflow-hidden rounded-xl border border-gray-700 bg-white/10 md:[transform:perspective(40cm)rotateY(-30deg)]">
                {/* gradient line */}
                <div className="absolute inset-x-0 top-0 -mt-[1.9rem] flex h-8 w-full items-end overflow-hidden">
                  <div className="-mb-px flex h-[3px] w-full -scale-x-100">
                    <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                    <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 z-40 -mb-px flex h-8 w-full items-end overflow-hidden">
                  <div className="-mb-px flex h-[3px] w-full -scale-x-100">
                    <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                    <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                  </div>
                </div>
                {/* gradient line */}

                <div className="flex h-8 w-full items-center justify-start gap-2 p-3">
                  <div className="aspect-square w-3 rounded-full bg-white/20"></div>
                  <div className="aspect-square w-3 rounded-full bg-white/20"></div>
                  <div className="aspect-square w-3 rounded-full bg-white/20"></div>
                </div>
                <div className="relative inset-x-0 z-30 aspect-video w-full max-w-screen-md">
                  <Image
                    fill
                    src={motionridge}
                    placeholder="blur"
                    className="object-fit h-full w-full rounded-lg"
                    alt="Screenshot of the landing page of motionridge.com"
                  />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 z-40 -mb-10 flex h-full w-[40%] items-end md:-mr-10">
                <div className="relative inset-x-0 z-20 aspect-video w-full max-w-screen-md">
                  {/* gradient line top */}
                  <div className="absolute inset-x-0 top-0 -mt-[1.9rem] flex h-8 w-full items-end overflow-hidden">
                    <div className="-mb-px flex h-[3px] w-full -scale-x-100">
                      <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                      <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                    </div>
                  </div>
                  {/* gradient line top */}

                  <Image
                    fill
                    src={motionridge2}
                    placeholder="blur"
                    className="object-fit h-full w-full rounded-md shadow-xl"
                    alt="Screenshot of the landing page of motionridge.com"
                  />
                  {/* gradient line bottom */}
                  <div className="absolute inset-x-0 bottom-0 -mb-[2.05rem] flex h-8 w-full rotate-180 items-end overflow-hidden">
                    <div className="-mb-px flex h-[3px] w-full -scale-x-100">
                      <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                      <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                    </div>
                  </div>
                  {/* gradient line bottom */}
                </div>
              </div>
            </div>

            <div className="absolute inset-x-0 z-10 -mt-10 flex justify-center">
              <div className="h-20 w-52 bg-purple-600 blur-[150px]"></div>
            </div>
          </div>
          {/* image */}
        </div>

        <div className="my-32 flex w-full flex-col items-start justify-between gap-10 md:mt-60 md:flex-row">
          {/* image */}
          <div className="relative w-full md:w-[60%]">
            <div className="relative z-30 w-full">
              <div className="relative w-[90%] overflow-hidden rounded-xl border border-gray-700 bg-white/10 md:[transform:perspective(40cm)rotateY(30deg)]">
                {/* gradient line */}
                <div className="absolute inset-x-0 top-0 -mt-[1.9rem] flex h-8 w-full items-end overflow-hidden">
                  <div className="-mb-px flex h-[3px] w-full -scale-x-100">
                    <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                    <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 z-40 -mb-px flex h-8 w-full items-end overflow-hidden">
                  <div className="-mb-px flex h-[3px] w-full -scale-x-100">
                    <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                    <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                  </div>
                </div>
                {/* gradient line */}

                <div className="flex h-8 w-full items-center justify-start gap-2 p-3">
                  <div className="aspect-square w-3 rounded-full bg-white/20"></div>
                  <div className="aspect-square w-3 rounded-full bg-white/20"></div>
                  <div className="aspect-square w-3 rounded-full bg-white/20"></div>
                </div>
                <div className="relative inset-x-0 z-30 aspect-video w-full max-w-screen-md">
                  <Image
                    fill
                    src={layerplots}
                    placeholder="blur"
                    className="object-fit h-full w-full rounded-lg"
                    alt="Screenshot of the landing page of motionridge.com"
                  />
                </div>
              </div>

              <div className="absolute bottom-0 right-0 z-40 -mb-10 flex h-full w-[40%] items-end md:-mr-10">
                <div className="relative inset-x-0 z-20 aspect-video w-full max-w-screen-md">
                  {/* gradient line top */}
                  <div className="absolute inset-x-0 top-0 -mt-[1.9rem] flex h-8 w-full items-end overflow-hidden">
                    <div className="-mb-px flex h-[3px] w-full -scale-x-100">
                      <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                      <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                    </div>
                  </div>
                  {/* gradient line top */}
                  <Image
                    fill
                    src={layerplots2}
                    placeholder="blur"
                    className="object-fit h-full w-full rounded-md shadow-xl"
                    alt="Screenshot of the landing page of motionridge.com"
                  />
                  {/* gradient line bottom */}
                  <div className="absolute inset-x-0 bottom-0 -mb-[2.05rem] flex h-8 w-full rotate-180 items-end overflow-hidden">
                    <div className="-mb-px flex h-[3px] w-full -scale-x-100">
                      <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                      <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                    </div>
                  </div>
                  {/* gradient line bottom */}
                </div>
              </div>
            </div>

            <div className="absolute inset-x-0 z-10 -mt-10 flex justify-center">
              <div className="h-20 w-52 bg-blue-600 blur-[150px]"></div>
            </div>
          </div>
          {/* image */}

          {/* content */}
          <div className="mt-10 w-full md:mt-0 md:w-[40%]">
            <div className="flex w-full items-center justify-between gap-5">
              <h3 className="text-xl font-semibold text-white">
                Layerplots.com
              </h3>
              <a
                target="_blank"
                href="https://nextjs.org/"
                className="flex items-center justify-start gap-2 text-xs text-gray-200 hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 rotate-45"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M8.037 9.858a.5.5 0 0 0-.68.243l-4.193 9.402c-.667 1.496.815 3.047 2.202 2.306l5.904-3.152c.46-.245 1-.245 1.459 0l5.904 3.152c1.387.741 2.869-.81 2.202-2.306l-1.572-3.524a2 2 0 0 0-.932-.975z"
                  />
                  <path
                    fill="currentColor"
                    d="M8.61 8.467a.5.5 0 0 1-.234-.65l2.151-4.823c.59-1.324 2.355-1.324 2.945 0l3.968 8.898a.5.5 0 0 1-.68.65z"
                    opacity=".5"
                  />
                </svg>

                <span className="mt-1">Visit site</span>
              </a>
            </div>

            <p className="mt-5 text-sm/6 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              temporibus blanditiis ducimus error quidem numquam, rem odio unde
              esse cum.
            </p>

            <p className="mt-5 text-sm/6 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              temporibus blanditiis ducimus error quidem numquam, rem odio unde
              esse cum.
            </p>

            <div className="mt-5 w-full">
              <h3 className="text-right text-sm font-medium tracking-wide text-gray-300">
                Technologies used
              </h3>
              <div className="mt-4 flex w-full flex-wrap items-center justify-end gap-5">
                <a
                  target="_blank"
                  href="https://nextjs.org/"
                  className="rounded-full bg-white/70 p-0.5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    viewBox="0 0 128 128"
                  >
                    <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z" />
                  </svg>
                </a>

                <a target="_blank" href="https://tanstack.com/query/v3/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 256 230"
                  >
                    <path
                      fill="#00435B"
                      d="m157.98 142.487l-4.91 8.527a8.288 8.288 0 0 1-7.182 4.151H108.27a8.288 8.288 0 0 1-7.182-4.151l-4.911-8.527h61.802Zm13.747-23.87l-8.658 15.034h-71.98l-8.658-15.034h89.296Zm-8.34-23.342l8.354 14.506H82.417l8.354-14.506h72.616Zm-17.5-22.066a8.288 8.288 0 0 1 7.183 4.151l5.228 9.079H95.86l5.229-9.079a8.288 8.288 0 0 1 7.182-4.151h37.617Z"
                    />
                    <path
                      fill="#002B3B"
                      d="M53.523 69.252c-4.167-20.206-5.062-35.704-2.368-46.957c1.602-6.693 4.53-12.153 8.984-16.093c4.702-4.159 10.646-6.2 17.326-6.2c11.018 0 22.602 5.025 34.98 14.57c5.05 3.894 10.29 8.587 15.732 14.082c.434-.557.923-1.083 1.469-1.57c15.386-13.71 28.34-22.23 39.42-25.514c6.588-1.954 12.773-2.14 18.405-.244c5.946 2 10.683 6.137 14.026 11.93c5.516 9.561 6.97 22.124 4.914 37.637c-.838 6.323-2.271 13.21-4.296 20.673c.764.092 1.53.262 2.288.513c19.521 6.47 33.345 13.426 41.714 21.377c4.98 4.73 8.231 9.996 9.407 15.826c1.24 6.153.03 12.324-3.308 18.113c-5.506 9.548-15.63 17.077-30.052 23.041c-5.79 2.395-12.343 4.564-19.664 6.515c.334.754.594 1.555.767 2.395c4.167 20.206 5.061 35.704 2.368 46.957c-1.602 6.693-4.531 12.153-8.985 16.093c-4.701 4.159-10.646 6.2-17.325 6.2c-11.019 0-22.602-5.025-34.98-14.57c-5.104-3.936-10.402-8.687-15.907-14.258a11.737 11.737 0 0 1-2.084 2.442c-15.386 13.712-28.34 22.23-39.42 25.515c-6.588 1.954-12.773 2.14-18.405.244c-5.946-2-10.683-6.137-14.026-11.93c-5.516-9.561-6.97-22.124-4.914-37.637c.869-6.551 2.376-13.709 4.518-21.485a11.732 11.732 0 0 1-2.51-.537c-19.521-6.47-33.345-13.426-41.714-21.377c-4.98-4.73-8.231-9.996-9.407-15.826c-1.24-6.153-.03-12.325 3.308-18.114c5.506-9.547 15.63-17.077 30.052-23.04c5.963-2.467 12.734-4.693 20.32-6.689a11.81 11.81 0 0 1-.633-2.082Z"
                    />
                    <path
                      fill="#FF4154"
                      d="M189.647 161.333a3.684 3.684 0 0 1 4.235 2.81l.023.112l.207 1.075c6.71 35.276 1.983 52.915-14.18 52.915c-15.813 0-35.944-15.051-60.392-45.153a3.684 3.684 0 0 1 2.777-6.005h.114l1.288.009c10.288.056 20.289-.303 30.004-1.076c11.467-.913 23.442-2.475 35.924-4.687ZM78.646 134.667l.062.105l.646 1.127c5.177 9 10.57 17.542 16.18 25.627c6.608 9.52 14.038 19.158 22.29 28.914a3.684 3.684 0 0 1-.309 5.082l-.093.083l-.83.715c-27.307 23.397-45.055 28.068-53.244 14.012c-8.017-13.757-5.11-38.773 8.719-75.047a3.683 3.683 0 0 1 6.579-.618Zm124.857-52.054l.112.037l1.028.354c33.705 11.725 46.51 24.61 38.416 38.655c-7.916 13.736-30.93 23.738-69.041 30.004a3.683 3.683 0 0 1-3.773-5.501c5.458-9.286 10.375-18.524 14.749-27.717c4.96-10.425 9.615-21.616 13.965-33.57a3.684 3.684 0 0 1 4.432-2.295l.112.033ZM84.446 76.71a3.683 3.683 0 0 1 1.31 5.042c-5.46 9.285-10.376 18.524-14.75 27.717c-4.96 10.425-9.615 21.615-13.965 33.57a3.684 3.684 0 0 1-4.544 2.262l-.112-.037l-1.028-.355c-33.705-11.724-46.51-24.61-38.416-38.654c7.916-13.737 30.93-23.738 69.041-30.004c.85-.14 1.722.022 2.464.459Zm108.206-57.748c8.017 13.758 5.11 38.774-8.719 75.048a3.683 3.683 0 0 1-6.579.618l-.062-.105l-.646-1.127c-5.177-9-10.57-17.542-16.18-25.627c-6.608-9.52-14.038-19.158-22.29-28.914a3.684 3.684 0 0 1 .309-5.082l.093-.083l.83-.715c27.307-23.397 45.055-28.068 53.244-14.013ZM77.45 10.59c15.814 0 35.945 15.05 60.392 45.152a3.684 3.684 0 0 1-2.777 6.005h-.114l-1.288-.008c-10.287-.056-20.289.303-30.003 1.076c-11.468.913-23.443 2.475-35.925 4.687a3.684 3.684 0 0 1-4.234-2.81l-.024-.113l-.207-1.074C56.56 28.228 61.286 10.59 77.45 10.59Z"
                    />
                    <path
                      fill="#FFD94C"
                      d="M111.295 73.67h31.576a12.89 12.89 0 0 1 11.181 6.475l15.855 27.626a12.892 12.892 0 0 1 0 12.834l-15.855 27.626a12.892 12.892 0 0 1-11.181 6.475h-31.576c-4.618 0-8.883-2.47-11.182-6.475L84.26 120.605a12.892 12.892 0 0 1 0-12.834l15.854-27.626a12.892 12.892 0 0 1 11.182-6.475Zm26.763 8.338c4.62 0 8.888 2.473 11.185 6.481l11.056 19.288a12.892 12.892 0 0 1 0 12.822l-11.056 19.288a12.892 12.892 0 0 1-11.185 6.48h-21.95c-4.62 0-8.888-2.472-11.185-6.48l-11.056-19.288a12.892 12.892 0 0 1 0-12.822l11.056-19.288a12.892 12.892 0 0 1 11.184-6.48h21.951Zm-5.187 9.12h-11.576a12.892 12.892 0 0 0-11.179 6.47l-5.842 10.167a12.892 12.892 0 0 0 0 12.846l5.842 10.168a12.892 12.892 0 0 0 11.179 6.47h11.576c4.616 0 8.88-2.468 11.179-6.47l5.842-10.168a12.892 12.892 0 0 0 0-12.846l-5.842-10.168a12.892 12.892 0 0 0-11.179-6.47Zm-4.994 8.729c4.612 0 8.873 2.464 11.173 6.46l.829 1.44a12.892 12.892 0 0 1 0 12.862l-.829 1.44a12.892 12.892 0 0 1-11.173 6.46h-1.588a12.892 12.892 0 0 1-11.173-6.46l-.829-1.44a12.892 12.892 0 0 1 0-12.862l.829-1.44a12.892 12.892 0 0 1 11.173-6.46h1.588Zm-.792 8.599a5.738 5.738 0 0 0-4.97 2.866a5.729 5.729 0 0 0 0 5.732a5.738 5.738 0 0 0 9.937 0a5.729 5.729 0 0 0 0-5.732a5.736 5.736 0 0 0-4.967-2.866Zm-46.509 5.732h10.32"
                    />
                  </svg>
                </a>

                <a target="_blank" href="https://tailwindcss.com/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="#44a8b3"
                      d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1Zm-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1Z"
                    />
                  </svg>
                </a>

                <a
                  target="_blank"
                  href="https://www.framer.com/motion/"
                  className="flex aspect-square h-8 w-8 items-center justify-center rounded-full bg-white/70 p-0.5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-1 h-6 w-6"
                    viewBox="0 0 128 128"
                  >
                    <path d="M22.684 0h84.253v42.667H64.81L22.684 0Zm0 42.667H64.81l42.127 42.666H64.81V128L22.684 85.333V42.667Z" />
                  </svg>
                </a>

                <a target="_blank" href="https://www.mongodb.com/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 256 256"
                  >
                    <g fill="none">
                      <rect width="256" height="256" fill="#023430" rx="60" />
                      <path
                        fill="#10AA50"
                        d="M171.173 107.591c-10.537-46.481-32.497-58.855-38.099-67.602A99.398 99.398 0 0 1 126.949 28c-.296 4.13-.84 6.73-4.35 9.862c-7.047 6.283-36.977 30.673-39.496 83.486c-2.347 49.242 36.2 79.605 41.292 82.744c3.916 1.927 8.685.041 11.012-1.728c18.581-12.752 43.969-46.75 35.786-94.773"
                      />
                      <path
                        fill="#B8C4C2"
                        d="M128.545 177.871c-.97 12.188-1.665 19.27-4.129 26.235c0 0 1.617 11.603 2.753 23.894h4.019a223.446 223.446 0 0 1 4.384-25.732c-5.203-2.56-6.827-13.702-7.027-24.397Z"
                      />
                      <path
                        fill="#12924F"
                        d="M135.565 202.275c-5.258-2.429-6.779-13.806-7.013-24.404a499.824 499.824 0 0 0 1.136-52.545c-.276-9.194.13-85.158-2.265-96.28a92.425 92.425 0 0 0 5.651 10.936c5.602 8.754 27.569 21.128 38.099 67.609c8.203 47.941-17.047 81.849-35.608 94.684Z"
                      />
                    </g>
                  </svg>
                </a>

                <a target="_blank" href="https://nestjs.com/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 256 256"
                  >
                    <g fill="none">
                      <rect width="256" height="256" fill="#242938" rx="60" />
                      <path
                        fill="#E0234E"
                        d="M146.728 18c-1.556 0-3.001.342-4.335.799c2.835 1.939 4.391 4.506 5.169 7.415c.056.399.167.684.222 1.083c.056.343.112.685.112 1.027c.222 5.02-1.279 5.647-2.335 8.613c-1.612 3.822-1.167 7.928.778 11.237c.167.399.389.855.667 1.255c-2.112-14.431 9.616-16.599 11.784-21.105c.166-3.936-3.002-6.56-5.503-8.385c-2.39-1.483-4.558-1.939-6.559-1.939Zm17.676 3.251c-.223 1.312-.056.97-.111 1.654c-.056.457-.056 1.027-.112 1.483a12.56 12.56 0 0 1-.389 1.37c-.111.456-.278.912-.444 1.368c-.223.457-.389.856-.612 1.312c-.166.228-.278.456-.444.685l-.334.513c-.278.4-.556.799-.834 1.14c-.333.343-.611.742-1 1.027v.058c-.334.285-.667.627-1.056.912c-1.167.913-2.501 1.597-3.724 2.453c-.389.285-.778.513-1.112.855c-.389.286-.722.57-1.056.913c-.389.342-.667.684-1 1.084c-.278.342-.612.741-.834 1.14c-.278.4-.556.8-.778 1.198c-.223.457-.389.856-.612 1.312c-.166.457-.333.856-.444 1.312c-.167.514-.278.97-.389 1.426c-.056.228-.056.514-.112.742c-.055.228-.055.456-.111.684c0 .456-.055.97-.055 1.426c0 .342 0 .685.055 1.027c0 .456.056.912.167 1.426c.056.456.167.912.278 1.369c.167.456.278.912.445 1.369c.111.285.278.57.389.798l-12.784-5.076a134.536 134.536 0 0 0-6.448-1.711l-3.502-.856a100.696 100.696 0 0 0-10.116-1.54c-.111 0-.166-.057-.278-.057a96.867 96.867 0 0 0-9.949-.514c-2.446 0-4.891.114-7.281.286c-3.39.228-6.781.684-10.172 1.255c-.834.114-1.667.285-2.501.456c-1.723.342-3.39.741-5.003 1.14l-2.5.685c-.835.342-1.613.742-2.39 1.084l-1.835.855c-.111.057-.222.057-.278.114c-.556.286-1.056.514-1.556.799a2.667 2.667 0 0 0-.39.171c-.61.285-1.222.627-1.722.913c-.39.17-.779.399-1.112.57c-.167.114-.39.228-.5.285c-.5.286-1 .57-1.446.856c-.5.285-.944.57-1.334.855c-.389.286-.778.514-1.111.799c-.056.057-.111.057-.167.114c-.333.228-.722.513-1.056.799l-.111.114l-.834.684c-.11.057-.222.171-.333.228c-.278.228-.556.514-.834.742c-.056.114-.167.17-.222.228c-.334.342-.667.627-1 .97c-.057 0-.057.057-.112.114c-.334.285-.667.627-1 .97c-.056.056-.056.113-.112.113c-.278.285-.555.57-.833.913c-.111.114-.278.228-.39.342c-.277.342-.61.685-.944 1.027c-.056.114-.167.171-.223.285c-.444.456-.834.913-1.278 1.369l-.167.171c-.89.97-1.834 1.94-2.835 2.795c-1 .913-2.056 1.768-3.112 2.51a41.904 41.904 0 0 1-3.335 2.167a33.512 33.512 0 0 1-3.502 1.711a39.4 39.4 0 0 1-3.613 1.37c-2.334.513-4.724 1.482-6.78 1.653c-.446 0-.946.114-1.39.172c-.5.114-.945.228-1.39.342c-.445.17-.89.342-1.334.513c-.445.171-.89.4-1.334.628c-.39.285-.834.513-1.223.798a9.13 9.13 0 0 0-1.111.97c-.39.285-.779.684-1.112 1.026c-.334.4-.667.742-.945 1.141c-.278.457-.611.856-.834 1.312c-.278.4-.556.856-.778 1.312c-.222.513-.445.97-.611 1.483c-.167.456-.334.97-.5 1.483c-.112.456-.223.913-.278 1.369c0 .057-.056.114-.056.171c-.111.514-.111 1.198-.167 1.54c-.056.4-.111.742-.111 1.141c0 .228 0 .513.056.742c.055.399.11.741.222 1.083c.111.343.223.685.39 1.027v.057c.166.342.388.684.61 1.027c.223.342.445.684.723 1.026c.278.286.612.628.945.913a8.16 8.16 0 0 0 1.056.913c1.334 1.197 1.668 1.597 3.39 2.509c.279.172.556.286.89.457c.056 0 .111.057.167.057c0 .114 0 .171.055.285c.056.456.167.913.278 1.369c.111.513.278.97.445 1.369c.167.342.278.684.445 1.027c.055.114.11.228.166.285c.223.456.445.855.667 1.255l.834 1.198c.278.342.612.741.945 1.083c.334.343.667.628 1.056.97c0 0 .056.057.111.057c.334.285.667.571 1 .799c.39.285.779.513 1.224.741a9.03 9.03 0 0 0 1.278.628c.333.171.722.285 1.112.399c.055.057.11.057.222.114c.222.057.5.114.723.171c-.167 3.08-.223 5.989.222 7.016c.5 1.141 2.946-2.339 5.392-6.332c-.334 3.936-.556 8.556 0 9.925c.61 1.426 3.946-3.023 6.836-7.928c39.408-9.355 75.37 18.595 79.15 58.066c-.723-6.161-8.115-9.583-11.506-8.727c-1.667 4.22-4.502 9.639-9.06 13.004c.39-3.764.223-7.643-.555-11.407c-1.223 5.247-3.613 10.153-6.893 14.373c-5.28.4-10.56-2.224-13.34-6.16c-.222-.171-.277-.513-.444-.741c-.167-.4-.334-.799-.445-1.198a4.835 4.835 0 0 1-.333-1.198c-.056-.399-.056-.798-.056-1.255v-.855c.056-.4.167-.799.278-1.198c.11-.399.222-.799.389-1.198c.222-.399.389-.798.667-1.198c.945-2.738.945-4.962-.778-6.274a6.283 6.283 0 0 0-1.056-.57c-.223-.058-.5-.172-.723-.229c-.167-.057-.278-.114-.444-.171c-.39-.114-.779-.228-1.168-.285a4.133 4.133 0 0 0-1.167-.171a8.869 8.869 0 0 0-1.223-.114c-.278 0-.556.057-.834.057c-.444 0-.833.057-1.222.171c-.39.057-.779.114-1.168.228c-.389.114-.778.229-1.167.4s-.722.342-1.111.513c-.334.171-.668.399-1.057.57c-12.95 8.67-5.224 28.976 3.613 34.851c-3.335.628-6.725 1.369-7.67 2.111l-.111.114c2.39 1.483 4.891 2.738 7.504 3.821a179.626 179.626 0 0 0 9.004 2.738v.057a52.428 52.428 0 0 0 14.007 1.027c24.623-1.768 44.799-20.99 48.468-46.316c.111.514.222.97.333 1.483c.167 1.027.389 2.111.501 3.194v.058c.111.513.166 1.026.222 1.483v.228c.056.513.111 1.027.111 1.483c.056.627.111 1.255.111 1.882v.913c0 .285.056.627.056.912c0 .343-.056.685-.056 1.027v.799c0 .399-.055.741-.055 1.141c0 .228 0 .456-.056.741c0 .399-.056.799-.056 1.255c-.056.171-.056.342-.056.513c-.055.457-.111.856-.166 1.312c0 .171 0 .342-.056.514c-.056.57-.167 1.083-.222 1.654v.114c-.111.513-.223 1.084-.334 1.597v.171l-.333 1.54c0 .057-.056.171-.056.228a15.517 15.517 0 0 1-.389 1.541v.171c-.167.57-.334 1.083-.445 1.597c-.055.057-.055.114-.055.114l-.501 1.711c-.222.57-.389 1.084-.611 1.654c-.222.57-.389 1.141-.611 1.654c-.223.571-.445 1.084-.667 1.654h-.056c-.223.514-.445 1.084-.723 1.597a2.832 2.832 0 0 1-.167.4c-.055.057-.055.114-.111.171c-3.613 7.472-8.948 14.031-15.618 19.165c-.445.285-.89.627-1.334.97c-.111.113-.278.171-.389.285c-.39.285-.779.57-1.223.855l.166.343h.056l2.335-.343h.055c1.445-.228 2.891-.513 4.336-.798a9.518 9.518 0 0 0 1.223-.285c.277-.058.5-.114.778-.172c.389-.057.778-.171 1.167-.228c.333-.114.667-.171 1-.285c5.559-1.369 10.95-3.251 16.119-5.476c-8.837 12.378-20.676 22.36-34.516 28.919c6.392-.456 12.784-1.54 18.953-3.365c22.4-6.788 41.243-22.246 52.526-43.065c-2.279 13.176-7.393 25.725-14.952 36.676a88.023 88.023 0 0 0 14.841-12.662c12.45-13.347 20.621-30.288 23.4-48.483a93.136 93.136 0 0 1 1.612 27.492c40.131-57.438 3.335-116.987-12.061-132.672c-.056-.114-.111-.172-.111-.286c-.056.058-.056.058-.056.114c0-.057 0-.057-.056-.114c0 .685-.056 1.37-.111 2.054a78.116 78.116 0 0 1-.556 3.821c-.278 1.255-.611 2.51-.945 3.765a47.898 47.898 0 0 1-1.334 3.65a49.601 49.601 0 0 1-1.667 3.48c-.612 1.084-1.279 2.224-2.001 3.251a43.7 43.7 0 0 1-2.279 3.08c-.834 1.027-1.723 1.94-2.612 2.852c-.556.514-1.057.97-1.612 1.426c-.445.4-.834.742-1.279 1.14c-1 .8-2.001 1.54-3.112 2.225c-1.056.685-2.168 1.37-3.28 1.94a95.02 95.02 0 0 1-3.501 1.597a38.598 38.598 0 0 1-3.613 1.198a43.872 43.872 0 0 1-3.724.855c-1.279.229-2.557.343-3.78.457c-.889.057-1.779.114-2.668.114c-1.278 0-2.557-.114-3.78-.229c-1.278-.114-2.556-.285-3.779-.57c-1.279-.228-2.501-.57-3.724-.97h-.056c1.223-.114 2.446-.228 3.669-.456a39.423 39.423 0 0 0 3.724-.856a38.452 38.452 0 0 0 3.612-1.198c1.223-.456 2.39-1.026 3.502-1.597c1.167-.57 2.223-1.197 3.335-1.882c1.056-.741 2.112-1.483 3.113-2.281a30.68 30.68 0 0 0 2.834-2.567c.945-.856 1.779-1.825 2.613-2.795a55.775 55.775 0 0 0 2.334-3.08c.111-.171.223-.4.334-.57a70.926 70.926 0 0 0 1.612-2.739a39.8 39.8 0 0 0 1.667-3.479a40.7 40.7 0 0 0 1.334-3.65c.389-1.198.667-2.453.945-3.708c.223-1.312.445-2.567.556-3.821c.111-1.312.222-2.624.222-3.88c0-.912-.055-1.824-.111-2.737c-.111-1.312-.278-2.567-.444-3.822a42.647 42.647 0 0 0-.834-3.821c-.389-1.198-.778-2.453-1.223-3.65c-.445-1.199-1-2.396-1.556-3.537c-.612-1.14-1.223-2.282-1.89-3.365a63.283 63.283 0 0 0-2.223-3.138c-.834-.97-1.668-1.939-2.557-2.909c-.445-.456-.945-.97-1.445-1.425a102.618 102.618 0 0 0-7.726-5.59a9.92 9.92 0 0 0-1.112-.57c-1.834-1.199-3.557-1.826-5.28-2.396Z"
                      />
                    </g>
                  </svg>
                </a>

                <a target="_blank" href="https://firebase.google.com">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 256 351"
                  >
                    <defs>
                      <filter
                        id="logosFirebase0"
                        width="200%"
                        height="200%"
                        x="-50%"
                        y="-50%"
                        filterUnits="objectBoundingBox"
                      >
                        <feGaussianBlur
                          in="SourceAlpha"
                          result="shadowBlurInner1"
                          stdDeviation="17.5"
                        />
                        <feOffset
                          in="shadowBlurInner1"
                          result="shadowOffsetInner1"
                        />
                        <feComposite
                          in="shadowOffsetInner1"
                          in2="SourceAlpha"
                          k2="-1"
                          k3="1"
                          operator="arithmetic"
                          result="shadowInnerInner1"
                        />
                        <feColorMatrix
                          in="shadowInnerInner1"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                        />
                      </filter>
                      <filter
                        id="logosFirebase1"
                        width="200%"
                        height="200%"
                        x="-50%"
                        y="-50%"
                        filterUnits="objectBoundingBox"
                      >
                        <feGaussianBlur
                          in="SourceAlpha"
                          result="shadowBlurInner1"
                          stdDeviation="3.5"
                        />
                        <feOffset
                          dx="1"
                          dy="-9"
                          in="shadowBlurInner1"
                          result="shadowOffsetInner1"
                        />
                        <feComposite
                          in="shadowOffsetInner1"
                          in2="SourceAlpha"
                          k2="-1"
                          k3="1"
                          operator="arithmetic"
                          result="shadowInnerInner1"
                        />
                        <feColorMatrix
                          in="shadowInnerInner1"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
                        />
                      </filter>
                      <path
                        id="logosFirebase2"
                        d="m1.253 280.732l1.605-3.131l99.353-188.518l-44.15-83.475C54.392-1.283 45.074.474 43.87 8.188z"
                      />
                      <path
                        id="logosFirebase3"
                        d="m134.417 148.974l32.039-32.812l-32.039-61.007c-3.042-5.791-10.433-6.398-13.443-.59l-17.705 34.109l-.53 1.744z"
                      />
                    </defs>
                    <path
                      fill="#FFC24A"
                      d="m0 282.998l2.123-2.972L102.527 89.512l.212-2.017L58.48 4.358C54.77-2.606 44.33-.845 43.114 6.951z"
                    />
                    <use
                      fill="#FFA712"
                      fill-rule="evenodd"
                      href="#logosFirebase2"
                    />
                    <use filter="url(#logosFirebase0)" href="#logosFirebase2" />
                    <path
                      fill="#F4BD62"
                      d="m135.005 150.38l32.955-33.75l-32.965-62.93c-3.129-5.957-11.866-5.975-14.962 0L102.42 87.287v2.86z"
                    />
                    <use
                      fill="#FFA50E"
                      fill-rule="evenodd"
                      href="#logosFirebase3"
                    />
                    <use filter="url(#logosFirebase1)" href="#logosFirebase3" />
                    <path
                      fill="#F6820C"
                      d="m0 282.998l.962-.968l3.496-1.42l128.477-128l1.628-4.431l-32.05-61.074z"
                    />
                    <path
                      fill="#FDE068"
                      d="m139.121 347.551l116.275-64.847l-33.204-204.495c-1.039-6.398-8.888-8.927-13.468-4.34L0 282.998l115.608 64.548a24.126 24.126 0 0 0 23.513.005"
                    />
                    <path
                      fill="#FCCA3F"
                      d="M254.354 282.16L221.402 79.218c-1.03-6.35-7.558-8.977-12.103-4.424L1.29 282.6l114.339 63.908a23.943 23.943 0 0 0 23.334.006z"
                    />
                    <path
                      fill="#EEAB37"
                      d="M139.12 345.64a24.126 24.126 0 0 1-23.512-.005L.931 282.015l-.93.983l115.607 64.548a24.126 24.126 0 0 0 23.513.005l116.275-64.847l-.285-1.752z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* content */}
        </div>
      </section>
      {/* projects */}

      {/* other projects */}
      <section className="relative -mt-20 min-h-[100dvh] pb-72 md:-mt-44">
        <div className="pointer-events-none absolute inset-0 flex justify-center">
          <div className="mx-2 w-full border-x border-white/5 md:hidden"></div>
          <div className="hidden h-full w-full max-w-7xl grid-cols-[1fr_448px_1fr] gap-3.5 px-2 md:grid lg:grid-cols-3 lg:px-4">
            <div className="border-x border-white/[0.055]"></div>
            <div className="border-x border-white/[0.055]"></div>
            <div className="border-x border-white/[0.055]"></div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md grid-cols-3 gap-3.5 space-y-14 pt-20 md:space-y-0 md:pt-72 lg:grid lg:max-w-7xl lg:px-4">
          <div className="relative">
            <div className="hidden md:block">
              <div
                className="absolute -inset-x-16 top-0 h-px"
                style={{
                  backgroundImage: `linear-gradient(to right, transparent, rgba(255, 255, 255, 0.05) 24px, rgba(255, 255, 255, 0.05) calc(100% - 24px), transparent)`,
                }}
              ></div>
              <div
                className="absolute -inset-x-16 bottom-0 h-px"
                style={{
                  backgroundImage: `linear-gradient(to right, transparent, rgba(255, 255, 255, 0.05) 24px, rgba(255, 255, 255, 0.05) calc(100% - 24px), transparent)`,
                }}
              ></div>
              <div
                className="absolute -inset-y-16 left-0 w-px"
                style={{
                  backgroundImage: `linear-gradient(transparent, rgba(255, 255, 255, 0.05) 24px, rgba(255, 255, 255, 0.05) calc(100% - 24px), transparent)`,
                }}
              ></div>
              <div
                className="absolute -inset-y-16 -left-[15px] w-px md:hidden"
                style={{
                  backgroundImage: `linear-gradient(transparent, rgba(255, 255, 255, 0.05) 24px, rgba(255, 255, 255, 0.05) calc(100% - 24px), transparent)`,
                }}
              ></div>
              <div
                className="absolute -inset-y-16 right-0 w-px"
                style={{
                  backgroundImage: `linear-gradient(transparent, rgba(255, 255, 255, 0.05) 24px, rgba(255, 255, 255, 0.05) calc(100% - 24px), transparent)`,
                }}
              ></div>
              <div
                className="absolute -inset-y-16 -right-[15px] w-px"
                style={{
                  backgroundImage: `linear-gradient(transparent, rgba(255, 255, 255, 0.05) 24px, rgba(255, 255, 255, 0.05) calc(100% - 24px), transparent)`,
                }}
              ></div>
            </div>

            <div className="h-full max-w-md p-3 md:bg-white/[0.03]">
              <div className="relative h-56 overflow-hidden rounded-xl">
                <Image
                  fill
                  src={kifgo2}
                  placeholder="blur"
                  className="object-fit aspect-video h-full w-full shadow-xl"
                  alt="Screenshot of the landing page of motionridge.com"
                />
              </div>

              <div className="mt-5 p-3">
                <div className="flex w-full items-center justify-between gap-5">
                  <h3 className="text-xl font-semibold text-white">
                    Motionridge.com
                  </h3>
                  <a
                    target="_blank"
                    href="https://nextjs.org/"
                    className="flex items-center justify-start gap-2 text-xs text-gray-200 hover:underline"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 rotate-45"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M8.037 9.858a.5.5 0 0 0-.68.243l-4.193 9.402c-.667 1.496.815 3.047 2.202 2.306l5.904-3.152c.46-.245 1-.245 1.459 0l5.904 3.152c1.387.741 2.869-.81 2.202-2.306l-1.572-3.524a2 2 0 0 0-.932-.975z"
                      />
                      <path
                        fill="currentColor"
                        d="M8.61 8.467a.5.5 0 0 1-.234-.65l2.151-4.823c.59-1.324 2.355-1.324 2.945 0l3.968 8.898a.5.5 0 0 1-.68.65z"
                        opacity=".5"
                      />
                    </svg>

                    <span className="mt-1">Visit site</span>
                  </a>
                </div>

                <p className="mt-5 text-sm/6 text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis temporibus blanditiis ducimus error quidem numquam,
                  rem odio unde esse cum.
                </p>

                <p className="mt-5 text-sm/6 text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis temporibus blanditiis ducimus error quidem numquam,
                  rem odio unde esse cum.
                </p>

                <div className="mt-5 flex w-full flex-wrap items-center justify-end gap-3">
                  <a
                    target="_blank"
                    href="https://nextjs.org/"
                    className="rounded-full bg-white/70 p-0.5"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 128 128"
                    >
                      <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z" />
                    </svg>
                  </a>

                  <a target="_blank" href="https://tanstack.com/query/v3/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 256 230"
                    >
                      <path
                        fill="#00435B"
                        d="m157.98 142.487l-4.91 8.527a8.288 8.288 0 0 1-7.182 4.151H108.27a8.288 8.288 0 0 1-7.182-4.151l-4.911-8.527h61.802Zm13.747-23.87l-8.658 15.034h-71.98l-8.658-15.034h89.296Zm-8.34-23.342l8.354 14.506H82.417l8.354-14.506h72.616Zm-17.5-22.066a8.288 8.288 0 0 1 7.183 4.151l5.228 9.079H95.86l5.229-9.079a8.288 8.288 0 0 1 7.182-4.151h37.617Z"
                      />
                      <path
                        fill="#002B3B"
                        d="M53.523 69.252c-4.167-20.206-5.062-35.704-2.368-46.957c1.602-6.693 4.53-12.153 8.984-16.093c4.702-4.159 10.646-6.2 17.326-6.2c11.018 0 22.602 5.025 34.98 14.57c5.05 3.894 10.29 8.587 15.732 14.082c.434-.557.923-1.083 1.469-1.57c15.386-13.71 28.34-22.23 39.42-25.514c6.588-1.954 12.773-2.14 18.405-.244c5.946 2 10.683 6.137 14.026 11.93c5.516 9.561 6.97 22.124 4.914 37.637c-.838 6.323-2.271 13.21-4.296 20.673c.764.092 1.53.262 2.288.513c19.521 6.47 33.345 13.426 41.714 21.377c4.98 4.73 8.231 9.996 9.407 15.826c1.24 6.153.03 12.324-3.308 18.113c-5.506 9.548-15.63 17.077-30.052 23.041c-5.79 2.395-12.343 4.564-19.664 6.515c.334.754.594 1.555.767 2.395c4.167 20.206 5.061 35.704 2.368 46.957c-1.602 6.693-4.531 12.153-8.985 16.093c-4.701 4.159-10.646 6.2-17.325 6.2c-11.019 0-22.602-5.025-34.98-14.57c-5.104-3.936-10.402-8.687-15.907-14.258a11.737 11.737 0 0 1-2.084 2.442c-15.386 13.712-28.34 22.23-39.42 25.515c-6.588 1.954-12.773 2.14-18.405.244c-5.946-2-10.683-6.137-14.026-11.93c-5.516-9.561-6.97-22.124-4.914-37.637c.869-6.551 2.376-13.709 4.518-21.485a11.732 11.732 0 0 1-2.51-.537c-19.521-6.47-33.345-13.426-41.714-21.377c-4.98-4.73-8.231-9.996-9.407-15.826c-1.24-6.153-.03-12.325 3.308-18.114c5.506-9.547 15.63-17.077 30.052-23.04c5.963-2.467 12.734-4.693 20.32-6.689a11.81 11.81 0 0 1-.633-2.082Z"
                      />
                      <path
                        fill="#FF4154"
                        d="M189.647 161.333a3.684 3.684 0 0 1 4.235 2.81l.023.112l.207 1.075c6.71 35.276 1.983 52.915-14.18 52.915c-15.813 0-35.944-15.051-60.392-45.153a3.684 3.684 0 0 1 2.777-6.005h.114l1.288.009c10.288.056 20.289-.303 30.004-1.076c11.467-.913 23.442-2.475 35.924-4.687ZM78.646 134.667l.062.105l.646 1.127c5.177 9 10.57 17.542 16.18 25.627c6.608 9.52 14.038 19.158 22.29 28.914a3.684 3.684 0 0 1-.309 5.082l-.093.083l-.83.715c-27.307 23.397-45.055 28.068-53.244 14.012c-8.017-13.757-5.11-38.773 8.719-75.047a3.683 3.683 0 0 1 6.579-.618Zm124.857-52.054l.112.037l1.028.354c33.705 11.725 46.51 24.61 38.416 38.655c-7.916 13.736-30.93 23.738-69.041 30.004a3.683 3.683 0 0 1-3.773-5.501c5.458-9.286 10.375-18.524 14.749-27.717c4.96-10.425 9.615-21.616 13.965-33.57a3.684 3.684 0 0 1 4.432-2.295l.112.033ZM84.446 76.71a3.683 3.683 0 0 1 1.31 5.042c-5.46 9.285-10.376 18.524-14.75 27.717c-4.96 10.425-9.615 21.615-13.965 33.57a3.684 3.684 0 0 1-4.544 2.262l-.112-.037l-1.028-.355c-33.705-11.724-46.51-24.61-38.416-38.654c7.916-13.737 30.93-23.738 69.041-30.004c.85-.14 1.722.022 2.464.459Zm108.206-57.748c8.017 13.758 5.11 38.774-8.719 75.048a3.683 3.683 0 0 1-6.579.618l-.062-.105l-.646-1.127c-5.177-9-10.57-17.542-16.18-25.627c-6.608-9.52-14.038-19.158-22.29-28.914a3.684 3.684 0 0 1 .309-5.082l.093-.083l.83-.715c27.307-23.397 45.055-28.068 53.244-14.013ZM77.45 10.59c15.814 0 35.945 15.05 60.392 45.152a3.684 3.684 0 0 1-2.777 6.005h-.114l-1.288-.008c-10.287-.056-20.289.303-30.003 1.076c-11.468.913-23.443 2.475-35.925 4.687a3.684 3.684 0 0 1-4.234-2.81l-.024-.113l-.207-1.074C56.56 28.228 61.286 10.59 77.45 10.59Z"
                      />
                      <path
                        fill="#FFD94C"
                        d="M111.295 73.67h31.576a12.89 12.89 0 0 1 11.181 6.475l15.855 27.626a12.892 12.892 0 0 1 0 12.834l-15.855 27.626a12.892 12.892 0 0 1-11.181 6.475h-31.576c-4.618 0-8.883-2.47-11.182-6.475L84.26 120.605a12.892 12.892 0 0 1 0-12.834l15.854-27.626a12.892 12.892 0 0 1 11.182-6.475Zm26.763 8.338c4.62 0 8.888 2.473 11.185 6.481l11.056 19.288a12.892 12.892 0 0 1 0 12.822l-11.056 19.288a12.892 12.892 0 0 1-11.185 6.48h-21.95c-4.62 0-8.888-2.472-11.185-6.48l-11.056-19.288a12.892 12.892 0 0 1 0-12.822l11.056-19.288a12.892 12.892 0 0 1 11.184-6.48h21.951Zm-5.187 9.12h-11.576a12.892 12.892 0 0 0-11.179 6.47l-5.842 10.167a12.892 12.892 0 0 0 0 12.846l5.842 10.168a12.892 12.892 0 0 0 11.179 6.47h11.576c4.616 0 8.88-2.468 11.179-6.47l5.842-10.168a12.892 12.892 0 0 0 0-12.846l-5.842-10.168a12.892 12.892 0 0 0-11.179-6.47Zm-4.994 8.729c4.612 0 8.873 2.464 11.173 6.46l.829 1.44a12.892 12.892 0 0 1 0 12.862l-.829 1.44a12.892 12.892 0 0 1-11.173 6.46h-1.588a12.892 12.892 0 0 1-11.173-6.46l-.829-1.44a12.892 12.892 0 0 1 0-12.862l.829-1.44a12.892 12.892 0 0 1 11.173-6.46h1.588Zm-.792 8.599a5.738 5.738 0 0 0-4.97 2.866a5.729 5.729 0 0 0 0 5.732a5.738 5.738 0 0 0 9.937 0a5.729 5.729 0 0 0 0-5.732a5.736 5.736 0 0 0-4.967-2.866Zm-46.509 5.732h10.32"
                      />
                    </svg>
                  </a>

                  <a target="_blank" href="https://tailwindcss.com/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="#44a8b3"
                        d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1Zm-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1Z"
                      />
                    </svg>
                  </a>

                  <a
                    target="_blank"
                    href="https://www.framer.com/motion/"
                    className="flex aspect-square h-6 w-6 items-center justify-center rounded-full bg-white/70 p-0.5"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mt-1 h-6 w-6"
                      viewBox="0 0 128 128"
                    >
                      <path d="M22.684 0h84.253v42.667H64.81L22.684 0Zm0 42.667H64.81l42.127 42.666H64.81V128L22.684 85.333V42.667Z" />
                    </svg>
                  </a>

                  <a target="_blank" href="https://www.mongodb.com/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 256 256"
                    >
                      <g fill="none">
                        <rect width="256" height="256" fill="#023430" rx="60" />
                        <path
                          fill="#10AA50"
                          d="M171.173 107.591c-10.537-46.481-32.497-58.855-38.099-67.602A99.398 99.398 0 0 1 126.949 28c-.296 4.13-.84 6.73-4.35 9.862c-7.047 6.283-36.977 30.673-39.496 83.486c-2.347 49.242 36.2 79.605 41.292 82.744c3.916 1.927 8.685.041 11.012-1.728c18.581-12.752 43.969-46.75 35.786-94.773"
                        />
                        <path
                          fill="#B8C4C2"
                          d="M128.545 177.871c-.97 12.188-1.665 19.27-4.129 26.235c0 0 1.617 11.603 2.753 23.894h4.019a223.446 223.446 0 0 1 4.384-25.732c-5.203-2.56-6.827-13.702-7.027-24.397Z"
                        />
                        <path
                          fill="#12924F"
                          d="M135.565 202.275c-5.258-2.429-6.779-13.806-7.013-24.404a499.824 499.824 0 0 0 1.136-52.545c-.276-9.194.13-85.158-2.265-96.28a92.425 92.425 0 0 0 5.651 10.936c5.602 8.754 27.569 21.128 38.099 67.609c8.203 47.941-17.047 81.849-35.608 94.684Z"
                        />
                      </g>
                    </svg>
                  </a>

                  <a target="_blank" href="https://nestjs.com/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 256 256"
                    >
                      <g fill="none">
                        <rect width="256" height="256" fill="#242938" rx="60" />
                        <path
                          fill="#E0234E"
                          d="M146.728 18c-1.556 0-3.001.342-4.335.799c2.835 1.939 4.391 4.506 5.169 7.415c.056.399.167.684.222 1.083c.056.343.112.685.112 1.027c.222 5.02-1.279 5.647-2.335 8.613c-1.612 3.822-1.167 7.928.778 11.237c.167.399.389.855.667 1.255c-2.112-14.431 9.616-16.599 11.784-21.105c.166-3.936-3.002-6.56-5.503-8.385c-2.39-1.483-4.558-1.939-6.559-1.939Zm17.676 3.251c-.223 1.312-.056.97-.111 1.654c-.056.457-.056 1.027-.112 1.483a12.56 12.56 0 0 1-.389 1.37c-.111.456-.278.912-.444 1.368c-.223.457-.389.856-.612 1.312c-.166.228-.278.456-.444.685l-.334.513c-.278.4-.556.799-.834 1.14c-.333.343-.611.742-1 1.027v.058c-.334.285-.667.627-1.056.912c-1.167.913-2.501 1.597-3.724 2.453c-.389.285-.778.513-1.112.855c-.389.286-.722.57-1.056.913c-.389.342-.667.684-1 1.084c-.278.342-.612.741-.834 1.14c-.278.4-.556.8-.778 1.198c-.223.457-.389.856-.612 1.312c-.166.457-.333.856-.444 1.312c-.167.514-.278.97-.389 1.426c-.056.228-.056.514-.112.742c-.055.228-.055.456-.111.684c0 .456-.055.97-.055 1.426c0 .342 0 .685.055 1.027c0 .456.056.912.167 1.426c.056.456.167.912.278 1.369c.167.456.278.912.445 1.369c.111.285.278.57.389.798l-12.784-5.076a134.536 134.536 0 0 0-6.448-1.711l-3.502-.856a100.696 100.696 0 0 0-10.116-1.54c-.111 0-.166-.057-.278-.057a96.867 96.867 0 0 0-9.949-.514c-2.446 0-4.891.114-7.281.286c-3.39.228-6.781.684-10.172 1.255c-.834.114-1.667.285-2.501.456c-1.723.342-3.39.741-5.003 1.14l-2.5.685c-.835.342-1.613.742-2.39 1.084l-1.835.855c-.111.057-.222.057-.278.114c-.556.286-1.056.514-1.556.799a2.667 2.667 0 0 0-.39.171c-.61.285-1.222.627-1.722.913c-.39.17-.779.399-1.112.57c-.167.114-.39.228-.5.285c-.5.286-1 .57-1.446.856c-.5.285-.944.57-1.334.855c-.389.286-.778.514-1.111.799c-.056.057-.111.057-.167.114c-.333.228-.722.513-1.056.799l-.111.114l-.834.684c-.11.057-.222.171-.333.228c-.278.228-.556.514-.834.742c-.056.114-.167.17-.222.228c-.334.342-.667.627-1 .97c-.057 0-.057.057-.112.114c-.334.285-.667.627-1 .97c-.056.056-.056.113-.112.113c-.278.285-.555.57-.833.913c-.111.114-.278.228-.39.342c-.277.342-.61.685-.944 1.027c-.056.114-.167.171-.223.285c-.444.456-.834.913-1.278 1.369l-.167.171c-.89.97-1.834 1.94-2.835 2.795c-1 .913-2.056 1.768-3.112 2.51a41.904 41.904 0 0 1-3.335 2.167a33.512 33.512 0 0 1-3.502 1.711a39.4 39.4 0 0 1-3.613 1.37c-2.334.513-4.724 1.482-6.78 1.653c-.446 0-.946.114-1.39.172c-.5.114-.945.228-1.39.342c-.445.17-.89.342-1.334.513c-.445.171-.89.4-1.334.628c-.39.285-.834.513-1.223.798a9.13 9.13 0 0 0-1.111.97c-.39.285-.779.684-1.112 1.026c-.334.4-.667.742-.945 1.141c-.278.457-.611.856-.834 1.312c-.278.4-.556.856-.778 1.312c-.222.513-.445.97-.611 1.483c-.167.456-.334.97-.5 1.483c-.112.456-.223.913-.278 1.369c0 .057-.056.114-.056.171c-.111.514-.111 1.198-.167 1.54c-.056.4-.111.742-.111 1.141c0 .228 0 .513.056.742c.055.399.11.741.222 1.083c.111.343.223.685.39 1.027v.057c.166.342.388.684.61 1.027c.223.342.445.684.723 1.026c.278.286.612.628.945.913a8.16 8.16 0 0 0 1.056.913c1.334 1.197 1.668 1.597 3.39 2.509c.279.172.556.286.89.457c.056 0 .111.057.167.057c0 .114 0 .171.055.285c.056.456.167.913.278 1.369c.111.513.278.97.445 1.369c.167.342.278.684.445 1.027c.055.114.11.228.166.285c.223.456.445.855.667 1.255l.834 1.198c.278.342.612.741.945 1.083c.334.343.667.628 1.056.97c0 0 .056.057.111.057c.334.285.667.571 1 .799c.39.285.779.513 1.224.741a9.03 9.03 0 0 0 1.278.628c.333.171.722.285 1.112.399c.055.057.11.057.222.114c.222.057.5.114.723.171c-.167 3.08-.223 5.989.222 7.016c.5 1.141 2.946-2.339 5.392-6.332c-.334 3.936-.556 8.556 0 9.925c.61 1.426 3.946-3.023 6.836-7.928c39.408-9.355 75.37 18.595 79.15 58.066c-.723-6.161-8.115-9.583-11.506-8.727c-1.667 4.22-4.502 9.639-9.06 13.004c.39-3.764.223-7.643-.555-11.407c-1.223 5.247-3.613 10.153-6.893 14.373c-5.28.4-10.56-2.224-13.34-6.16c-.222-.171-.277-.513-.444-.741c-.167-.4-.334-.799-.445-1.198a4.835 4.835 0 0 1-.333-1.198c-.056-.399-.056-.798-.056-1.255v-.855c.056-.4.167-.799.278-1.198c.11-.399.222-.799.389-1.198c.222-.399.389-.798.667-1.198c.945-2.738.945-4.962-.778-6.274a6.283 6.283 0 0 0-1.056-.57c-.223-.058-.5-.172-.723-.229c-.167-.057-.278-.114-.444-.171c-.39-.114-.779-.228-1.168-.285a4.133 4.133 0 0 0-1.167-.171a8.869 8.869 0 0 0-1.223-.114c-.278 0-.556.057-.834.057c-.444 0-.833.057-1.222.171c-.39.057-.779.114-1.168.228c-.389.114-.778.229-1.167.4s-.722.342-1.111.513c-.334.171-.668.399-1.057.57c-12.95 8.67-5.224 28.976 3.613 34.851c-3.335.628-6.725 1.369-7.67 2.111l-.111.114c2.39 1.483 4.891 2.738 7.504 3.821a179.626 179.626 0 0 0 9.004 2.738v.057a52.428 52.428 0 0 0 14.007 1.027c24.623-1.768 44.799-20.99 48.468-46.316c.111.514.222.97.333 1.483c.167 1.027.389 2.111.501 3.194v.058c.111.513.166 1.026.222 1.483v.228c.056.513.111 1.027.111 1.483c.056.627.111 1.255.111 1.882v.913c0 .285.056.627.056.912c0 .343-.056.685-.056 1.027v.799c0 .399-.055.741-.055 1.141c0 .228 0 .456-.056.741c0 .399-.056.799-.056 1.255c-.056.171-.056.342-.056.513c-.055.457-.111.856-.166 1.312c0 .171 0 .342-.056.514c-.056.57-.167 1.083-.222 1.654v.114c-.111.513-.223 1.084-.334 1.597v.171l-.333 1.54c0 .057-.056.171-.056.228a15.517 15.517 0 0 1-.389 1.541v.171c-.167.57-.334 1.083-.445 1.597c-.055.057-.055.114-.055.114l-.501 1.711c-.222.57-.389 1.084-.611 1.654c-.222.57-.389 1.141-.611 1.654c-.223.571-.445 1.084-.667 1.654h-.056c-.223.514-.445 1.084-.723 1.597a2.832 2.832 0 0 1-.167.4c-.055.057-.055.114-.111.171c-3.613 7.472-8.948 14.031-15.618 19.165c-.445.285-.89.627-1.334.97c-.111.113-.278.171-.389.285c-.39.285-.779.57-1.223.855l.166.343h.056l2.335-.343h.055c1.445-.228 2.891-.513 4.336-.798a9.518 9.518 0 0 0 1.223-.285c.277-.058.5-.114.778-.172c.389-.057.778-.171 1.167-.228c.333-.114.667-.171 1-.285c5.559-1.369 10.95-3.251 16.119-5.476c-8.837 12.378-20.676 22.36-34.516 28.919c6.392-.456 12.784-1.54 18.953-3.365c22.4-6.788 41.243-22.246 52.526-43.065c-2.279 13.176-7.393 25.725-14.952 36.676a88.023 88.023 0 0 0 14.841-12.662c12.45-13.347 20.621-30.288 23.4-48.483a93.136 93.136 0 0 1 1.612 27.492c40.131-57.438 3.335-116.987-12.061-132.672c-.056-.114-.111-.172-.111-.286c-.056.058-.056.058-.056.114c0-.057 0-.057-.056-.114c0 .685-.056 1.37-.111 2.054a78.116 78.116 0 0 1-.556 3.821c-.278 1.255-.611 2.51-.945 3.765a47.898 47.898 0 0 1-1.334 3.65a49.601 49.601 0 0 1-1.667 3.48c-.612 1.084-1.279 2.224-2.001 3.251a43.7 43.7 0 0 1-2.279 3.08c-.834 1.027-1.723 1.94-2.612 2.852c-.556.514-1.057.97-1.612 1.426c-.445.4-.834.742-1.279 1.14c-1 .8-2.001 1.54-3.112 2.225c-1.056.685-2.168 1.37-3.28 1.94a95.02 95.02 0 0 1-3.501 1.597a38.598 38.598 0 0 1-3.613 1.198a43.872 43.872 0 0 1-3.724.855c-1.279.229-2.557.343-3.78.457c-.889.057-1.779.114-2.668.114c-1.278 0-2.557-.114-3.78-.229c-1.278-.114-2.556-.285-3.779-.57c-1.279-.228-2.501-.57-3.724-.97h-.056c1.223-.114 2.446-.228 3.669-.456a39.423 39.423 0 0 0 3.724-.856a38.452 38.452 0 0 0 3.612-1.198c1.223-.456 2.39-1.026 3.502-1.597c1.167-.57 2.223-1.197 3.335-1.882c1.056-.741 2.112-1.483 3.113-2.281a30.68 30.68 0 0 0 2.834-2.567c.945-.856 1.779-1.825 2.613-2.795a55.775 55.775 0 0 0 2.334-3.08c.111-.171.223-.4.334-.57a70.926 70.926 0 0 0 1.612-2.739a39.8 39.8 0 0 0 1.667-3.479a40.7 40.7 0 0 0 1.334-3.65c.389-1.198.667-2.453.945-3.708c.223-1.312.445-2.567.556-3.821c.111-1.312.222-2.624.222-3.88c0-.912-.055-1.824-.111-2.737c-.111-1.312-.278-2.567-.444-3.822a42.647 42.647 0 0 0-.834-3.821c-.389-1.198-.778-2.453-1.223-3.65c-.445-1.199-1-2.396-1.556-3.537c-.612-1.14-1.223-2.282-1.89-3.365a63.283 63.283 0 0 0-2.223-3.138c-.834-.97-1.668-1.939-2.557-2.909c-.445-.456-.945-.97-1.445-1.425a102.618 102.618 0 0 0-7.726-5.59a9.92 9.92 0 0 0-1.112-.57c-1.834-1.199-3.557-1.826-5.28-2.396Z"
                        />
                      </g>
                    </svg>
                  </a>

                  <a target="_blank" href="https://firebase.google.com">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 256 351"
                    >
                      <defs>
                        <filter
                          id="logosFirebase0"
                          width="200%"
                          height="200%"
                          x="-50%"
                          y="-50%"
                          filterUnits="objectBoundingBox"
                        >
                          <feGaussianBlur
                            in="SourceAlpha"
                            result="shadowBlurInner1"
                            stdDeviation="17.5"
                          />
                          <feOffset
                            in="shadowBlurInner1"
                            result="shadowOffsetInner1"
                          />
                          <feComposite
                            in="shadowOffsetInner1"
                            in2="SourceAlpha"
                            k2="-1"
                            k3="1"
                            operator="arithmetic"
                            result="shadowInnerInner1"
                          />
                          <feColorMatrix
                            in="shadowInnerInner1"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                          />
                        </filter>
                        <filter
                          id="logosFirebase1"
                          width="200%"
                          height="200%"
                          x="-50%"
                          y="-50%"
                          filterUnits="objectBoundingBox"
                        >
                          <feGaussianBlur
                            in="SourceAlpha"
                            result="shadowBlurInner1"
                            stdDeviation="3.5"
                          />
                          <feOffset
                            dx="1"
                            dy="-9"
                            in="shadowBlurInner1"
                            result="shadowOffsetInner1"
                          />
                          <feComposite
                            in="shadowOffsetInner1"
                            in2="SourceAlpha"
                            k2="-1"
                            k3="1"
                            operator="arithmetic"
                            result="shadowInnerInner1"
                          />
                          <feColorMatrix
                            in="shadowInnerInner1"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
                          />
                        </filter>
                        <path
                          id="logosFirebase2"
                          d="m1.253 280.732l1.605-3.131l99.353-188.518l-44.15-83.475C54.392-1.283 45.074.474 43.87 8.188z"
                        />
                        <path
                          id="logosFirebase3"
                          d="m134.417 148.974l32.039-32.812l-32.039-61.007c-3.042-5.791-10.433-6.398-13.443-.59l-17.705 34.109l-.53 1.744z"
                        />
                      </defs>
                      <path
                        fill="#FFC24A"
                        d="m0 282.998l2.123-2.972L102.527 89.512l.212-2.017L58.48 4.358C54.77-2.606 44.33-.845 43.114 6.951z"
                      />
                      <use
                        fill="#FFA712"
                        fill-rule="evenodd"
                        href="#logosFirebase2"
                      />
                      <use
                        filter="url(#logosFirebase0)"
                        href="#logosFirebase2"
                      />
                      <path
                        fill="#F4BD62"
                        d="m135.005 150.38l32.955-33.75l-32.965-62.93c-3.129-5.957-11.866-5.975-14.962 0L102.42 87.287v2.86z"
                      />
                      <use
                        fill="#FFA50E"
                        fill-rule="evenodd"
                        href="#logosFirebase3"
                      />
                      <use
                        filter="url(#logosFirebase1)"
                        href="#logosFirebase3"
                      />
                      <path
                        fill="#F6820C"
                        d="m0 282.998l.962-.968l3.496-1.42l128.477-128l1.628-4.431l-32.05-61.074z"
                      />
                      <path
                        fill="#FDE068"
                        d="m139.121 347.551l116.275-64.847l-33.204-204.495c-1.039-6.398-8.888-8.927-13.468-4.34L0 282.998l115.608 64.548a24.126 24.126 0 0 0 23.513.005"
                      />
                      <path
                        fill="#FCCA3F"
                        d="M254.354 282.16L221.402 79.218c-1.03-6.35-7.558-8.977-12.103-4.424L1.29 282.6l114.339 63.908a23.943 23.943 0 0 0 23.334.006z"
                      />
                      <path
                        fill="#EEAB37"
                        d="M139.12 345.64a24.126 24.126 0 0 1-23.512-.005L.931 282.015l-.93.983l115.607 64.548a24.126 24.126 0 0 0 23.513.005l116.275-64.847l-.285-1.752z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="hidden md:block">
              <div
                className="absolute -inset-x-16 top-0 h-px"
                style={{
                  backgroundImage: `linear-gradient(to right, transparent, rgba(255, 255, 255, 0.05) 24px, rgba(255, 255, 255, 0.05) calc(100% - 24px), transparent)`,
                }}
              ></div>
              <div
                className="absolute -inset-x-16 bottom-0 h-px"
                style={{
                  backgroundImage: `linear-gradient(to right, transparent, rgba(255, 255, 255, 0.05) 24px, rgba(255, 255, 255, 0.05) calc(100% - 24px), transparent)`,
                }}
              ></div>
              <div
                className="absolute -inset-y-16 left-0 w-px"
                style={{
                  backgroundImage: `linear-gradient(transparent, rgba(255, 255, 255, 0.05) 24px, rgba(255, 255, 255, 0.05) calc(100% - 24px), transparent)`,
                }}
              ></div>
              <div
                className="absolute -inset-y-16 -left-[15px] w-px"
                style={{
                  backgroundImage: `linear-gradient(transparent, rgba(255, 255, 255, 0.05) 24px, rgba(255, 255, 255, 0.05) calc(100% - 24px), transparent)`,
                }}
              ></div>
              <div
                className="absolute -inset-y-16 right-0 w-px"
                style={{
                  backgroundImage: `linear-gradient(transparent, rgba(255, 255, 255, 0.05) 24px, rgba(255, 255, 255, 0.05) calc(100% - 24px), transparent)`,
                }}
              ></div>
              <div
                className="absolute -inset-y-16 -right-[15px] w-px"
                style={{
                  backgroundImage: `linear-gradient(transparent, rgba(255, 255, 255, 0.05) 24px, rgba(255, 255, 255, 0.05) calc(100% - 24px), transparent)`,
                }}
              ></div>
            </div>

            <div className="h-full max-w-md p-3 md:bg-white/[0.03]">
              <div className="relative h-56 overflow-hidden rounded-xl">
                <Image
                  fill
                  src={motionridge2}
                  placeholder="blur"
                  className="object-fit aspect-video h-full w-full shadow-xl"
                  alt="Screenshot of the landing page of motionridge.com"
                />
              </div>

              <div className="mt-5 p-3">
                <div className="flex w-full items-center justify-between gap-5">
                  <h3 className="text-xl font-semibold text-white">
                    Motionridge.com
                  </h3>
                  <a
                    target="_blank"
                    href="https://nextjs.org/"
                    className="flex items-center justify-start gap-2 text-xs text-gray-200 hover:underline"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 rotate-45"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M8.037 9.858a.5.5 0 0 0-.68.243l-4.193 9.402c-.667 1.496.815 3.047 2.202 2.306l5.904-3.152c.46-.245 1-.245 1.459 0l5.904 3.152c1.387.741 2.869-.81 2.202-2.306l-1.572-3.524a2 2 0 0 0-.932-.975z"
                      />
                      <path
                        fill="currentColor"
                        d="M8.61 8.467a.5.5 0 0 1-.234-.65l2.151-4.823c.59-1.324 2.355-1.324 2.945 0l3.968 8.898a.5.5 0 0 1-.68.65z"
                        opacity=".5"
                      />
                    </svg>

                    <span className="mt-1">Visit site</span>
                  </a>
                </div>

                <p className="mt-5 text-sm/6 text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis temporibus blanditiis ducimus error quidem numquam,
                  rem odio unde esse cum.
                </p>

                <p className="mt-5 text-sm/6 text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis temporibus blanditiis ducimus error quidem numquam,
                  rem odio unde esse cum.
                </p>

                <div className="mt-5 flex w-full flex-wrap items-center justify-end gap-3">
                  <a
                    target="_blank"
                    href="https://nextjs.org/"
                    className="rounded-full bg-white/70 p-0.5"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 128 128"
                    >
                      <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z" />
                    </svg>
                  </a>

                  <a target="_blank" href="https://tanstack.com/query/v3/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 256 230"
                    >
                      <path
                        fill="#00435B"
                        d="m157.98 142.487l-4.91 8.527a8.288 8.288 0 0 1-7.182 4.151H108.27a8.288 8.288 0 0 1-7.182-4.151l-4.911-8.527h61.802Zm13.747-23.87l-8.658 15.034h-71.98l-8.658-15.034h89.296Zm-8.34-23.342l8.354 14.506H82.417l8.354-14.506h72.616Zm-17.5-22.066a8.288 8.288 0 0 1 7.183 4.151l5.228 9.079H95.86l5.229-9.079a8.288 8.288 0 0 1 7.182-4.151h37.617Z"
                      />
                      <path
                        fill="#002B3B"
                        d="M53.523 69.252c-4.167-20.206-5.062-35.704-2.368-46.957c1.602-6.693 4.53-12.153 8.984-16.093c4.702-4.159 10.646-6.2 17.326-6.2c11.018 0 22.602 5.025 34.98 14.57c5.05 3.894 10.29 8.587 15.732 14.082c.434-.557.923-1.083 1.469-1.57c15.386-13.71 28.34-22.23 39.42-25.514c6.588-1.954 12.773-2.14 18.405-.244c5.946 2 10.683 6.137 14.026 11.93c5.516 9.561 6.97 22.124 4.914 37.637c-.838 6.323-2.271 13.21-4.296 20.673c.764.092 1.53.262 2.288.513c19.521 6.47 33.345 13.426 41.714 21.377c4.98 4.73 8.231 9.996 9.407 15.826c1.24 6.153.03 12.324-3.308 18.113c-5.506 9.548-15.63 17.077-30.052 23.041c-5.79 2.395-12.343 4.564-19.664 6.515c.334.754.594 1.555.767 2.395c4.167 20.206 5.061 35.704 2.368 46.957c-1.602 6.693-4.531 12.153-8.985 16.093c-4.701 4.159-10.646 6.2-17.325 6.2c-11.019 0-22.602-5.025-34.98-14.57c-5.104-3.936-10.402-8.687-15.907-14.258a11.737 11.737 0 0 1-2.084 2.442c-15.386 13.712-28.34 22.23-39.42 25.515c-6.588 1.954-12.773 2.14-18.405.244c-5.946-2-10.683-6.137-14.026-11.93c-5.516-9.561-6.97-22.124-4.914-37.637c.869-6.551 2.376-13.709 4.518-21.485a11.732 11.732 0 0 1-2.51-.537c-19.521-6.47-33.345-13.426-41.714-21.377c-4.98-4.73-8.231-9.996-9.407-15.826c-1.24-6.153-.03-12.325 3.308-18.114c5.506-9.547 15.63-17.077 30.052-23.04c5.963-2.467 12.734-4.693 20.32-6.689a11.81 11.81 0 0 1-.633-2.082Z"
                      />
                      <path
                        fill="#FF4154"
                        d="M189.647 161.333a3.684 3.684 0 0 1 4.235 2.81l.023.112l.207 1.075c6.71 35.276 1.983 52.915-14.18 52.915c-15.813 0-35.944-15.051-60.392-45.153a3.684 3.684 0 0 1 2.777-6.005h.114l1.288.009c10.288.056 20.289-.303 30.004-1.076c11.467-.913 23.442-2.475 35.924-4.687ZM78.646 134.667l.062.105l.646 1.127c5.177 9 10.57 17.542 16.18 25.627c6.608 9.52 14.038 19.158 22.29 28.914a3.684 3.684 0 0 1-.309 5.082l-.093.083l-.83.715c-27.307 23.397-45.055 28.068-53.244 14.012c-8.017-13.757-5.11-38.773 8.719-75.047a3.683 3.683 0 0 1 6.579-.618Zm124.857-52.054l.112.037l1.028.354c33.705 11.725 46.51 24.61 38.416 38.655c-7.916 13.736-30.93 23.738-69.041 30.004a3.683 3.683 0 0 1-3.773-5.501c5.458-9.286 10.375-18.524 14.749-27.717c4.96-10.425 9.615-21.616 13.965-33.57a3.684 3.684 0 0 1 4.432-2.295l.112.033ZM84.446 76.71a3.683 3.683 0 0 1 1.31 5.042c-5.46 9.285-10.376 18.524-14.75 27.717c-4.96 10.425-9.615 21.615-13.965 33.57a3.684 3.684 0 0 1-4.544 2.262l-.112-.037l-1.028-.355c-33.705-11.724-46.51-24.61-38.416-38.654c7.916-13.737 30.93-23.738 69.041-30.004c.85-.14 1.722.022 2.464.459Zm108.206-57.748c8.017 13.758 5.11 38.774-8.719 75.048a3.683 3.683 0 0 1-6.579.618l-.062-.105l-.646-1.127c-5.177-9-10.57-17.542-16.18-25.627c-6.608-9.52-14.038-19.158-22.29-28.914a3.684 3.684 0 0 1 .309-5.082l.093-.083l.83-.715c27.307-23.397 45.055-28.068 53.244-14.013ZM77.45 10.59c15.814 0 35.945 15.05 60.392 45.152a3.684 3.684 0 0 1-2.777 6.005h-.114l-1.288-.008c-10.287-.056-20.289.303-30.003 1.076c-11.468.913-23.443 2.475-35.925 4.687a3.684 3.684 0 0 1-4.234-2.81l-.024-.113l-.207-1.074C56.56 28.228 61.286 10.59 77.45 10.59Z"
                      />
                      <path
                        fill="#FFD94C"
                        d="M111.295 73.67h31.576a12.89 12.89 0 0 1 11.181 6.475l15.855 27.626a12.892 12.892 0 0 1 0 12.834l-15.855 27.626a12.892 12.892 0 0 1-11.181 6.475h-31.576c-4.618 0-8.883-2.47-11.182-6.475L84.26 120.605a12.892 12.892 0 0 1 0-12.834l15.854-27.626a12.892 12.892 0 0 1 11.182-6.475Zm26.763 8.338c4.62 0 8.888 2.473 11.185 6.481l11.056 19.288a12.892 12.892 0 0 1 0 12.822l-11.056 19.288a12.892 12.892 0 0 1-11.185 6.48h-21.95c-4.62 0-8.888-2.472-11.185-6.48l-11.056-19.288a12.892 12.892 0 0 1 0-12.822l11.056-19.288a12.892 12.892 0 0 1 11.184-6.48h21.951Zm-5.187 9.12h-11.576a12.892 12.892 0 0 0-11.179 6.47l-5.842 10.167a12.892 12.892 0 0 0 0 12.846l5.842 10.168a12.892 12.892 0 0 0 11.179 6.47h11.576c4.616 0 8.88-2.468 11.179-6.47l5.842-10.168a12.892 12.892 0 0 0 0-12.846l-5.842-10.168a12.892 12.892 0 0 0-11.179-6.47Zm-4.994 8.729c4.612 0 8.873 2.464 11.173 6.46l.829 1.44a12.892 12.892 0 0 1 0 12.862l-.829 1.44a12.892 12.892 0 0 1-11.173 6.46h-1.588a12.892 12.892 0 0 1-11.173-6.46l-.829-1.44a12.892 12.892 0 0 1 0-12.862l.829-1.44a12.892 12.892 0 0 1 11.173-6.46h1.588Zm-.792 8.599a5.738 5.738 0 0 0-4.97 2.866a5.729 5.729 0 0 0 0 5.732a5.738 5.738 0 0 0 9.937 0a5.729 5.729 0 0 0 0-5.732a5.736 5.736 0 0 0-4.967-2.866Zm-46.509 5.732h10.32"
                      />
                    </svg>
                  </a>

                  <a target="_blank" href="https://tailwindcss.com/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="#44a8b3"
                        d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1Zm-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1Z"
                      />
                    </svg>
                  </a>

                  <a
                    target="_blank"
                    href="https://www.framer.com/motion/"
                    className="flex aspect-square h-6 w-6 items-center justify-center rounded-full bg-white/70 p-0.5"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mt-1 h-6 w-6"
                      viewBox="0 0 128 128"
                    >
                      <path d="M22.684 0h84.253v42.667H64.81L22.684 0Zm0 42.667H64.81l42.127 42.666H64.81V128L22.684 85.333V42.667Z" />
                    </svg>
                  </a>

                  <a target="_blank" href="https://www.mongodb.com/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 256 256"
                    >
                      <g fill="none">
                        <rect width="256" height="256" fill="#023430" rx="60" />
                        <path
                          fill="#10AA50"
                          d="M171.173 107.591c-10.537-46.481-32.497-58.855-38.099-67.602A99.398 99.398 0 0 1 126.949 28c-.296 4.13-.84 6.73-4.35 9.862c-7.047 6.283-36.977 30.673-39.496 83.486c-2.347 49.242 36.2 79.605 41.292 82.744c3.916 1.927 8.685.041 11.012-1.728c18.581-12.752 43.969-46.75 35.786-94.773"
                        />
                        <path
                          fill="#B8C4C2"
                          d="M128.545 177.871c-.97 12.188-1.665 19.27-4.129 26.235c0 0 1.617 11.603 2.753 23.894h4.019a223.446 223.446 0 0 1 4.384-25.732c-5.203-2.56-6.827-13.702-7.027-24.397Z"
                        />
                        <path
                          fill="#12924F"
                          d="M135.565 202.275c-5.258-2.429-6.779-13.806-7.013-24.404a499.824 499.824 0 0 0 1.136-52.545c-.276-9.194.13-85.158-2.265-96.28a92.425 92.425 0 0 0 5.651 10.936c5.602 8.754 27.569 21.128 38.099 67.609c8.203 47.941-17.047 81.849-35.608 94.684Z"
                        />
                      </g>
                    </svg>
                  </a>

                  <a target="_blank" href="https://nestjs.com/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 256 256"
                    >
                      <g fill="none">
                        <rect width="256" height="256" fill="#242938" rx="60" />
                        <path
                          fill="#E0234E"
                          d="M146.728 18c-1.556 0-3.001.342-4.335.799c2.835 1.939 4.391 4.506 5.169 7.415c.056.399.167.684.222 1.083c.056.343.112.685.112 1.027c.222 5.02-1.279 5.647-2.335 8.613c-1.612 3.822-1.167 7.928.778 11.237c.167.399.389.855.667 1.255c-2.112-14.431 9.616-16.599 11.784-21.105c.166-3.936-3.002-6.56-5.503-8.385c-2.39-1.483-4.558-1.939-6.559-1.939Zm17.676 3.251c-.223 1.312-.056.97-.111 1.654c-.056.457-.056 1.027-.112 1.483a12.56 12.56 0 0 1-.389 1.37c-.111.456-.278.912-.444 1.368c-.223.457-.389.856-.612 1.312c-.166.228-.278.456-.444.685l-.334.513c-.278.4-.556.799-.834 1.14c-.333.343-.611.742-1 1.027v.058c-.334.285-.667.627-1.056.912c-1.167.913-2.501 1.597-3.724 2.453c-.389.285-.778.513-1.112.855c-.389.286-.722.57-1.056.913c-.389.342-.667.684-1 1.084c-.278.342-.612.741-.834 1.14c-.278.4-.556.8-.778 1.198c-.223.457-.389.856-.612 1.312c-.166.457-.333.856-.444 1.312c-.167.514-.278.97-.389 1.426c-.056.228-.056.514-.112.742c-.055.228-.055.456-.111.684c0 .456-.055.97-.055 1.426c0 .342 0 .685.055 1.027c0 .456.056.912.167 1.426c.056.456.167.912.278 1.369c.167.456.278.912.445 1.369c.111.285.278.57.389.798l-12.784-5.076a134.536 134.536 0 0 0-6.448-1.711l-3.502-.856a100.696 100.696 0 0 0-10.116-1.54c-.111 0-.166-.057-.278-.057a96.867 96.867 0 0 0-9.949-.514c-2.446 0-4.891.114-7.281.286c-3.39.228-6.781.684-10.172 1.255c-.834.114-1.667.285-2.501.456c-1.723.342-3.39.741-5.003 1.14l-2.5.685c-.835.342-1.613.742-2.39 1.084l-1.835.855c-.111.057-.222.057-.278.114c-.556.286-1.056.514-1.556.799a2.667 2.667 0 0 0-.39.171c-.61.285-1.222.627-1.722.913c-.39.17-.779.399-1.112.57c-.167.114-.39.228-.5.285c-.5.286-1 .57-1.446.856c-.5.285-.944.57-1.334.855c-.389.286-.778.514-1.111.799c-.056.057-.111.057-.167.114c-.333.228-.722.513-1.056.799l-.111.114l-.834.684c-.11.057-.222.171-.333.228c-.278.228-.556.514-.834.742c-.056.114-.167.17-.222.228c-.334.342-.667.627-1 .97c-.057 0-.057.057-.112.114c-.334.285-.667.627-1 .97c-.056.056-.056.113-.112.113c-.278.285-.555.57-.833.913c-.111.114-.278.228-.39.342c-.277.342-.61.685-.944 1.027c-.056.114-.167.171-.223.285c-.444.456-.834.913-1.278 1.369l-.167.171c-.89.97-1.834 1.94-2.835 2.795c-1 .913-2.056 1.768-3.112 2.51a41.904 41.904 0 0 1-3.335 2.167a33.512 33.512 0 0 1-3.502 1.711a39.4 39.4 0 0 1-3.613 1.37c-2.334.513-4.724 1.482-6.78 1.653c-.446 0-.946.114-1.39.172c-.5.114-.945.228-1.39.342c-.445.17-.89.342-1.334.513c-.445.171-.89.4-1.334.628c-.39.285-.834.513-1.223.798a9.13 9.13 0 0 0-1.111.97c-.39.285-.779.684-1.112 1.026c-.334.4-.667.742-.945 1.141c-.278.457-.611.856-.834 1.312c-.278.4-.556.856-.778 1.312c-.222.513-.445.97-.611 1.483c-.167.456-.334.97-.5 1.483c-.112.456-.223.913-.278 1.369c0 .057-.056.114-.056.171c-.111.514-.111 1.198-.167 1.54c-.056.4-.111.742-.111 1.141c0 .228 0 .513.056.742c.055.399.11.741.222 1.083c.111.343.223.685.39 1.027v.057c.166.342.388.684.61 1.027c.223.342.445.684.723 1.026c.278.286.612.628.945.913a8.16 8.16 0 0 0 1.056.913c1.334 1.197 1.668 1.597 3.39 2.509c.279.172.556.286.89.457c.056 0 .111.057.167.057c0 .114 0 .171.055.285c.056.456.167.913.278 1.369c.111.513.278.97.445 1.369c.167.342.278.684.445 1.027c.055.114.11.228.166.285c.223.456.445.855.667 1.255l.834 1.198c.278.342.612.741.945 1.083c.334.343.667.628 1.056.97c0 0 .056.057.111.057c.334.285.667.571 1 .799c.39.285.779.513 1.224.741a9.03 9.03 0 0 0 1.278.628c.333.171.722.285 1.112.399c.055.057.11.057.222.114c.222.057.5.114.723.171c-.167 3.08-.223 5.989.222 7.016c.5 1.141 2.946-2.339 5.392-6.332c-.334 3.936-.556 8.556 0 9.925c.61 1.426 3.946-3.023 6.836-7.928c39.408-9.355 75.37 18.595 79.15 58.066c-.723-6.161-8.115-9.583-11.506-8.727c-1.667 4.22-4.502 9.639-9.06 13.004c.39-3.764.223-7.643-.555-11.407c-1.223 5.247-3.613 10.153-6.893 14.373c-5.28.4-10.56-2.224-13.34-6.16c-.222-.171-.277-.513-.444-.741c-.167-.4-.334-.799-.445-1.198a4.835 4.835 0 0 1-.333-1.198c-.056-.399-.056-.798-.056-1.255v-.855c.056-.4.167-.799.278-1.198c.11-.399.222-.799.389-1.198c.222-.399.389-.798.667-1.198c.945-2.738.945-4.962-.778-6.274a6.283 6.283 0 0 0-1.056-.57c-.223-.058-.5-.172-.723-.229c-.167-.057-.278-.114-.444-.171c-.39-.114-.779-.228-1.168-.285a4.133 4.133 0 0 0-1.167-.171a8.869 8.869 0 0 0-1.223-.114c-.278 0-.556.057-.834.057c-.444 0-.833.057-1.222.171c-.39.057-.779.114-1.168.228c-.389.114-.778.229-1.167.4s-.722.342-1.111.513c-.334.171-.668.399-1.057.57c-12.95 8.67-5.224 28.976 3.613 34.851c-3.335.628-6.725 1.369-7.67 2.111l-.111.114c2.39 1.483 4.891 2.738 7.504 3.821a179.626 179.626 0 0 0 9.004 2.738v.057a52.428 52.428 0 0 0 14.007 1.027c24.623-1.768 44.799-20.99 48.468-46.316c.111.514.222.97.333 1.483c.167 1.027.389 2.111.501 3.194v.058c.111.513.166 1.026.222 1.483v.228c.056.513.111 1.027.111 1.483c.056.627.111 1.255.111 1.882v.913c0 .285.056.627.056.912c0 .343-.056.685-.056 1.027v.799c0 .399-.055.741-.055 1.141c0 .228 0 .456-.056.741c0 .399-.056.799-.056 1.255c-.056.171-.056.342-.056.513c-.055.457-.111.856-.166 1.312c0 .171 0 .342-.056.514c-.056.57-.167 1.083-.222 1.654v.114c-.111.513-.223 1.084-.334 1.597v.171l-.333 1.54c0 .057-.056.171-.056.228a15.517 15.517 0 0 1-.389 1.541v.171c-.167.57-.334 1.083-.445 1.597c-.055.057-.055.114-.055.114l-.501 1.711c-.222.57-.389 1.084-.611 1.654c-.222.57-.389 1.141-.611 1.654c-.223.571-.445 1.084-.667 1.654h-.056c-.223.514-.445 1.084-.723 1.597a2.832 2.832 0 0 1-.167.4c-.055.057-.055.114-.111.171c-3.613 7.472-8.948 14.031-15.618 19.165c-.445.285-.89.627-1.334.97c-.111.113-.278.171-.389.285c-.39.285-.779.57-1.223.855l.166.343h.056l2.335-.343h.055c1.445-.228 2.891-.513 4.336-.798a9.518 9.518 0 0 0 1.223-.285c.277-.058.5-.114.778-.172c.389-.057.778-.171 1.167-.228c.333-.114.667-.171 1-.285c5.559-1.369 10.95-3.251 16.119-5.476c-8.837 12.378-20.676 22.36-34.516 28.919c6.392-.456 12.784-1.54 18.953-3.365c22.4-6.788 41.243-22.246 52.526-43.065c-2.279 13.176-7.393 25.725-14.952 36.676a88.023 88.023 0 0 0 14.841-12.662c12.45-13.347 20.621-30.288 23.4-48.483a93.136 93.136 0 0 1 1.612 27.492c40.131-57.438 3.335-116.987-12.061-132.672c-.056-.114-.111-.172-.111-.286c-.056.058-.056.058-.056.114c0-.057 0-.057-.056-.114c0 .685-.056 1.37-.111 2.054a78.116 78.116 0 0 1-.556 3.821c-.278 1.255-.611 2.51-.945 3.765a47.898 47.898 0 0 1-1.334 3.65a49.601 49.601 0 0 1-1.667 3.48c-.612 1.084-1.279 2.224-2.001 3.251a43.7 43.7 0 0 1-2.279 3.08c-.834 1.027-1.723 1.94-2.612 2.852c-.556.514-1.057.97-1.612 1.426c-.445.4-.834.742-1.279 1.14c-1 .8-2.001 1.54-3.112 2.225c-1.056.685-2.168 1.37-3.28 1.94a95.02 95.02 0 0 1-3.501 1.597a38.598 38.598 0 0 1-3.613 1.198a43.872 43.872 0 0 1-3.724.855c-1.279.229-2.557.343-3.78.457c-.889.057-1.779.114-2.668.114c-1.278 0-2.557-.114-3.78-.229c-1.278-.114-2.556-.285-3.779-.57c-1.279-.228-2.501-.57-3.724-.97h-.056c1.223-.114 2.446-.228 3.669-.456a39.423 39.423 0 0 0 3.724-.856a38.452 38.452 0 0 0 3.612-1.198c1.223-.456 2.39-1.026 3.502-1.597c1.167-.57 2.223-1.197 3.335-1.882c1.056-.741 2.112-1.483 3.113-2.281a30.68 30.68 0 0 0 2.834-2.567c.945-.856 1.779-1.825 2.613-2.795a55.775 55.775 0 0 0 2.334-3.08c.111-.171.223-.4.334-.57a70.926 70.926 0 0 0 1.612-2.739a39.8 39.8 0 0 0 1.667-3.479a40.7 40.7 0 0 0 1.334-3.65c.389-1.198.667-2.453.945-3.708c.223-1.312.445-2.567.556-3.821c.111-1.312.222-2.624.222-3.88c0-.912-.055-1.824-.111-2.737c-.111-1.312-.278-2.567-.444-3.822a42.647 42.647 0 0 0-.834-3.821c-.389-1.198-.778-2.453-1.223-3.65c-.445-1.199-1-2.396-1.556-3.537c-.612-1.14-1.223-2.282-1.89-3.365a63.283 63.283 0 0 0-2.223-3.138c-.834-.97-1.668-1.939-2.557-2.909c-.445-.456-.945-.97-1.445-1.425a102.618 102.618 0 0 0-7.726-5.59a9.92 9.92 0 0 0-1.112-.57c-1.834-1.199-3.557-1.826-5.28-2.396Z"
                        />
                      </g>
                    </svg>
                  </a>

                  <a target="_blank" href="https://firebase.google.com">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 256 351"
                    >
                      <defs>
                        <filter
                          id="logosFirebase0"
                          width="200%"
                          height="200%"
                          x="-50%"
                          y="-50%"
                          filterUnits="objectBoundingBox"
                        >
                          <feGaussianBlur
                            in="SourceAlpha"
                            result="shadowBlurInner1"
                            stdDeviation="17.5"
                          />
                          <feOffset
                            in="shadowBlurInner1"
                            result="shadowOffsetInner1"
                          />
                          <feComposite
                            in="shadowOffsetInner1"
                            in2="SourceAlpha"
                            k2="-1"
                            k3="1"
                            operator="arithmetic"
                            result="shadowInnerInner1"
                          />
                          <feColorMatrix
                            in="shadowInnerInner1"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                          />
                        </filter>
                        <filter
                          id="logosFirebase1"
                          width="200%"
                          height="200%"
                          x="-50%"
                          y="-50%"
                          filterUnits="objectBoundingBox"
                        >
                          <feGaussianBlur
                            in="SourceAlpha"
                            result="shadowBlurInner1"
                            stdDeviation="3.5"
                          />
                          <feOffset
                            dx="1"
                            dy="-9"
                            in="shadowBlurInner1"
                            result="shadowOffsetInner1"
                          />
                          <feComposite
                            in="shadowOffsetInner1"
                            in2="SourceAlpha"
                            k2="-1"
                            k3="1"
                            operator="arithmetic"
                            result="shadowInnerInner1"
                          />
                          <feColorMatrix
                            in="shadowInnerInner1"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
                          />
                        </filter>
                        <path
                          id="logosFirebase2"
                          d="m1.253 280.732l1.605-3.131l99.353-188.518l-44.15-83.475C54.392-1.283 45.074.474 43.87 8.188z"
                        />
                        <path
                          id="logosFirebase3"
                          d="m134.417 148.974l32.039-32.812l-32.039-61.007c-3.042-5.791-10.433-6.398-13.443-.59l-17.705 34.109l-.53 1.744z"
                        />
                      </defs>
                      <path
                        fill="#FFC24A"
                        d="m0 282.998l2.123-2.972L102.527 89.512l.212-2.017L58.48 4.358C54.77-2.606 44.33-.845 43.114 6.951z"
                      />
                      <use
                        fill="#FFA712"
                        fill-rule="evenodd"
                        href="#logosFirebase2"
                      />
                      <use
                        filter="url(#logosFirebase0)"
                        href="#logosFirebase2"
                      />
                      <path
                        fill="#F4BD62"
                        d="m135.005 150.38l32.955-33.75l-32.965-62.93c-3.129-5.957-11.866-5.975-14.962 0L102.42 87.287v2.86z"
                      />
                      <use
                        fill="#FFA50E"
                        fill-rule="evenodd"
                        href="#logosFirebase3"
                      />
                      <use
                        filter="url(#logosFirebase1)"
                        href="#logosFirebase3"
                      />
                      <path
                        fill="#F6820C"
                        d="m0 282.998l.962-.968l3.496-1.42l128.477-128l1.628-4.431l-32.05-61.074z"
                      />
                      <path
                        fill="#FDE068"
                        d="m139.121 347.551l116.275-64.847l-33.204-204.495c-1.039-6.398-8.888-8.927-13.468-4.34L0 282.998l115.608 64.548a24.126 24.126 0 0 0 23.513.005"
                      />
                      <path
                        fill="#FCCA3F"
                        d="M254.354 282.16L221.402 79.218c-1.03-6.35-7.558-8.977-12.103-4.424L1.29 282.6l114.339 63.908a23.943 23.943 0 0 0 23.334.006z"
                      />
                      <path
                        fill="#EEAB37"
                        d="M139.12 345.64a24.126 24.126 0 0 1-23.512-.005L.931 282.015l-.93.983l115.607 64.548a24.126 24.126 0 0 0 23.513.005l116.275-64.847l-.285-1.752z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="hidden md:block">
              <div
                className="absolute -inset-x-16 top-0 h-px"
                style={{
                  backgroundImage: `linear-gradient(to right, transparent, rgba(255, 255, 255, 0.05) 24px, rgba(255, 255, 255, 0.05) calc(100% - 24px), transparent)`,
                }}
              ></div>
              <div
                className="absolute -inset-x-16 bottom-0 h-px"
                style={{
                  backgroundImage: `linear-gradient(to right, transparent, rgba(255, 255, 255, 0.05) 24px, rgba(255, 255, 255, 0.05) calc(100% - 24px), transparent)`,
                }}
              ></div>
              <div
                className="absolute -inset-y-16 left-0 w-px"
                style={{
                  backgroundImage: `linear-gradient(transparent, rgba(255, 255, 255, 0.05) 24px, rgba(255, 255, 255, 0.05) calc(100% - 24px), transparent)`,
                }}
              ></div>
              <div
                className="absolute -inset-y-16 -left-[15px] w-px"
                style={{
                  backgroundImage: `linear-gradient(transparent, rgba(255, 255, 255, 0.05) 24px, rgba(255, 255, 255, 0.05) calc(100% - 24px), transparent)`,
                }}
              ></div>
              <div
                className="absolute -inset-y-16 right-0 w-px"
                style={{
                  backgroundImage: `linear-gradient(transparent, rgba(255, 255, 255, 0.05) 24px, rgba(255, 255, 255, 0.05) calc(100% - 24px), transparent)`,
                }}
              ></div>
              <div
                className="absolute -inset-y-16 -right-[15px] w-px md:hidden"
                style={{
                  backgroundImage: `linear-gradient(transparent, rgba(255, 255, 255, 0.05) 24px, rgba(255, 255, 255, 0.05) calc(100% - 24px), transparent)`,
                }}
              ></div>
            </div>

            <div className="h-full max-w-md p-3 md:bg-white/[0.03]">
              <div className="relative h-56 overflow-hidden rounded-xl">
                <Image
                  fill
                  src={layerplots2}
                  placeholder="blur"
                  className="object-fit aspect-video h-full w-full shadow-xl"
                  alt="Screenshot of the landing page of motionridge.com"
                />
              </div>

              <div className="mt-5 p-3">
                <div className="flex w-full items-center justify-between gap-5">
                  <h3 className="text-xl font-semibold text-white">
                    Motionridge.com
                  </h3>
                  <a
                    target="_blank"
                    href="https://nextjs.org/"
                    className="flex items-center justify-start gap-2 text-xs text-gray-200 hover:underline"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 rotate-45"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M8.037 9.858a.5.5 0 0 0-.68.243l-4.193 9.402c-.667 1.496.815 3.047 2.202 2.306l5.904-3.152c.46-.245 1-.245 1.459 0l5.904 3.152c1.387.741 2.869-.81 2.202-2.306l-1.572-3.524a2 2 0 0 0-.932-.975z"
                      />
                      <path
                        fill="currentColor"
                        d="M8.61 8.467a.5.5 0 0 1-.234-.65l2.151-4.823c.59-1.324 2.355-1.324 2.945 0l3.968 8.898a.5.5 0 0 1-.68.65z"
                        opacity=".5"
                      />
                    </svg>

                    <span className="mt-1">Visit site</span>
                  </a>
                </div>

                <p className="mt-5 text-sm/6 text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis temporibus blanditiis ducimus error quidem numquam,
                  rem odio unde esse cum.
                </p>

                <p className="mt-5 text-sm/6 text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis temporibus blanditiis ducimus error quidem numquam,
                  rem odio unde esse cum.
                </p>

                <div className="mt-5 flex w-full flex-wrap items-center justify-end gap-3">
                  <a
                    target="_blank"
                    href="https://nextjs.org/"
                    className="rounded-full bg-white/70 p-0.5"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 128 128"
                    >
                      <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z" />
                    </svg>
                  </a>

                  <a target="_blank" href="https://tanstack.com/query/v3/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 256 230"
                    >
                      <path
                        fill="#00435B"
                        d="m157.98 142.487l-4.91 8.527a8.288 8.288 0 0 1-7.182 4.151H108.27a8.288 8.288 0 0 1-7.182-4.151l-4.911-8.527h61.802Zm13.747-23.87l-8.658 15.034h-71.98l-8.658-15.034h89.296Zm-8.34-23.342l8.354 14.506H82.417l8.354-14.506h72.616Zm-17.5-22.066a8.288 8.288 0 0 1 7.183 4.151l5.228 9.079H95.86l5.229-9.079a8.288 8.288 0 0 1 7.182-4.151h37.617Z"
                      />
                      <path
                        fill="#002B3B"
                        d="M53.523 69.252c-4.167-20.206-5.062-35.704-2.368-46.957c1.602-6.693 4.53-12.153 8.984-16.093c4.702-4.159 10.646-6.2 17.326-6.2c11.018 0 22.602 5.025 34.98 14.57c5.05 3.894 10.29 8.587 15.732 14.082c.434-.557.923-1.083 1.469-1.57c15.386-13.71 28.34-22.23 39.42-25.514c6.588-1.954 12.773-2.14 18.405-.244c5.946 2 10.683 6.137 14.026 11.93c5.516 9.561 6.97 22.124 4.914 37.637c-.838 6.323-2.271 13.21-4.296 20.673c.764.092 1.53.262 2.288.513c19.521 6.47 33.345 13.426 41.714 21.377c4.98 4.73 8.231 9.996 9.407 15.826c1.24 6.153.03 12.324-3.308 18.113c-5.506 9.548-15.63 17.077-30.052 23.041c-5.79 2.395-12.343 4.564-19.664 6.515c.334.754.594 1.555.767 2.395c4.167 20.206 5.061 35.704 2.368 46.957c-1.602 6.693-4.531 12.153-8.985 16.093c-4.701 4.159-10.646 6.2-17.325 6.2c-11.019 0-22.602-5.025-34.98-14.57c-5.104-3.936-10.402-8.687-15.907-14.258a11.737 11.737 0 0 1-2.084 2.442c-15.386 13.712-28.34 22.23-39.42 25.515c-6.588 1.954-12.773 2.14-18.405.244c-5.946-2-10.683-6.137-14.026-11.93c-5.516-9.561-6.97-22.124-4.914-37.637c.869-6.551 2.376-13.709 4.518-21.485a11.732 11.732 0 0 1-2.51-.537c-19.521-6.47-33.345-13.426-41.714-21.377c-4.98-4.73-8.231-9.996-9.407-15.826c-1.24-6.153-.03-12.325 3.308-18.114c5.506-9.547 15.63-17.077 30.052-23.04c5.963-2.467 12.734-4.693 20.32-6.689a11.81 11.81 0 0 1-.633-2.082Z"
                      />
                      <path
                        fill="#FF4154"
                        d="M189.647 161.333a3.684 3.684 0 0 1 4.235 2.81l.023.112l.207 1.075c6.71 35.276 1.983 52.915-14.18 52.915c-15.813 0-35.944-15.051-60.392-45.153a3.684 3.684 0 0 1 2.777-6.005h.114l1.288.009c10.288.056 20.289-.303 30.004-1.076c11.467-.913 23.442-2.475 35.924-4.687ZM78.646 134.667l.062.105l.646 1.127c5.177 9 10.57 17.542 16.18 25.627c6.608 9.52 14.038 19.158 22.29 28.914a3.684 3.684 0 0 1-.309 5.082l-.093.083l-.83.715c-27.307 23.397-45.055 28.068-53.244 14.012c-8.017-13.757-5.11-38.773 8.719-75.047a3.683 3.683 0 0 1 6.579-.618Zm124.857-52.054l.112.037l1.028.354c33.705 11.725 46.51 24.61 38.416 38.655c-7.916 13.736-30.93 23.738-69.041 30.004a3.683 3.683 0 0 1-3.773-5.501c5.458-9.286 10.375-18.524 14.749-27.717c4.96-10.425 9.615-21.616 13.965-33.57a3.684 3.684 0 0 1 4.432-2.295l.112.033ZM84.446 76.71a3.683 3.683 0 0 1 1.31 5.042c-5.46 9.285-10.376 18.524-14.75 27.717c-4.96 10.425-9.615 21.615-13.965 33.57a3.684 3.684 0 0 1-4.544 2.262l-.112-.037l-1.028-.355c-33.705-11.724-46.51-24.61-38.416-38.654c7.916-13.737 30.93-23.738 69.041-30.004c.85-.14 1.722.022 2.464.459Zm108.206-57.748c8.017 13.758 5.11 38.774-8.719 75.048a3.683 3.683 0 0 1-6.579.618l-.062-.105l-.646-1.127c-5.177-9-10.57-17.542-16.18-25.627c-6.608-9.52-14.038-19.158-22.29-28.914a3.684 3.684 0 0 1 .309-5.082l.093-.083l.83-.715c27.307-23.397 45.055-28.068 53.244-14.013ZM77.45 10.59c15.814 0 35.945 15.05 60.392 45.152a3.684 3.684 0 0 1-2.777 6.005h-.114l-1.288-.008c-10.287-.056-20.289.303-30.003 1.076c-11.468.913-23.443 2.475-35.925 4.687a3.684 3.684 0 0 1-4.234-2.81l-.024-.113l-.207-1.074C56.56 28.228 61.286 10.59 77.45 10.59Z"
                      />
                      <path
                        fill="#FFD94C"
                        d="M111.295 73.67h31.576a12.89 12.89 0 0 1 11.181 6.475l15.855 27.626a12.892 12.892 0 0 1 0 12.834l-15.855 27.626a12.892 12.892 0 0 1-11.181 6.475h-31.576c-4.618 0-8.883-2.47-11.182-6.475L84.26 120.605a12.892 12.892 0 0 1 0-12.834l15.854-27.626a12.892 12.892 0 0 1 11.182-6.475Zm26.763 8.338c4.62 0 8.888 2.473 11.185 6.481l11.056 19.288a12.892 12.892 0 0 1 0 12.822l-11.056 19.288a12.892 12.892 0 0 1-11.185 6.48h-21.95c-4.62 0-8.888-2.472-11.185-6.48l-11.056-19.288a12.892 12.892 0 0 1 0-12.822l11.056-19.288a12.892 12.892 0 0 1 11.184-6.48h21.951Zm-5.187 9.12h-11.576a12.892 12.892 0 0 0-11.179 6.47l-5.842 10.167a12.892 12.892 0 0 0 0 12.846l5.842 10.168a12.892 12.892 0 0 0 11.179 6.47h11.576c4.616 0 8.88-2.468 11.179-6.47l5.842-10.168a12.892 12.892 0 0 0 0-12.846l-5.842-10.168a12.892 12.892 0 0 0-11.179-6.47Zm-4.994 8.729c4.612 0 8.873 2.464 11.173 6.46l.829 1.44a12.892 12.892 0 0 1 0 12.862l-.829 1.44a12.892 12.892 0 0 1-11.173 6.46h-1.588a12.892 12.892 0 0 1-11.173-6.46l-.829-1.44a12.892 12.892 0 0 1 0-12.862l.829-1.44a12.892 12.892 0 0 1 11.173-6.46h1.588Zm-.792 8.599a5.738 5.738 0 0 0-4.97 2.866a5.729 5.729 0 0 0 0 5.732a5.738 5.738 0 0 0 9.937 0a5.729 5.729 0 0 0 0-5.732a5.736 5.736 0 0 0-4.967-2.866Zm-46.509 5.732h10.32"
                      />
                    </svg>
                  </a>

                  <a target="_blank" href="https://tailwindcss.com/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="#44a8b3"
                        d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1Zm-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1Z"
                      />
                    </svg>
                  </a>

                  <a
                    target="_blank"
                    href="https://www.framer.com/motion/"
                    className="flex aspect-square h-6 w-6 items-center justify-center rounded-full bg-white/70 p-0.5"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mt-1 h-6 w-6"
                      viewBox="0 0 128 128"
                    >
                      <path d="M22.684 0h84.253v42.667H64.81L22.684 0Zm0 42.667H64.81l42.127 42.666H64.81V128L22.684 85.333V42.667Z" />
                    </svg>
                  </a>

                  <a target="_blank" href="https://www.mongodb.com/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 256 256"
                    >
                      <g fill="none">
                        <rect width="256" height="256" fill="#023430" rx="60" />
                        <path
                          fill="#10AA50"
                          d="M171.173 107.591c-10.537-46.481-32.497-58.855-38.099-67.602A99.398 99.398 0 0 1 126.949 28c-.296 4.13-.84 6.73-4.35 9.862c-7.047 6.283-36.977 30.673-39.496 83.486c-2.347 49.242 36.2 79.605 41.292 82.744c3.916 1.927 8.685.041 11.012-1.728c18.581-12.752 43.969-46.75 35.786-94.773"
                        />
                        <path
                          fill="#B8C4C2"
                          d="M128.545 177.871c-.97 12.188-1.665 19.27-4.129 26.235c0 0 1.617 11.603 2.753 23.894h4.019a223.446 223.446 0 0 1 4.384-25.732c-5.203-2.56-6.827-13.702-7.027-24.397Z"
                        />
                        <path
                          fill="#12924F"
                          d="M135.565 202.275c-5.258-2.429-6.779-13.806-7.013-24.404a499.824 499.824 0 0 0 1.136-52.545c-.276-9.194.13-85.158-2.265-96.28a92.425 92.425 0 0 0 5.651 10.936c5.602 8.754 27.569 21.128 38.099 67.609c8.203 47.941-17.047 81.849-35.608 94.684Z"
                        />
                      </g>
                    </svg>
                  </a>

                  <a target="_blank" href="https://nestjs.com/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 256 256"
                    >
                      <g fill="none">
                        <rect width="256" height="256" fill="#242938" rx="60" />
                        <path
                          fill="#E0234E"
                          d="M146.728 18c-1.556 0-3.001.342-4.335.799c2.835 1.939 4.391 4.506 5.169 7.415c.056.399.167.684.222 1.083c.056.343.112.685.112 1.027c.222 5.02-1.279 5.647-2.335 8.613c-1.612 3.822-1.167 7.928.778 11.237c.167.399.389.855.667 1.255c-2.112-14.431 9.616-16.599 11.784-21.105c.166-3.936-3.002-6.56-5.503-8.385c-2.39-1.483-4.558-1.939-6.559-1.939Zm17.676 3.251c-.223 1.312-.056.97-.111 1.654c-.056.457-.056 1.027-.112 1.483a12.56 12.56 0 0 1-.389 1.37c-.111.456-.278.912-.444 1.368c-.223.457-.389.856-.612 1.312c-.166.228-.278.456-.444.685l-.334.513c-.278.4-.556.799-.834 1.14c-.333.343-.611.742-1 1.027v.058c-.334.285-.667.627-1.056.912c-1.167.913-2.501 1.597-3.724 2.453c-.389.285-.778.513-1.112.855c-.389.286-.722.57-1.056.913c-.389.342-.667.684-1 1.084c-.278.342-.612.741-.834 1.14c-.278.4-.556.8-.778 1.198c-.223.457-.389.856-.612 1.312c-.166.457-.333.856-.444 1.312c-.167.514-.278.97-.389 1.426c-.056.228-.056.514-.112.742c-.055.228-.055.456-.111.684c0 .456-.055.97-.055 1.426c0 .342 0 .685.055 1.027c0 .456.056.912.167 1.426c.056.456.167.912.278 1.369c.167.456.278.912.445 1.369c.111.285.278.57.389.798l-12.784-5.076a134.536 134.536 0 0 0-6.448-1.711l-3.502-.856a100.696 100.696 0 0 0-10.116-1.54c-.111 0-.166-.057-.278-.057a96.867 96.867 0 0 0-9.949-.514c-2.446 0-4.891.114-7.281.286c-3.39.228-6.781.684-10.172 1.255c-.834.114-1.667.285-2.501.456c-1.723.342-3.39.741-5.003 1.14l-2.5.685c-.835.342-1.613.742-2.39 1.084l-1.835.855c-.111.057-.222.057-.278.114c-.556.286-1.056.514-1.556.799a2.667 2.667 0 0 0-.39.171c-.61.285-1.222.627-1.722.913c-.39.17-.779.399-1.112.57c-.167.114-.39.228-.5.285c-.5.286-1 .57-1.446.856c-.5.285-.944.57-1.334.855c-.389.286-.778.514-1.111.799c-.056.057-.111.057-.167.114c-.333.228-.722.513-1.056.799l-.111.114l-.834.684c-.11.057-.222.171-.333.228c-.278.228-.556.514-.834.742c-.056.114-.167.17-.222.228c-.334.342-.667.627-1 .97c-.057 0-.057.057-.112.114c-.334.285-.667.627-1 .97c-.056.056-.056.113-.112.113c-.278.285-.555.57-.833.913c-.111.114-.278.228-.39.342c-.277.342-.61.685-.944 1.027c-.056.114-.167.171-.223.285c-.444.456-.834.913-1.278 1.369l-.167.171c-.89.97-1.834 1.94-2.835 2.795c-1 .913-2.056 1.768-3.112 2.51a41.904 41.904 0 0 1-3.335 2.167a33.512 33.512 0 0 1-3.502 1.711a39.4 39.4 0 0 1-3.613 1.37c-2.334.513-4.724 1.482-6.78 1.653c-.446 0-.946.114-1.39.172c-.5.114-.945.228-1.39.342c-.445.17-.89.342-1.334.513c-.445.171-.89.4-1.334.628c-.39.285-.834.513-1.223.798a9.13 9.13 0 0 0-1.111.97c-.39.285-.779.684-1.112 1.026c-.334.4-.667.742-.945 1.141c-.278.457-.611.856-.834 1.312c-.278.4-.556.856-.778 1.312c-.222.513-.445.97-.611 1.483c-.167.456-.334.97-.5 1.483c-.112.456-.223.913-.278 1.369c0 .057-.056.114-.056.171c-.111.514-.111 1.198-.167 1.54c-.056.4-.111.742-.111 1.141c0 .228 0 .513.056.742c.055.399.11.741.222 1.083c.111.343.223.685.39 1.027v.057c.166.342.388.684.61 1.027c.223.342.445.684.723 1.026c.278.286.612.628.945.913a8.16 8.16 0 0 0 1.056.913c1.334 1.197 1.668 1.597 3.39 2.509c.279.172.556.286.89.457c.056 0 .111.057.167.057c0 .114 0 .171.055.285c.056.456.167.913.278 1.369c.111.513.278.97.445 1.369c.167.342.278.684.445 1.027c.055.114.11.228.166.285c.223.456.445.855.667 1.255l.834 1.198c.278.342.612.741.945 1.083c.334.343.667.628 1.056.97c0 0 .056.057.111.057c.334.285.667.571 1 .799c.39.285.779.513 1.224.741a9.03 9.03 0 0 0 1.278.628c.333.171.722.285 1.112.399c.055.057.11.057.222.114c.222.057.5.114.723.171c-.167 3.08-.223 5.989.222 7.016c.5 1.141 2.946-2.339 5.392-6.332c-.334 3.936-.556 8.556 0 9.925c.61 1.426 3.946-3.023 6.836-7.928c39.408-9.355 75.37 18.595 79.15 58.066c-.723-6.161-8.115-9.583-11.506-8.727c-1.667 4.22-4.502 9.639-9.06 13.004c.39-3.764.223-7.643-.555-11.407c-1.223 5.247-3.613 10.153-6.893 14.373c-5.28.4-10.56-2.224-13.34-6.16c-.222-.171-.277-.513-.444-.741c-.167-.4-.334-.799-.445-1.198a4.835 4.835 0 0 1-.333-1.198c-.056-.399-.056-.798-.056-1.255v-.855c.056-.4.167-.799.278-1.198c.11-.399.222-.799.389-1.198c.222-.399.389-.798.667-1.198c.945-2.738.945-4.962-.778-6.274a6.283 6.283 0 0 0-1.056-.57c-.223-.058-.5-.172-.723-.229c-.167-.057-.278-.114-.444-.171c-.39-.114-.779-.228-1.168-.285a4.133 4.133 0 0 0-1.167-.171a8.869 8.869 0 0 0-1.223-.114c-.278 0-.556.057-.834.057c-.444 0-.833.057-1.222.171c-.39.057-.779.114-1.168.228c-.389.114-.778.229-1.167.4s-.722.342-1.111.513c-.334.171-.668.399-1.057.57c-12.95 8.67-5.224 28.976 3.613 34.851c-3.335.628-6.725 1.369-7.67 2.111l-.111.114c2.39 1.483 4.891 2.738 7.504 3.821a179.626 179.626 0 0 0 9.004 2.738v.057a52.428 52.428 0 0 0 14.007 1.027c24.623-1.768 44.799-20.99 48.468-46.316c.111.514.222.97.333 1.483c.167 1.027.389 2.111.501 3.194v.058c.111.513.166 1.026.222 1.483v.228c.056.513.111 1.027.111 1.483c.056.627.111 1.255.111 1.882v.913c0 .285.056.627.056.912c0 .343-.056.685-.056 1.027v.799c0 .399-.055.741-.055 1.141c0 .228 0 .456-.056.741c0 .399-.056.799-.056 1.255c-.056.171-.056.342-.056.513c-.055.457-.111.856-.166 1.312c0 .171 0 .342-.056.514c-.056.57-.167 1.083-.222 1.654v.114c-.111.513-.223 1.084-.334 1.597v.171l-.333 1.54c0 .057-.056.171-.056.228a15.517 15.517 0 0 1-.389 1.541v.171c-.167.57-.334 1.083-.445 1.597c-.055.057-.055.114-.055.114l-.501 1.711c-.222.57-.389 1.084-.611 1.654c-.222.57-.389 1.141-.611 1.654c-.223.571-.445 1.084-.667 1.654h-.056c-.223.514-.445 1.084-.723 1.597a2.832 2.832 0 0 1-.167.4c-.055.057-.055.114-.111.171c-3.613 7.472-8.948 14.031-15.618 19.165c-.445.285-.89.627-1.334.97c-.111.113-.278.171-.389.285c-.39.285-.779.57-1.223.855l.166.343h.056l2.335-.343h.055c1.445-.228 2.891-.513 4.336-.798a9.518 9.518 0 0 0 1.223-.285c.277-.058.5-.114.778-.172c.389-.057.778-.171 1.167-.228c.333-.114.667-.171 1-.285c5.559-1.369 10.95-3.251 16.119-5.476c-8.837 12.378-20.676 22.36-34.516 28.919c6.392-.456 12.784-1.54 18.953-3.365c22.4-6.788 41.243-22.246 52.526-43.065c-2.279 13.176-7.393 25.725-14.952 36.676a88.023 88.023 0 0 0 14.841-12.662c12.45-13.347 20.621-30.288 23.4-48.483a93.136 93.136 0 0 1 1.612 27.492c40.131-57.438 3.335-116.987-12.061-132.672c-.056-.114-.111-.172-.111-.286c-.056.058-.056.058-.056.114c0-.057 0-.057-.056-.114c0 .685-.056 1.37-.111 2.054a78.116 78.116 0 0 1-.556 3.821c-.278 1.255-.611 2.51-.945 3.765a47.898 47.898 0 0 1-1.334 3.65a49.601 49.601 0 0 1-1.667 3.48c-.612 1.084-1.279 2.224-2.001 3.251a43.7 43.7 0 0 1-2.279 3.08c-.834 1.027-1.723 1.94-2.612 2.852c-.556.514-1.057.97-1.612 1.426c-.445.4-.834.742-1.279 1.14c-1 .8-2.001 1.54-3.112 2.225c-1.056.685-2.168 1.37-3.28 1.94a95.02 95.02 0 0 1-3.501 1.597a38.598 38.598 0 0 1-3.613 1.198a43.872 43.872 0 0 1-3.724.855c-1.279.229-2.557.343-3.78.457c-.889.057-1.779.114-2.668.114c-1.278 0-2.557-.114-3.78-.229c-1.278-.114-2.556-.285-3.779-.57c-1.279-.228-2.501-.57-3.724-.97h-.056c1.223-.114 2.446-.228 3.669-.456a39.423 39.423 0 0 0 3.724-.856a38.452 38.452 0 0 0 3.612-1.198c1.223-.456 2.39-1.026 3.502-1.597c1.167-.57 2.223-1.197 3.335-1.882c1.056-.741 2.112-1.483 3.113-2.281a30.68 30.68 0 0 0 2.834-2.567c.945-.856 1.779-1.825 2.613-2.795a55.775 55.775 0 0 0 2.334-3.08c.111-.171.223-.4.334-.57a70.926 70.926 0 0 0 1.612-2.739a39.8 39.8 0 0 0 1.667-3.479a40.7 40.7 0 0 0 1.334-3.65c.389-1.198.667-2.453.945-3.708c.223-1.312.445-2.567.556-3.821c.111-1.312.222-2.624.222-3.88c0-.912-.055-1.824-.111-2.737c-.111-1.312-.278-2.567-.444-3.822a42.647 42.647 0 0 0-.834-3.821c-.389-1.198-.778-2.453-1.223-3.65c-.445-1.199-1-2.396-1.556-3.537c-.612-1.14-1.223-2.282-1.89-3.365a63.283 63.283 0 0 0-2.223-3.138c-.834-.97-1.668-1.939-2.557-2.909c-.445-.456-.945-.97-1.445-1.425a102.618 102.618 0 0 0-7.726-5.59a9.92 9.92 0 0 0-1.112-.57c-1.834-1.199-3.557-1.826-5.28-2.396Z"
                        />
                      </g>
                    </svg>
                  </a>

                  <a target="_blank" href="https://firebase.google.com">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 256 351"
                    >
                      <defs>
                        <filter
                          id="logosFirebase0"
                          width="200%"
                          height="200%"
                          x="-50%"
                          y="-50%"
                          filterUnits="objectBoundingBox"
                        >
                          <feGaussianBlur
                            in="SourceAlpha"
                            result="shadowBlurInner1"
                            stdDeviation="17.5"
                          />
                          <feOffset
                            in="shadowBlurInner1"
                            result="shadowOffsetInner1"
                          />
                          <feComposite
                            in="shadowOffsetInner1"
                            in2="SourceAlpha"
                            k2="-1"
                            k3="1"
                            operator="arithmetic"
                            result="shadowInnerInner1"
                          />
                          <feColorMatrix
                            in="shadowInnerInner1"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                          />
                        </filter>
                        <filter
                          id="logosFirebase1"
                          width="200%"
                          height="200%"
                          x="-50%"
                          y="-50%"
                          filterUnits="objectBoundingBox"
                        >
                          <feGaussianBlur
                            in="SourceAlpha"
                            result="shadowBlurInner1"
                            stdDeviation="3.5"
                          />
                          <feOffset
                            dx="1"
                            dy="-9"
                            in="shadowBlurInner1"
                            result="shadowOffsetInner1"
                          />
                          <feComposite
                            in="shadowOffsetInner1"
                            in2="SourceAlpha"
                            k2="-1"
                            k3="1"
                            operator="arithmetic"
                            result="shadowInnerInner1"
                          />
                          <feColorMatrix
                            in="shadowInnerInner1"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
                          />
                        </filter>
                        <path
                          id="logosFirebase2"
                          d="m1.253 280.732l1.605-3.131l99.353-188.518l-44.15-83.475C54.392-1.283 45.074.474 43.87 8.188z"
                        />
                        <path
                          id="logosFirebase3"
                          d="m134.417 148.974l32.039-32.812l-32.039-61.007c-3.042-5.791-10.433-6.398-13.443-.59l-17.705 34.109l-.53 1.744z"
                        />
                      </defs>
                      <path
                        fill="#FFC24A"
                        d="m0 282.998l2.123-2.972L102.527 89.512l.212-2.017L58.48 4.358C54.77-2.606 44.33-.845 43.114 6.951z"
                      />
                      <use
                        fill="#FFA712"
                        fill-rule="evenodd"
                        href="#logosFirebase2"
                      />
                      <use
                        filter="url(#logosFirebase0)"
                        href="#logosFirebase2"
                      />
                      <path
                        fill="#F4BD62"
                        d="m135.005 150.38l32.955-33.75l-32.965-62.93c-3.129-5.957-11.866-5.975-14.962 0L102.42 87.287v2.86z"
                      />
                      <use
                        fill="#FFA50E"
                        fill-rule="evenodd"
                        href="#logosFirebase3"
                      />
                      <use
                        filter="url(#logosFirebase1)"
                        href="#logosFirebase3"
                      />
                      <path
                        fill="#F6820C"
                        d="m0 282.998l.962-.968l3.496-1.42l128.477-128l1.628-4.431l-32.05-61.074z"
                      />
                      <path
                        fill="#FDE068"
                        d="m139.121 347.551l116.275-64.847l-33.204-204.495c-1.039-6.398-8.888-8.927-13.468-4.34L0 282.998l115.608 64.548a24.126 24.126 0 0 0 23.513.005"
                      />
                      <path
                        fill="#FCCA3F"
                        d="M254.354 282.16L221.402 79.218c-1.03-6.35-7.558-8.977-12.103-4.424L1.29 282.6l114.339 63.908a23.943 23.943 0 0 0 23.334.006z"
                      />
                      <path
                        fill="#EEAB37"
                        d="M139.12 345.64a24.126 24.126 0 0 1-23.512-.005L.931 282.015l-.93.983l115.607 64.548a24.126 24.126 0 0 0 23.513.005l116.275-64.847l-.285-1.752z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* other projects */}

      {/* testimonial */}
      <section className="relative w-full overflow-hidden pb-32">
        <div className="flex w-full flex-col items-center justify-center px-5 pb-32">
          <h2 className="text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            “Best practices” don’t actually work.
          </h2>

          <figure>
            <blockquote>
              <p className="mx-auto mt-6 max-w-3xl text-center text-base text-gray-400 sm:text-lg">
                I’ve written{" "}
                <a
                  href="https://adamwathan.me/css-utility-classes-and-separation-of-concerns/"
                  className="font-semibold text-sky-500 dark:text-sky-400"
                >
                  a few thousand words
                </a>{" "}
                on why traditional “semantic class names” are the reason CSS is
                hard to maintain, but the truth is you’re never going to believe
                me until you actually try it. If you can suppress the urge to
                retch long enough to give it a chance, I really think you’ll
                wonder how you ever worked with CSS any other way.
              </p>
            </blockquote>
            <figcaption className="mt-6 flex items-center justify-center space-x-4 text-left">
              <TestimonialProfilePic
                src="https://images.unsplash.com/photo-1552234994-66ba234fd567?q=80&w=2787&auto=format&fit=facearea&facepad=3&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                fallback="HP"
                className="aspect-square w-16 border border-gray-700"
              />
              <div>
                <div className="font-semibol text-white">Niel johnson</div>
                <div className="mt-0.5 text-sm leading-6 text-gray-400">
                  High position
                </div>
              </div>
            </figcaption>
          </figure>
        </div>

        <div className="relative z-20 mx-auto grid w-full max-w-screen-xl grid-cols-1 gap-6 px-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <ul className="space-y-8">
            <li>
              <figure className="relative flex flex-col-reverse rounded-xl bg-white/10 p-5">
                <blockquote className="mt-6 text-sm/6 text-gray-200">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-start gap-5">
                  <TestimonialProfilePic
                    src="https://images.unsplash.com/photo-1552234994-66ba234fd567?q=80&w=2787&auto=format&fit=facearea&facepad=3&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    fallback="HP"
                    className="aspect-square w-16 border border-gray-700"
                  />

                  <div>
                    <h3 className="text-base font-medium text-white">
                      Ryan Florence
                    </h3>
                    <p className="mt-1 text-sm text-gray-300">
                      Frontend developer
                    </p>
                  </div>
                </figcaption>
              </figure>
            </li>

            <li>
              <figure className="relative flex flex-col-reverse rounded-xl bg-white/10 p-5">
                <blockquote className="mt-6 text-sm/6 text-gray-200">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit.Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Facilis repellendus eveniet voluptatum culpa soluta
                    similique, eos beatae ullam cupiditate debitis!
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-start gap-5">
                  <TestimonialProfilePic
                    src="https://images.unsplash.com/photo-1552234994-66ba234fd567?q=80&w=2787&auto=format&fit=facearea&facepad=3&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    fallback="HP"
                    className="aspect-square w-16 border border-gray-700"
                  />

                  <div>
                    <h3 className="text-base font-medium text-white">
                      Ryan Florence
                    </h3>
                    <p className="mt-1 text-sm text-gray-300">
                      Frontend developer
                    </p>
                  </div>
                </figcaption>
              </figure>
            </li>

            <li>
              <figure className="relative flex flex-col-reverse rounded-xl bg-white/10 p-5">
                <blockquote className="mt-6 text-sm/6 text-gray-200">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-start gap-5">
                  <TestimonialProfilePic
                    src="https://images.unsplash.com/photo-1552234994-66ba234fd567?q=80&w=2787&auto=format&fit=facearea&facepad=3&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    fallback="HP"
                    className="aspect-square w-16 border border-gray-700"
                  />

                  <div>
                    <h3 className="text-base font-medium text-white">
                      Ryan Florence
                    </h3>
                    <p className="mt-1 text-sm text-gray-300">
                      Frontend developer
                    </p>
                  </div>
                </figcaption>
              </figure>
            </li>
          </ul>

          <ul className="hidden space-y-8 sm:block">
            <li>
              <figure className="relative flex flex-col-reverse rounded-xl bg-white/10 p-5">
                <blockquote className="mt-6 text-sm/6 text-gray-200">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis repellendus eveniet voluptatum culpa soluta
                    similique, eos beatae ullam cupiditate debitis!
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-start gap-5">
                  <TestimonialProfilePic
                    src="https://images.unsplash.com/photo-1552234994-66ba234fd567?q=80&w=2787&auto=format&fit=facearea&facepad=3&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    fallback="HP"
                    className="aspect-square w-16 border border-gray-700"
                  />

                  <div>
                    <h3 className="text-base font-medium text-white">
                      Ryan Florence
                    </h3>
                    <p className="mt-1 text-sm text-gray-300">
                      Frontend developer
                    </p>
                  </div>
                </figcaption>
              </figure>
            </li>

            <li>
              <figure className="relative flex flex-col-reverse rounded-xl bg-white/10 p-5">
                <blockquote className="mt-6 text-sm/6 text-gray-200">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit.Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Facilis repellendus eveniet voluptatum culpa soluta
                    similique, eos beatae ullam cupiditate debitis!Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Facilis
                    repellendus eveniet voluptatum culpa soluta similique, eos
                    beatae ullam cupiditate debitis!
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-start gap-5">
                  <TestimonialProfilePic
                    src="https://images.unsplash.com/photo-1552234994-66ba234fd567?q=80&w=2787&auto=format&fit=facearea&facepad=3&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    fallback="HP"
                    className="aspect-square w-16 border border-gray-700"
                  />

                  <div>
                    <h3 className="text-base font-medium text-white">
                      Ryan Florence
                    </h3>
                    <p className="mt-1 text-sm text-gray-300">
                      Frontend developer
                    </p>
                  </div>
                </figcaption>
              </figure>
            </li>

            <li>
              <figure className="relative flex flex-col-reverse rounded-xl bg-white/10 p-5">
                <blockquote className="mt-6 text-sm/6 text-gray-200">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-start gap-5">
                  <TestimonialProfilePic
                    src="https://images.unsplash.com/photo-1552234994-66ba234fd567?q=80&w=2787&auto=format&fit=facearea&facepad=3&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    fallback="HP"
                    className="aspect-square w-16 border border-gray-700"
                  />

                  <div>
                    <h3 className="text-base font-medium text-white">
                      Ryan Florence
                    </h3>
                    <p className="mt-1 text-sm text-gray-300">
                      Frontend developer
                    </p>
                  </div>
                </figcaption>
              </figure>
            </li>
          </ul>

          <ul className="hidden space-y-8 sm:block">
            <li>
              <figure className="relative flex flex-col-reverse rounded-xl bg-white/10 p-5">
                <blockquote className="mt-6 text-sm/6 text-gray-200">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-start gap-5">
                  <TestimonialProfilePic
                    src="https://images.unsplash.com/photo-1552234994-66ba234fd567?q=80&w=2787&auto=format&fit=facearea&facepad=3&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    fallback="HP"
                    className="aspect-square w-16 border border-gray-700"
                  />

                  <div>
                    <h3 className="text-base font-medium text-white">
                      Ryan Florence
                    </h3>
                    <p className="mt-1 text-sm text-gray-300">
                      Frontend developer
                    </p>
                  </div>
                </figcaption>
              </figure>
            </li>

            <li>
              <figure className="relative flex flex-col-reverse rounded-xl bg-white/10 p-5">
                <blockquote className="mt-6 text-sm/6 text-gray-200">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit.Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Facilis repellendus eveniet voluptatum culpa soluta
                    similique, eos beatae ullam cupiditate debitis!
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-start gap-5">
                  <TestimonialProfilePic
                    src="https://images.unsplash.com/photo-1552234994-66ba234fd567?q=80&w=2787&auto=format&fit=facearea&facepad=3&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    fallback="HP"
                    className="aspect-square w-16 border border-gray-700"
                  />

                  <div>
                    <h3 className="text-base font-medium text-white">
                      Ryan Florence
                    </h3>
                    <p className="mt-1 text-sm text-gray-300">
                      Frontend developer
                    </p>
                  </div>
                </figcaption>
              </figure>
            </li>

            <li>
              <figure className="relative flex flex-col-reverse rounded-xl bg-white/10 p-5">
                <blockquote className="mt-6 text-sm/6 text-gray-200">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-start gap-5">
                  <TestimonialProfilePic
                    src="https://images.unsplash.com/photo-1552234994-66ba234fd567?q=80&w=2787&auto=format&fit=facearea&facepad=3&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    fallback="HP"
                    className="aspect-square w-16 border border-gray-700"
                  />

                  <div>
                    <h3 className="text-base font-medium text-white">
                      Ryan Florence
                    </h3>
                    <p className="mt-1 text-sm text-gray-300">
                      Frontend developer
                    </p>
                  </div>
                </figcaption>
              </figure>
            </li>
          </ul>
        </div>

        {/* background effects */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-full w-full [mask-image:linear-gradient(0deg,transparent,black,transparent,transparent)]">
          <div className="pattern -ml-2 -mt-1 h-full w-full opacity-80"></div>
        </div>

        <div className="pointer-events-none absolute inset-0 mt-10 flex items-center justify-center">
          <div className="flex -rotate-45 items-center justify-center">
            <div className="h-40 w-96 rounded-full bg-blue-500 opacity-15 blur-[100px]"></div>
            <div className="h-96 w-[32rem] rounded-full bg-pink-500 opacity-15 blur-[150px]"></div>
          </div>
        </div>
        {/* background effects */}
      </section>
      {/* testimonial */}
    </main>
  );
}
