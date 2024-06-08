import Header from "../components/header";
import Menu from "../components/menu";
import Footer from "../components/footer";
import Aside from "../components/aside";

let Recipes = ()=>{
    return(
        <>
            <Header />
            <Menu />
            <div className="row">
                <Aside />
                <div className="col-sm-8">
                    <h1> RECETAS </h1>
                </div> 
            </div>
            <Footer /> 
        </>
    );
}
export default Recipes;