var express = require('express');
const covid = require('novelcovid');
const fs = require('fs');

exports.getData = (req, res) => {

    (async() => {

        let all = await covid.getAll();

        let sortedCountries = await covid.getCountry({ sort: 'cases' });
        sortedCountries.unshift({ Cases: `${all.cases}`, Deaths: `${all.deaths}`, Recovered: `${all.recovered}` });
        fs.writeFile("covid-19.json", JSON.stringify(sortedCountries), function(err) {
            if (err) {
                console.log(err)
                res.send({
                    status: 'fail',
                    data: {}
                });
            } else {
                res.send({
                    status: 'success',
                    code: 200,
                    author: 'Godwin L(alloygodwin1@gmail.com | https://www.linkedin.com/in/godwin-l-027570154/ ) ',
                    data: sortedCountries
                });
            }

        });

    })();

}