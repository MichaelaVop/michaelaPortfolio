import { FC } from "react";
import { ProjectProps } from "../customTypes/myTypes";

const Modal: FC<ProjectProps> = ( project ) => {

    return (
        <>
            <div className='modalBackground'>
                <div className='modalContainer'>
                    <div className="modalHeader">
                        <h3 className="modalTitle">
                            {project.title}
                        </h3>
                        <button
                                // onClick={() => {
                                // setOpenModal(false);
                                // }}
                        >
                            &times;
                        </button>
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