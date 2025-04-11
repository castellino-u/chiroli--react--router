import { FC } from "react"

import style from './CoursesCard.module.css'
import { ICourses } from "../../types/ICourses"
import { useNavigate } from "react-router-dom"


type Props = {
    curso: ICourses
}

const CoursesCard: FC<Props> = ({curso}) => {
    const countAlumnos = curso.estudiantes.length;
    const navigate = useNavigate();
    
    const handleClick = (id: number) => {
      navigate(`/estudiantes/${id}`);
    };
  return (
    <div key={curso.id} className={style.card}>
    <h4>{curso.nombre}</h4>
    <p>Cantidad de alumnos: {countAlumnos}</p>
    <button onClick={() => {
        if(curso.id) handleClick(curso.id)
    }} className={style.btnCustom}>Ver participantes</button>
  </div>

  )
}


export default CoursesCard