import axios, { AxiosRequestConfig } from "axios";

import { transformMembers } from '../types/Members'

export const fetchMembers = async () => {

  var config: AxiosRequestConfig = {
    method: 'get',
    url: 'https://cisc322-website.herokuapp.com/api/members',
    params: {
      populate: '*'
    }
  };

  const response = await axios.request(config)

  if (!response) {
    console.error('response was null!')
    return
  }

  return transformMembers(response);
};