import axios from "axios";

export const url = "http://localhost:7070";
export default {
	menus: {
		get: () => axios.get(url + "/api/menus/nested").then(res => res),
		getSingle: id => axios.get(url + "/api/menus/" + id).then(res => res)
	},
	news: {
		get: () => axios.get(url + "/api/news").then(res => res)
	},
	regions: {
		get: () => axios.get(url + "/api/regions").then(res => res),
		getCrimes: () =>
			axios.get(url + "/api/regions/crimes-statistic").then(res => {
				return res;
			})
	},
	sliders: {
		getMain: () => axios.get(url + "/api/sliders?type=main").then(res => res),
		getLink: () => axios.get(url + "/api/sliders?type=link").then(res => res),
		getService: () =>
			axios.get(url + "/api/sliders?type=service").then(res => {
				return res;
			})
	}
};
