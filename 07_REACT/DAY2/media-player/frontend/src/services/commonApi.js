import axios from 'axios'

export const commonApi = async  (httpMethod, url , reqBody ) => {
	const reqConfig = { method: httpMethod ,  url , data: reqBody ,
				headers:{"Content-Type":"application/json" } // means there is no uploaded content
			}

	return  await axios(reqConfig) //promise based library
				.then( (res) => { return res })
				.catch( (err) =>  { return err })
}
