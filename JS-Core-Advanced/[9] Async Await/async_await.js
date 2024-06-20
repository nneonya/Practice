//Напишите функцию, которая параллельно
//загружает данные с нескольких удаленных
//серверов, используя Promise.all в сочетании с
//async/await.

async function fetchData(urls) {
    const promises = urls.map(async (url) => {
        const response = await fetch(url);
        return response.json();
    });

    const results = await Promise.all(promises);

    return results;
}


