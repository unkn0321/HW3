import Header from"../components/Header"
import Article1 from"../components/Article1"
import Article2 from "../components/Article2"
import Footer from"../components/Footer"

function Home(){
    return(
        <div className="container main-layout">
            <Header className="layout-header"/>
            <Article1 className="layout-content"/>
            <Article2 className="layout-content"/>
            <Footer className="layout-footer"/>
        </div>
    );
}

export default Home;