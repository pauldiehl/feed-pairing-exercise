import { useState } from 'react';
import './App.css';

function App() {

    const [post, setPost] = useState("");

    const handlePost = async () => {
        await fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( { post })
        })
    }

    return (
        <div className="App">
            <header className="App-header">
                <form onSubmit={handlePost}>
                    <textarea
                        onChange={(e) => setPost(e.target.value)}
                    />
                    <input type="submit" />
                </form>
            </header>
        </div>
    );
}

export default App;
