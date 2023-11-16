const baseUrl = 'http://localhost:3030/jsonstore/houses';

export const getAll = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();

    const data = Object.values(result);

    return data;
};

export const create = async (data) => {
    const body = {
        _id: data._id,
        title: data.title,
        pricePerMonth: data.pricePerMonth,
        description: data.description,
        category: data.category,
        imageUrl: data.imageUrl,
        address: data.address
    };

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })

    const result = await response.json();
    console.log(result);

    return result;
};

export const getOne = async (houseId) => {
    const response = await fetch(`${baseUrl}/${houseId}`);
    const result = await response.json();

    return result;
}

export const remove = async (houseId) => {
    const response = await fetch(`${baseUrl}/${houseId}`, {
        method: 'DELETE'
    });
    
    const result = await response.json();

    return result;
}