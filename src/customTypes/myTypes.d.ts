
declare module 'myTypes' {
    type ProjectsType = {
       
        title: string,
        desc: string,
        techDesc: string,
    }


    interface ProjectProps {
        project: ProjectsType
    }
}

export {
    ProjectsType,
    ProjectProps,
}

