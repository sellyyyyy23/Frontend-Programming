import { useState } from "react";

function Counter() {

     const [hasil, setHasil] = useState(0);

    function tambah(){
        setHasil(hasil + 1);
    }

    return (
        <div>
        <p>Result: {hasil}</p>
        <button onClick={tambah}>Add</button>
        </div>
    );
}

export default Counter;