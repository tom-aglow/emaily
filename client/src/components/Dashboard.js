import React from  'react'
import {Link} from 'react-router-dom'
import SurveyList from './surveys/SurveyList'

const Dashboard = () => {
	return (
		<div>
			<SurveyList />
			<Link className="button is-large is-primary add-new-survey" to="/surveys/new">
				<span className="icon is-large">
					<i className="fa fa-plus"></i>
				</span>
			</Link>
		</div>
	)
}

export default Dashboard;
