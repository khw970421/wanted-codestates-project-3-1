import axios from 'axios';
import { useQuery } from 'react-query';
import { headers } from '../constants/index';

const getRepository = async (keyword, page) => {
  try {
    const response = await axios.get(
      `https://api.github.com/search/repositories?q=${keyword}&per_page=7&page=${page}`,
    );
    console.log(response);
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

const getIssue = async (owner, repo, page) => {
  try {
    const response = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}/issues`,
      {
        params: {
          page,
        },
        headers,
      },
    );
    const issueData = response.data;
    return issueData;
  } catch (error) {
    console.error(error);
  }
};

export const useRepoResults = (keyword, page) => {
  return useQuery(
    ['results', keyword, page],
    () => {
      return getRepository(keyword, page);
    },
    {
      enabled: !!keyword,
      keepPreviousData: true,
    },
  );
};

export const useIssueResults = (owner, repo, page) => {
  return useQuery(
    ['owner', owner, repo, page],
    () => {
      return getIssue(owner, repo, page);
    },
    {
      enabled: !!owner,
      keepPreviousData: true,
    },
  );
};
