import baseUrl from "../Api/baseUrl";

const useGetData=async(url,params)=>{
    const res=await baseUrl.get(url,params);
    return res.data;
}

const useGetDataToken=async(url,params)=>{// get only required url and config withour params if token exist
    var User=""
    if(localStorage.getItem("userinfo") !==null)
    User = JSON.parse(localStorage.getItem("userinfo"))

    const config={ //params is fields in database
        headers:{Authorization: `Bearer ${User.token}`} 
    }
    const res=await baseUrl.get(url,config);
    return res.data;
}

export {useGetData,useGetDataToken};



