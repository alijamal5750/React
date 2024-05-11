import baseUrl from "../Api/baseUrl";


const useInsertDataWithImageToken=async(url,params)=>{
    const config={ //params is fields in database
        headers:{"Content-Type":"multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`} // for image
    }
    const res=await baseUrl.post(url,params,config);
    return res;
}

const useInsertDataToken=async(url,params)=>{
    const config={ //params is fields in database
        headers:{Authorization: `Bearer ${localStorage.getItem("token")}`} 
    }
    const res=await baseUrl.post(url,params,config);
    return res;
}

// With image but without token
const useInsertDataWithImage=async(url,params)=>{
    const config={ //params is fields in database
        headers:{"Content-Type":"multipart/form-data"}// for images and files
    }
    const res=await baseUrl.post(url,params,config);
    return res;
}

// wtihout image and without token
const useInsertData=async(url,params)=>{
    const res=await baseUrl.post(url,params);
    return res;
}

export {useInsertData,useInsertDataWithImage, useInsertDataWithImageToken,useInsertDataToken};



