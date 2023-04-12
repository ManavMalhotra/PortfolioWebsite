import Card from 'react-bootstrap/Card';
import './SkillCard.css'

const SkillCard = ({skill})=>{

	return(
			<div className="card-container">
			<div className="card-img" >
				<img src={skill.icon} />
      			<div className="card-body">
        			{skill.name}
      			</div>
      		</div>

    		</div>

		)
}

export default SkillCard