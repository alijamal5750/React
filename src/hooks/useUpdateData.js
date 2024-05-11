import baseUrl from "../Api/baseUrl";


const useUpdatetDataWithImageToken=async(url,params)=>{
    const config={ //params is fields in database
        headers:{"Content-Type":"multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`} // for image
    }
    const res=await baseUrl.put(url,params,config);
    return res;
}

const useUpdateDataToken=async(url,params)=>{
    const config={ //params is fields in database
        headers:{Authorization: `Bearer ${localStorage.getItem("token")}`} 
    }
    const res=await baseUrl.put(url,params,config);
    return res;
}

// eidt without token
const useUpdatetDataWithImage=async(url,params)=>{
    const config={ //params is fields in database
        headers:{"Content-Type":"multipart/form-data"} // for image
    }
    const res=await baseUrl.put(url,params,config);
    return res;
}

const useUpdateData=async(url,params)=>{
  
    const res=await baseUrl.put(url,params);
    return res;
}

export { useUpdatetDataWithImage,useUpdateData,useUpdatetDataWithImageToken,useUpdateDataToken};



