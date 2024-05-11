import axios from "axios";

const baseUrl=axios.create({baseURL:"http://apicore.runasp.net"})// create axios instance to use it as baseurl

export default baseUrl;