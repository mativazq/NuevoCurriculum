
import './App.css'
import AboutMe from './Components/AboutMe/AboutMe'
import Header from './Components/Header/Header'
import Education from './Components/Education/Education'
import Title from './Components/Title/Title'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Footer from './Components/Footer/Footer'


function App() {
    return(
        <>
            <Header />           
            <Title />
            <Education />
            <Skills />
            <AboutMe />
            <Projects />
            <Footer />
        </>
    )
}

export default App
