import { SiTailwindcss, SiGithub, SiMongodb, SiReact, SiNextdotjs, SiTestinglibrary } from "react-icons/si";
import { TbWorld } from "react-icons/tb"
import { MdOndemandVideo } from "react-icons/md";
import { ImImages } from "react-icons/im"

export const cardContent = [
    {
        id: 0,
        title: "Pokémon",
        description:
            "EN PROCESO: SPA que incluye una pokedex, quiz, captura y creación de tus propios pokemones",
        imageUrl: "https://www.lucushost.com/blog/wp-content/uploads/2018/11/como-crear-una-pagina-en-construccion.png",
        skills: [
            {
                icon: <SiGithub size="40" />,
                href: "https://github.com/joeljf24/Pokemon"
            },
        ]
    },
    {
        id: 1,
        title: "Yo Aprendo",
        description:
            "EN PAUSA: Proyecto de e-commerce sobre cursos de arquitectura",
        imageUrl: "https://cdn.discordapp.com/attachments/1111334962361274408/1194076067737120828/image.png?ex=65af08ff&is=659c93ff&hm=b2db6795fc7a00da10b65923690896d55d857211200beaa018ee297752563789&",
        skills: [
            {
                icon: <SiGithub size="40" />,
                href: "https://github.com/CursosYoAprendo/Yo_Aprendo"
            },
            {
                icon: <ImImages size="40" />,
                href: "https://drive.google.com/drive/folders/1XCrTKK3u5z-GUHiecG2rsMQS9R38hNn2?usp=sharing"
            },
        ]
    },
    {
        id: 2,
        title: "SELPRO Soluciones",
        description:
            "Proyecto de e-commerce sobre subastas y subastas inversas",
        imageUrl: "https://cdn.discordapp.com/attachments/1111334962361274408/1194075493788565554/image.png?ex=65af0876&is=659c9376&hm=f95a0af29be138ac8919c901a436589124929171b5650c65eb654321cdd583bb&",
        skills: [
            {
                icon: <MdOndemandVideo size="40" />,
                href: "https://vimeo.com/868063080"
            },
        ]
    },
    {
        id: 3,
        title: "Landing Page Application",
        description:
            "Landing page piloto",
        imageUrl: "https://cdn.discordapp.com/attachments/1111334962361274408/1194101186236797038/image.png?ex=65af2064&is=659cab64&hm=7db46eb9b245b08965c6dc73e3ebd837bd2276279b189106bec296dd625336d4&",
        skills: [
            {
                icon: <SiGithub size="40" />,
                href: "https://github.com/joeljf24/landing-page"
            },
            {
                icon: <TbWorld size="40" />,
                href: "https://landing-nine-steel.vercel.app/"
            },
        ]
    },
    {
        id: 4,
        title: "Countries",
        year: 2023,
        description:
            "SPA. Busca, ordena o filtra países y crea actividades para cada uno de ellos",
        imageUrl: "https://cdn.discordapp.com/attachments/1111334962361274408/1194074627270516838/image.png?ex=65af07a7&is=659c92a7&hm=9820ee9b99d305fc5c36e5b60b5b22198d8011ffc6dc6a44fe17f6bf1b4f9bbf&",
        skills: [
            {
                icon: <SiGithub size="40" />,
                href: "https://github.com/joeljf24/cr-pi-countries-main"
            },
            {
                icon: <TbWorld size="40" />,
                href: "https://cr-pi-countries-main-kappa.vercel.app/"
            },
        ]
    },
];