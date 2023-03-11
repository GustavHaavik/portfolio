/* eslint-disable react/jsx-no-comment-textnodes */
import Image from "next/image";

function About() {
  var birthday = new Date("2000-12-03");
  var today = new Date();
  var age = today.getFullYear() - birthday.getFullYear() - 1;

  if (
    today >=
    new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate())
  ) {
    age++;
  }

  return (
    <div id="about_me" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-orange-300">
            About
          </p>
          <h2 className="text-white py-4">Who am I</h2>
          <div className="bg-gray-80 border border-gray-700 py-2 text-gray-400 px-6 rounded-md font-mono">
            // Gustav, {age} år gammel Datamatiker
          </div>

          <div className="flex flex-row w-auto text-gray-400 py-4 gap-4">
            <div className="bg-gray-800 border border-gray-700 flex-col p-4 rounded-md">
              <h2 className="text-white">Frontend Udvikler</h2>
              <p className="py-2">
                Som frontend developer er min prioritet brugervenlig og
                reusability, her har jeg benyttet forskellige frameworks og
                libraries som React, Next.js, TailwindCSS, Bootstrap, Material
                UI. Som afprøvet min ekspetice i forskellige sprog, så som HTML,
                CSS, Flutter, C# dotnet core.
              </p>
            </div>
            <div className="bg-gray-800 border border-gray-700 flex-col p-4 rounded-md">
              <h2 className="text-white">Backend Udvikler</h2>
              <p className="py-2">
                Jeg er en backend udvikler med erfaring i at udvikle backend
                applikationer i C# dotnet core, med en god forståelse af
                databaser, så som SQL, MySQL, MongoDB, og andre. Jeg har
                arbejdet med forskellige typer af applikationer, så som
                webapplikationer, desktop applikationer, og mobile
                applikationer.
              </p>
            </div>
          </div>
          <p className="py-2 text-orange-300 underline cursor-pointer">
            Check out some of my latest projects.
          </p>
        </div>
        <div className="w-full h-auto m-auto rounded-xl flex items-center justify-center p-4">
          <Image src="/pb.png" alt="Logo" width={500} height={500} />
        </div>
      </div>
    </div>
  );
}

export default About;
