import ProfileCard from "./ProfileCard";
import AlexaImg from "./img/alexa.png";
import SiriImg from "./img/siri.png";
import CortanaImg from "./img/cortana.png";
import GoogleImg from "./img/google.png";

import "bulma/css/bulma.css";



function App() {
    //return <input type="number" min={1} max={10}/>; //JSX
    return (
        <div className="container">
            <h1>Asistentes</h1>
            <section className="section">
                <div className="columns">
                    <div className="column is-4">
                        <ProfileCard titulo="Alexa" handle="@Alexa06" descripcion="Asistente de Amazon" url={AlexaImg}/>
                    </div>
                    <div className="column is-4">
                        <ProfileCard titulo="Siri" handle="@Siri66" descripcion="Asistente de Apple" url={SiriImg}/>
                    </div>
                    <div className="column is-4">
                        <ProfileCard titulo="Google" handle="@Google70" descripcion="Asistente de Google" url={GoogleImg}/>
                    </div>
                    <div className="column is-4">
                        <ProfileCard titulo="Cortana" handle="@Cortana22" descripcion="Asistente de Microsoft" url={CortanaImg}/>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default App;