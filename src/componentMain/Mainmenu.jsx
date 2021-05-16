import { React } from "react";
import MainmenuDoComplete from "./MainmenuDoComplete";
import ButtonsSort from "../components/ButtonsSort";
import ButtonAddTask from "../components/ButtonAddTask";

function Mainmenu() {
    return (
        <div className="container-fluid wrapper">
            <nav className="navbar navbar-light bg-light">
                <h1>MyToDoList</h1>
                <ButtonsSort />
                <ButtonAddTask />
            </nav>
            <MainmenuDoComplete />
        </div>
    );
}

export default Mainmenu;
