function ContactContainer(): JSX.Element {
  return (
    <section className="flex flex-col gap-[50px] w-full lg:w-[60%] mx-auto scroll-m-40" id="contact">
      <div className=" flex flex-col justify-center">
        <div className="flex flex-col md:flex-row justify-between px-5 xl:px-20">
          <div className="flex flex-row gap-10 justify-start items-center w-full">
            <div className="flex flex-row gap-10 justify-center items-center w-full">
              <div className="hidden md:block h-[0.5px]  bg-[#db0b0b] flex-1"></div>
              <h1 className="font-bold text-4xl lg:text-5xl text-center">KONTAKT</h1>
              <div className="hidden md:block h-[0.5px] bg-[#db0b0b] flex-1"></div>
            </div>
          </div>
        </div>
        <div className="px-5 xl:px-20 mt-[50px] flex flex-col items-center gap-[50px]">
          <div className="flex gap-5 md:gap-0 items-center flex-col md:flex-row justify-between w-full">
            <span className="flex flex-row gap-3 items-center font-medium text-xl">
              <svg width="25" height="26" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.88547 1.26054C2.06045 1.08583 2.27055 0.950295 2.50187 0.862926C2.73318 0.775558 2.98043 0.738347 3.22721 0.753759C3.47399 0.769172 3.71469 0.836855 3.93333 0.952325C4.15198 1.06779 4.34359 1.22841 4.49547 1.42354L6.29047 3.72954C6.61947 4.15254 6.73547 4.70354 6.60547 5.22354L6.05847 7.41354C6.03039 7.52698 6.03201 7.64574 6.06319 7.75837C6.09437 7.871 6.15405 7.97369 6.23647 8.05654L8.69347 10.5135C8.77642 10.5961 8.87928 10.6559 8.9921 10.6871C9.10492 10.7183 9.22388 10.7198 9.33747 10.6915L11.5265 10.1445C11.7831 10.0807 12.0509 10.076 12.3096 10.1305C12.5684 10.1851 12.8114 10.2976 13.0205 10.4595L15.3265 12.2535C16.1555 12.8985 16.2315 14.1235 15.4895 14.8645L14.4555 15.8985C13.7155 16.6385 12.6095 16.9635 11.5785 16.6005C8.93914 15.6731 6.54301 14.1623 4.56847 12.1805C2.58684 10.2063 1.07602 7.81051 0.148471 5.17154C-0.213529 4.14154 0.111471 3.03454 0.851471 2.29454L1.88547 1.26054Z"
                  fill="#DB090A"
                />
              </svg>
              031/512-640
            </span>
            <span className="flex flex-row gap-3 items-center font-medium text-xl">
              <svg width="25" height="26" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_111_1820)">
                  <path
                    d="M2.00024 2.75C1.54713 2.74997 1.10743 2.9038 0.753166 3.18631C0.398899 3.46881 0.151062 3.86324 0.0502441 4.305L8.00024 9.164L15.9502 4.305C15.8494 3.86324 15.6016 3.46881 15.2473 3.18631C14.8931 2.9038 14.4534 2.74997 14.0002 2.75H2.00024ZM0.000244141 12.55V5.448L5.80324 8.994L0.000244141 12.55ZM6.76124 9.58L0.191244 13.606C0.353427 13.9485 0.609566 14.2378 0.929832 14.4404C1.2501 14.6429 1.62131 14.7503 2.00024 14.75H8.25624C8.08638 14.2682 7.99981 13.7609 8.00024 13.25C7.99956 12.5931 8.14302 11.944 8.42051 11.3486C8.69801 10.7532 9.10277 10.2259 9.60624 9.804L9.23924 9.579L8.00024 10.336L6.76124 9.58ZM16.0002 10.421V5.447L10.1972 8.993L10.5352 9.201C11.1477 8.90399 11.8196 8.74978 12.5002 8.75C13.9142 8.75 15.1752 9.402 16.0002 10.421Z"
                    fill="#DB090A"
                  />
                  <path
                    d="M15.8342 12.994C15.8342 14.162 15.2572 15.019 14.2472 15.019C13.7442 15.019 13.2452 14.791 13.1272 14.371H13.0842C12.9662 14.787 12.5412 15.014 12.0692 15.014C11.2992 15.014 10.8102 14.472 10.8102 13.58V13.051C10.8102 12.207 11.2912 11.651 12.0702 11.651C12.6552 11.651 12.9402 11.984 13.0232 12.281H13.0532V11.713H13.9582V13.903C13.9582 14.175 14.1382 14.323 14.3692 14.323C14.6842 14.323 15.0082 13.908 15.0082 12.933V12.815C15.0082 11.538 14.0582 10.489 12.5242 10.489H12.4842C10.9022 10.489 9.84424 11.556 9.84424 13.213V13.37C9.84424 15.237 11.0812 16.024 12.4142 16.024H12.4592C12.9662 16.024 13.3942 15.954 13.6392 15.844V16.575C13.4202 16.675 12.9962 16.75 12.4022 16.75H12.3582C10.4382 16.75 9.00024 15.57 9.00024 13.396V13.182C9.00024 11.11 10.4212 9.75 12.4852 9.75H12.5202C14.6402 9.75 15.8342 11.18 15.8342 12.784V12.994ZM11.7942 13.204V13.431C11.7942 14.017 12.0212 14.231 12.3752 14.231C12.6852 14.231 12.9392 14.061 12.9392 13.488V13.121C12.9392 12.605 12.6642 12.413 12.3672 12.413C12.0212 12.413 11.7942 12.658 11.7942 13.204Z"
                    fill="#DB090A"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_111_1820">
                    <rect width="16" height="16" fill="white" transform="translate(0.000244141 0.75)" />
                  </clipPath>
                </defs>
              </svg>
              info@bioskopart.rs
            </span>
            <span className="flex flex-row gap-3 items-center font-medium text-xl">
              <svg width="25" height="26" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_111_1825)">
                  <path
                    d="M8 16.75C8 16.75 14 11.064 14 6.75C14 5.1587 13.3679 3.63258 12.2426 2.50736C11.1174 1.38214 9.5913 0.75 8 0.75C6.4087 0.75 4.88258 1.38214 3.75736 2.50736C2.63214 3.63258 2 5.1587 2 6.75C2 11.064 8 16.75 8 16.75ZM8 9.75C7.20435 9.75 6.44129 9.43393 5.87868 8.87132C5.31607 8.30871 5 7.54565 5 6.75C5 5.95435 5.31607 5.19129 5.87868 4.62868C6.44129 4.06607 7.20435 3.75 8 3.75C8.79565 3.75 9.55871 4.06607 10.1213 4.62868C10.6839 5.19129 11 5.95435 11 6.75C11 7.54565 10.6839 8.30871 10.1213 8.87132C9.55871 9.43393 8.79565 9.75 8 9.75Z"
                    fill="#DB090A"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_111_1825">
                    <rect width="16" height="16" fill="white" transform="translate(0 0.75)" />
                  </clipPath>
                </defs>
              </svg>
              Petra Ćelovića 4, Užice
            </span>
          </div>
          <div className="h-[0.5px] bg-[#db0b0b] w-24"></div>
          <form className="flex flex-col gap-5 w-full">
            <div className="flex flex-row gap-5">
              <input className="border-[0.5px] border-black w-full h-[50px] px-5 bg-gray-200" placeholder="Ime i prezime" type="text" />
              <input className="border-[0.5px] border-black w-full h-[50px] px-5 bg-gray-200" placeholder="Email adresa" type="text" />
            </div>
            <input className="border-[0.5px] border-black w-full h-[50px] px-5 bg-gray-200" placeholder="Predmet poruke" type="text" />
            <textarea className="border-[0.5px] border-black w-full p-5 bg-gray-200" placeholder="Poruka" rows={8} cols={50} />
            <button className="mx-auto bg-[#db0b0b] text-white px-10 py-3 ">POSALJITE</button>
          </form>
        </div>
      </div>
    </section>
  );
}
export { ContactContainer };
