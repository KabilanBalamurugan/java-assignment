import React from "react";

const user = {
    name: 'HTML',
    
    imageSize: 590,
  };
function Image1(){
    return(
    <div>
        <h1>Welcome to i-exceed</h1>
        <img src="https://www.askhandle.com/_next/image?url=%2Fimages%2Fblog%2Fposts-img%2Fpost-featured%2Fchatgpt.webp&w=3840&q=75" alt={user.name} style={{width:user.imageSize,height:user.imageSize}} />
    </div>
    )
}
export default Image1;
