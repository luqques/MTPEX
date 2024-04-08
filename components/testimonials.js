import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";

const Comentarios = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Compartilhando um real <Mark>feedback</Mark>
              de uma experiência que realmente faz a diferença nos detalhes.
            </p>

            <Avatar
              image={userOneImg}
              name="Luiza Cunha"
              title="Diretora de Marketing na Ambev Tech"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              O motorista conhecia minhas <Mark>preferências</Mark>
              preferências e estava disposto a acomodar qualquer solicitação.
            </p>

            <Avatar
              image={userTwoImg}
              name="João Lucas"
              title="Gerente na Sênior Sistemas"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Os carros espaçosos proporcionam um <Mark>ambiente tranquilo</Mark>
              para eu revisar documentos e me preparar para reuniões.
            </p>

            <Avatar
              image={userThreeImg}
              name="Gabriele Silva"
              title="Diretora na Bunge"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-red-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-red-900 dark:bg-red-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Comentarios;
