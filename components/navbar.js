import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import mtpexLogo from "../public/img/mtpex-logo-3.png";

const Navbar = () => {
  const navigation = [
    { name: "Benefícios", id: "beneficios" },
    { name: "Frota", id: "frota" },
    // { name: "Avaliações", id: "avaliacoes" },
    { name: "Dúvidas", id: "duvidas" },
    { name: "Contato", id: "contato" },
  ];

  const handleScrollToSection = (id) => {
    const element = document.querySelector(`#${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0 z-10">
        {/* Logo */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <a href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium">
                    <span>
                      <Image
                        src={mtpexLogo}
                        alt="N"
                        width="150"
                        className="w-100"
                      />
                    </span>
                  </span>
                </a>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto rounded-md lg:hidden focus:outline-none text-gray-300 focus:bg-trueGray-700"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <a
                        key={index}
                        href={`#${item.id}`}
                        className="w-full z-10 px-4 py-2 -ml-4 rounded-md text-gray-300 focus:bg-gray-800 focus:outline-none"
                      >
                        {item.name}
                      </a>
                    ))}
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li key={index} className="mr-3">
                <a
                  href={`#${menu.id}`}
                  onClick={() => handleScrollToSection(menu.id)}
                  className="inline-block px-4 py-2 text-lg font-normal no-underline rounded-md hover:opacity-50 transition-opacity text-gray-200 focus:outline-none focus:bg-gray-800"
                >
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
