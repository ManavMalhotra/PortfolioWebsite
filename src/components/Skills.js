import { Link } from 'react-router-dom';
import {SkillData} from "../utils/SkillData"
import "./Skills.css" 
import SkillCard from "./SkillCard"



const Skills = () =>{

  return (
    <div className="skills" id="skills">
    	<h1>SKILLS</h1>
      <div className="skill-container">
       {
       	SkillData.map((item)=>{
       		return(
       				<div className="skill-section">
       					<div className="skill-section-title">
       					{item.type}
       					</div>
       					<div className="skills-list">
       					{item.list.map((skill)=>{
       						return(
       							<SkillCard skill={skill} />

       						)
       					})}
       					</div>
       				</div>
       			
       			)
       	})
       }
      </div>
	</div>


)


}

export default Skills