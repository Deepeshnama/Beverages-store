import axios from "axios";

const URL = "https://foodapi-iu1v.onrender.com/app/bevr";

const getIce = async () => {
  const res = await axios.get(URL);
  return res;
};

export default getIce;
