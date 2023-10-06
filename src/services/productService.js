const baseURL = "http://api.searchspring.net/api/search/search.json";

export async function fetchData(searchQuery, pageNum) {
  try {
    const response = await fetch(baseURL + '?' + new URLSearchParams({
      page: pageNum,
      q: searchQuery,
      resultsFormat: 'native',
      siteId: 'scmq7n'
    }));
    const result = await response.json();
    console.log("Success", result)
    // displayResults(result)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // return {
    //   searchResults: result
    // }
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
}

// export function displayResults(fetchResult) {
//     // console.log('display', fetchResult.results)
//     let products = fetchResult.results
//     console.log('products', products[1].name)
//     let prodInfo = [];
//     for(let i= 0; i < products; i++) {
//       let prodResult = {
//         prodName: products[i].name,
//         prodPrice: products[i].price,
//         prodImg: products[i].thumbnailImageUrl,
//         prodMSPR: products[i].msrp
//       }
//       console.log('prodResult', prodResult)
//       prodInfo.push(prodResult);
//       console.log('still in loop', prodInfo)
//     }
//     console.log('final prodArray', prodInfo)
//     prodInfo
// }