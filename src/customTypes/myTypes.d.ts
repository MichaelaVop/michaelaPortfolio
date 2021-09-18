
declare module 'myTypes' {
    type ProjectsType = {
       
        title: string,
        desc: string,
        techDesc: string,
        hide: function,
    }


    interface ProjectProps {
        project: ProjectsType
    }
}

export {
    ProjectsType,
    ProjectProps,
}

