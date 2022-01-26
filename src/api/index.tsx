import axios, { AxiosRequestConfig } from "axios";

import { transformProjects } from "../types/Projects";

export const fetchAssignments = async (id?: Number) => {

  var config: AxiosRequestConfig = {
    method: 'get',
    url: 'https://cisc322-website.herokuapp.com/api/assignments',
    params: {
      populate: '*'
    }
  };

  const response = await axios.request(config)

  if (!response) {
    console.error('response was null!')
    return
  }

  return transformProjects(response);
};
