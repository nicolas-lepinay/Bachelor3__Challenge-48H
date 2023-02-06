import './App.css';
import useMyContext, { ProvideContext } from './hooks/useMyContext';
import Phone from './layout/Phone';
import Home from './pages/Home';

function App() {

    const context = useMyContext();

    console.log(context)

    return (
        <ProvideContext>
            <div className="App">
                <Phone>

                    <Home></Home>

                </Phone>
            </div>
        </ProvideContext>
    );
}

export default App;
