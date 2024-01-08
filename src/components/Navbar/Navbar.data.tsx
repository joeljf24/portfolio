import { Home, CircleUserRound, NotebookText, FolderOpenDot, Send } from "lucide-react";

export const dataNavbar = [
    {
        name: "home",
        path: "/",
        icon: <Home />,
    },
    {
        name: "about",
        path: "/about",
        icon: <CircleUserRound />,
    },
    // {
    //     name: "experience",
    //     path: "/experience",
    //     icon: <NotebookText />,
    // },
    {
        name: "projects",
        path: "/projects",
        icon: <FolderOpenDot />,
    },
    {
        name: "contact",
        path: "/contact",
        icon: <Send />,
    }
]