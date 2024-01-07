import Layout from "./components/Layout/Layout.jsx";
import Slider from "./Pages/Slider/Slider.jsx";
import WelcomePage from "./Pages/WelcomePage/WelcomePage.jsx";
import Students from "./Pages/Students/Students.jsx";
import Highlights from "./Pages/Highlights/Highlights.jsx";
import StudentsSlider from "./Pages/StudentsSlider/StudentsSlider.jsx";
import Courses from "./Pages/Courses/Courses.jsx";
import Teachers from "./Pages/Teachers/Teachers.jsx";
import Choose from "./Pages/Choose/Choose.jsx";

function App() {

    return (
        <Layout>
            <Slider/>
            <WelcomePage/>
            <Students/>
            <Highlights/>
            <StudentsSlider/>
            <Courses/>
            <Teachers/>
            <Choose/>
        </Layout>
    )
}

export default App
