async function buscarClima(cidade) {
    try {
        // Passo 1: Transforma o nome da cidade em Latitude/Longitude
        const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${cidade}&count=1&language=pt&format=json`;
        const geoRes = await fetch(geoUrl);
        const geoDados = await geoRes.json();

        if (!geoDados.results) return null;

        const { latitude, longitude, name } = geoDados.results[0];

        // Passo 2: Usa as coordenadas para pegar a temperatura real
        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
        const weatherRes = await fetch(weatherUrl);
        const weatherDados = await weatherRes.json();

        return {
            cidade: name,
            temp: weatherDados.current_weather.temperature
        };
    } catch (erro) {
        console.error("Erro na API:", erro);
        return null;
    }
}