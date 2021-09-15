

const Portfolio = () => {

    
    return (
        
        <div>
            <div className="HL2">
            <h2>Portfolio</h2>
            </div>

            <div className='projectContainer'>
                <img src="../../../img/mireddit.jpg" alt="MiReddit Variation" className="projectImg" />
                <h3 className="projectHl">MiReddit Variation</h3>
                <p className="projectText">
                    Full-stack web application following the basis of Reddit.com. 
                    The app allows users to create an account, create, edit, 
                    and delete a post, and vote either like or dislike 
                    for each post.',
                </p>
                <p className="projectTechDsc">
                    React, TypeScript, Express.js, Next.js
                </p>
            </div>

            <div className='projectContainer'>
                <img src="../../../img/pianko.jpg" alt="Piano" className="projectImg" />
                <h3 className="projectHl">Piano</h3>
                <p className="projectText">
                    Full-stack web application following the basis of Reddit.com. 
                    The app allows users to create an account, create, edit, 
                    and delete a post, and vote either like or dislike 
                    for each post.',
                </p>
                <p className="projectTechDsc">
                    React, TypeScript, Express.js, Next.js
                </p>
            </div>

            <div className='projectContainer'>
                <img src="../../../img/rockPaperScissors.jpg" alt="Rock Paper Scissor" className="projectImg" />
                <h3 className="projectHl">Play Rock Paper Scissors</h3>
                <p className="projectText">
                    Full-stack web application following the basis of Reddit.com. 
                    The app allows users to create an account, create, edit, 
                    and delete a post, and vote either like or dislike 
                    for each post.',
                </p>
                <p className="projectTechDsc">
                    React, TypeScript, Express.js, Next.js
                </p>
            </div>
        </div>
    )
}

export default Portfolio