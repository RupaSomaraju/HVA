import { useState } from "react";

const Home = () => {
    //let name= 'mario';
    const [name, setName]=useState('Sarvani');
    const [age, setAge] = useState(25);

    const handleClick = () => {
        setName('Rupa');
    }

    
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button>
            
        </div>
     );
}
 
export default Home;