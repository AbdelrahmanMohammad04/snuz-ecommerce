import MainCarousel from "./MainCarousel"
import ShoppingList from "./ShoppingList"
import NewsLetter from "./NewsLetter"


const Home = () => {
    return <div className="home">
        <MainCarousel />
        <ShoppingList />
        <NewsLetter />
    </div>
}

export default Home