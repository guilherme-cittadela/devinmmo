export function API(url) {
  return {
    url: `https://mmo-games.p.rapidapi.com/${url}`,
    options: {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'mmo-games.p.rapidapi.com',
        'x-rapidapi-key': '4e45cbadfemsh5d63995c383d3e6p155566jsn1cfc45c2b053',
      },
    },
  };
}