import Stories from "../components/Stories";
import Posts from "../components/Posts";
import MiniProfile from "../components/MiniProfile";
import Suggestions from "../components/Suggestions";
import Header from "../components/Header";

function Pagina() {
  return (
    <main className="flex bg-pink-100 flex-row justify-center flex-nowrap gap-x-2">
      <section className="basis-1/3 m-0">
        <Header />
      </section>
      <section className="basis-1/12 mr-32">
        <Stories />
        <Posts />
      </section>
      <section className="basis-1/4 mr-16">
       <div >
        <MiniProfile />
        <Suggestions />
       </div>
      </section>
    </main>
  );
}

export default Pagina;
