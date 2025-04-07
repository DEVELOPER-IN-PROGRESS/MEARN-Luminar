import { commonApi}  from './commonApi.js';
import { serverurl }  from './serverurl.js'

export const videoAddApi =  async(reqBody) => {
	return await commonApi('POST' , `${serverurl}/videos` , reqBody)
}

export const allVideosApi = async () => {
	return await commonApi('GET', `${serverurl}/videos`)
}

export const deleteVideoApi = async(id) => {
	return await commonApi('DELETE',`${serverurl}/videos/${id}`, {})
}

export const addToWatchHistory = async(reqBody) => {
	return await commonApi('POST', `${serverurl}/history`, reqBody)
}

export const getAllHistory = async() =>{
	return await commonApi('GET',`${serverurl}/history`)
}

export const deleteVideoFromHistory = async(index) => {
	return await commonApi('DELETE',`${serverurl}/history/${index}`,{})
}

//api to add new cateogry
export const addCategoryApi = async(reqBody) => {
	return await commonApi("POST",`${serverurl}/category`,reqBody)
}

export const getAllCategoryApi = async () => {
	return await commonApi('GET',`${serverurl}/category`)
}

//delete a category
export const deleteCategoryApi = async(id) => {
	return await commonApi('DELETE',`${serverurl}/category/${id}`,{})
}

//api to update a category
export const updateCategoryApi = async(id, reqBody) => {
	return await commonApi('PUT',`${serverurl}/category/${id}`, reqBody )
}