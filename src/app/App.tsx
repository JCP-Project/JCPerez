import { FC} from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Layout from "./Layout/layout";
import Home from "./pages/Home/home";
import Skills from "./pages/Skills/skills";
import PageTitle from "./PageTitle";
import Experience from "./pages/Experience/experience";
import Contact from "./pages/Contact/contact";
import About from "./pages/About/about";

const App: FC = () => {
  return (
    <>  
    <Layout>
      <Routes>
      <Route index path="/" element={<> <PageTitle title="Home" /> <Home /> </>} />
      <Route path="/about" element={<> <PageTitle title="about" /> <About />  </>} />
      <Route path="/skills" element={<> <PageTitle title="Skills" /> <Skills />  </>} />
      <Route path="/experience" element={<> <PageTitle title="Experience" /> <Experience />  </>} />
      <Route path="/contact" element={<> <PageTitle title="Contact" /> <Contact />  </>} />
      </Routes>
    </Layout>
    </>
  );
};

export default App;
