import baseUrl from "../Api/baseUrl";

const useDeleteData=async(url,params)=>{
    const res=await baseUrl.delete(url,params);
    return res.data;
}

const useDeleteDataToken=async(url,params)=>{
    const config={ //params is fields in database
        headers:{Authorization: `Bearer ${localStorage.getItem("token")}`} 
    }
    const res=await baseUrl.delete(url,config,params);
    return res.data;
}

export {useDeleteData,useDeleteDataToken}