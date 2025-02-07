import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Latest from "../Components/Latest";
import LeftSide from "../Components/MainLayouts/LeftSide";
import Right from "../Components/MainLayouts/Right";

import NavBar from "../Components/NavBar";


const HomeLayout = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header></Header>
            <section className="w-11/12 mx-auto">
                <Latest></Latest>
            </section>
            </header>

            {/* this is nav section */}

            <nav className="w-11/12 mx-auto py-2">
                <NavBar></NavBar>
            </nav>
            {/* main section start here */}
            <main className="w-11/12 mx-auto pt-3 grid grid-cols-12">
                <aside className="col-span-3">
                    <LeftSide></LeftSide>
                </aside>
                <section className="col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className="col-span-3">
                    <Right></Right>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;