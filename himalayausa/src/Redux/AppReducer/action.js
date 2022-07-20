import axios from "axios";
import { FETCH_DATA_FAILIURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from "./actionTypes";

export const getproduct = () => (dispatch) => {
    // console.log(getproduct)
    dispatch({type: FETCH_DATA_REQUEST})
    return axios 
    .get("https://my-himalayausa-project.herokuapp.com/Products")
    .then((r) => {
        console.log(r) 
            dispatch({type: FETCH_DATA_SUCCESS , payload : r.data})
    }).catch(()=>{
             dispatch({type: FETCH_DATA_FAILIURE})
    })
}