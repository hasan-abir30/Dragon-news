import Header from "../Components/Header";
import Latest from "../Components/Latest";


const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            <section className="w-11/12 mx-auto">
                <Latest></Latest>
            </section>
            </header>
            <nav></nav>
            <main></main>
        </div>
    );
};

export default HomeLayout;