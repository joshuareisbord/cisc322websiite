import axios from "axios";

export const fetchAssignments = async (id?: Number) => {
  const { data } = await axios.get(
    `https://cisc322-website.herokuapp.com/api/assignments/${id ? id : ""}`
  );
  return data;
};
