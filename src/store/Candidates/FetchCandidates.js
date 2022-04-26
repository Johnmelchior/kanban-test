import axios from "axios";
import { fetchCadidateRequest, fetchCandidateSuccess, fetchCandidateError } from './CandidateAction';


const fetchCandidates = () => {
	return (dispatch) => {
		dispatch(fetchCadidateRequest());

		axios.get('https://randomuser.me/api/?results=20')
			.then(res => {

				for (var i = 0; i < res.data.results.length; i++) {
					if (i === 1 || i === 3) {
						res.data.results[i].laneId = "lane-2";
					}else{
						res.data.results[i].laneId = "lane-1";
					}
				}
				// for (let result of res.data.results) {
				// 	result.laneId = "lane-1";
				// }
				dispatch(fetchCandidateSuccess(res.data.results));
			})
			.catch(err => {
				dispatch(fetchCandidateError(err))
			});
	}
}

export default fetchCandidates;