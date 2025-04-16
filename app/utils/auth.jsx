import Cookies from "js-cookie";
import React from 'react'

function auth() {
   
        const token = Cookies.get("userToken");
        return token;
    
}

export default auth