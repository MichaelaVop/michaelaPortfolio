import { FC } from "react";
import { ProjectProps } from "../../customTypes/myTypes";
import './Modal.css'


const Modal: FC<ProjectProps> = ( project ) => {

    

    return (
        <>
            <div className='modalBackground'>
                <div className='modalContainer'>
                    <button
                                onClick={project.hide}
                        >
                            &times;
                    </button>

                    <div className="modalHeader">
                        <h3 className="modalTitle">
                            {project.title}
                        </h3>
                    </div>

                    <div className="modalBody">
                        <p className="modalPar">
                                {project.desc}
                        </p>
                        <p className="modalPar techDesc">
                                {project.techDesc}
                        </p>
                     </div>
                    
                </div>
        
            </div>
        </>
    )
}


export default Modal;