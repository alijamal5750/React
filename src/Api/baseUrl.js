import axios from "axios";

const baseUrl=axios.create({baseURL:"https://apicore.runasp.net"})// create axios instance to use it as baseurl

export default baseUrl;
