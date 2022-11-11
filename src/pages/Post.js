import '../styles/Post.css'

export default function Post(){
    return(
        <>
        <div className="container" style={{margin:' 50px auto'}}>
          <h1>Subedar Mr...</h1>
          <div className='sec-container'>
            <div className='img-name'>
            <img src='https://static.toiimg.com/thumb/msid-49078122,imgsize-13212,width-400,resizemode-4/49078122.jpg' alt=''   className="blog-img"/>
        
             <h3 className='details place'>Place:</h3>
            </div>
            <div className='details-para'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed dui laoreet, facilisis felis sit amet, consectetur est. Maecenas mattis nunc purus, eget faucibus enim vulputate quis. Proin at eros quis nisl egestas hendrerit non a tellus. Morbi porta tincidunt sem, sed maximus nisi luctus eget. In a volutpat est, ac facilisis orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce quis metus arcu. Donec elementum dolor vehicula purus finibus venenatis. Vivamus sit amet lacinia turpis. Quisque vel nisi ac nulla dictum viverra quis et elit. Nulla nec vehicula urna. Curabitur ac erat eu purus placerat scelerisque.</p>
            </div>
          </div>
        </div>
        </>
    )
}

