import video from "./video/video.mp4"
import "./MainPage.css"
import { shades } from "../../theme"

const MainPage = () => {
    return (
        <div className="mainPage">
            <video autoPlay={true} loop={true} muted={true} playsInline={true}  zindex="-1" className="video">
                <source src={video} type="video/mp4"/>
            </video>
            <div className="main-page-content">
                <div className="content">
                    eee
                </div>
            </div>
        </div>
    )
}

export default MainPage