

export const getImagen = async () => { 
    try{
        const apiKey = 'ruKxqzVdhxchaOgAAYOTeDgvB3MMBtVT';
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await respuesta.json();
        const {url} = data.images.original; // equivalent to: const url = data.images.original.url;

        return url;

    }
    catch(error) {
        // console.error(error);
        return 'No existe';
    }
};

// getImagen();