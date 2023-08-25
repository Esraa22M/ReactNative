import axios from "axios";
const authInstance = axios.create({
  baseURL: "https://api.github.com/",
  timeout: 1000,
});
export const getUserInfo = async (url) => {
  try {
    const { data } = await authInstance(url);
    return data;
  } catch (err) {
    console.log(err);
  }
};
