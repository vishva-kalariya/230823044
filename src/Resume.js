import './Resume.css';
function Resume(props) {
  return (
    <>
        {/* header */}
        
            <div className="header">
                <hr></hr>
                <h1 style={{"fontSize":"40px"}}>{props.title}</h1>
                <p>New Delhi,India110225| +91550668009 agraval@sample.in</p>
            </div>
            <div className='main'>
                <div><hr className='hr'></hr></div>
                <div>
                    <h3 className='h3'>Professional Summary</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab minima cumque repudiandae laborum molestiae quia neque tempore a aliquam quidem beatae sapiente quasi earum quae, ut commodi eaque! Repudiandae exercitationem alias laudantium labore maxime molestiae cupiditate veniam ullam non atque? Optio voluptatem et perferendis tempore minima aspernatur nemo quia ipsum?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab minima cumque repudiandae laborum molestiae quia neque tempore a aliquam quidem beatae sapiente quasi earum quae, ut commodi eaque! Repudiandae exercitationem alias laudantium labore maxime molestiae cupiditate veniam ullam non atque? Optio voluptatem et perferendis tempore minima aspernatur nemo quia ipsum?
                    </p>
                    
                </div>
                <div><hr className='hr'></hr></div>
                {/* second part */}
                <div>
                    <h3 className='h3'>Core Qualifications</h3>
                    <ul className='ul'>
                        <li>Lorem ipsum dolor sit</li>
                        <li>Lorem ipsum dolor</li>
                        <li>labore maxime</li>
                        <li>voluptatem</li>
                    </ul>
                    <ul className='ul1'>
                        <li>voluptatem et perferendis</li>
                        <li>axime molestiae cupiditate</li>
                        <li>minima cumque repudiandae</li>
                        <li>Repudiandae exercitationem</li>
                    </ul>
                </div>
                {/* Third part */}
                <div><hr className='hr'></hr></div>
                <div>
                    <h3 className='h3'>Experience</h3>
                    <p className='p'>nbkdsjcnf kdsnkdsnvkl</p>
                    <p className='p'>lijhnlfkd snf</p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, alias.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, alias.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, alias.</li>
                    </ul>
                </div>
                {/*  */}
               
               
                <div>
                    
                    <p className='p'>nbkdsjcnf kdsnkdsnvkl</p>
                    <p className='p'>lijhnlfkd snf</p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, alias.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, alias.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, alias.</li>
                    </ul>
                </div>
                {/*  */}
                <div>
                <p className='p'>nbkdsjcnf kdsnkdsnvkl</p>
                    <p className='p'>lijhnlfkd snf</p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, alias.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, alias.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, alias.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, alias.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, alias.</li>
                    </ul>
                </div>
                {/* forth paRT */}
                <div><hr className='hr'></hr></div>
                <div>
                    <h3 className='h3'>Educaton</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, alias.</p>
                    <p>Lorem ipsum dolor sit amet </p>
                </div>
            </div>
    </>       
        
  );
}

export default Resume;
