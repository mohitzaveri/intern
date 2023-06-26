
import React from "react"
import "./homepage.css"

const data = [
    'Box 1', 'Box 2', 'Box 3', 'Box 4',
    'Box 5', 'Box 6', 'Box 7', 'Box 8',
    'Box 9', 'Box 10', 'Box 11', 'Box 12',
    'Box 13', 'Box 14', 'Box 15', 'Box 16',
    // Add more data as needed
];

const Homepage = () => {
    return (
        <div className="grid">
            {data.map((item, index) => (
                <div key={index} className="grid-item">
                    {item}
                </div>
            ))}
        </div>
    );
};

export default Homepage;






// const Homepage = ({setLoginUser}) => {
//     return (
//         <div className="homepage">
//             <h1>Hello Homepage</h1>
//             <div className="button" onClick={() => setLoginUser({})} >Logout</div>
//         </div>
//     )
// }

// export default Homepage


