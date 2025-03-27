import { commonApi}  from './commonApi.js';
import { serverurl }  from './serverurl.js'

export const videoAddApi =  async(reqBody) => {
	return await commonApi('POST' , `${serverurl}/videos` , reqBody)
}

export const allVideosApi = async () => {
	return await commonApi('GET', `${serverurl}/videos`)
}