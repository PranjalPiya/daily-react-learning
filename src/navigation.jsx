
import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <ul>
                <li><Link to='/'>Day 1</Link></li>
                <li><Link to='/day2'>Day 2</Link></li>
                <li>Day 3</li>
                <li>Day 4</li>
                <li>Day 5</li>
                <li>Day 6</li>



            </ul>

        </>
    )


}

export default Navigation