import { useState, createRef } from 'react';
import './App.css';

function App() {

    const [post, setPost] = useState("");

    const inputRef = createRef();

    const handlePost = async () => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( { post })
        }

        await fetch('/api/posts', options)
    }

    return (
        <div className="App">
            <header className="App-header">
                <textarea ref={inputRef} onChange={() => setPost(inputRef.current.value)} />
                <button onClick={handlePost}>Save</button>
            </header>
        </div>
    );
}

export default App;
