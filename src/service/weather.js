'use scrict'

const service = require('../service/weatherService');

exports.getWeather = async (req, res, next) => {
    try {
        var data = await service.getWeather();
        res.status(200).json(data);
    } catch (e) {
        res.status(500).json({
            message: "Falha ao recuperar devices."
        });
    }
};