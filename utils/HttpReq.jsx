export default async function HttpReq(url, params = {}, verb = 'get') {
  try {
    const response = await axios[verb.toLowerCase()](url, {
      params: params,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

/*
 * como usar? 
 * 1 - nao use. baixe o useFetch() no mesmo projeto e use ele ;)
 */