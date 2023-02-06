import useMyContext from '../hooks/useMyContext.jsx';

function Test () {

    const context = useMyContext();

    return (  

        <div>
            <h1>Hello</h1>
        </div>
    );
}

export default Test;