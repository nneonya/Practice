//Напишите функцию, которая одновременно
//извлекает данные из нескольких API и
//возвращает объединенный результат, используя Promises

function fetchData(apiUrl) {
    return new Promise((resolve, reject) => {
      fetch(apiUrl)
        .then(response => {
          return response.json();
        })
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error); 
        });
    });
  }
  
  function fetchAllData(apiUrls) {
    let promises = apiUrls.map(apiUrl => fetchData(apiUrl));
    return Promise.all(promises); 
  }