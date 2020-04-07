var express = require('express');
const covid = require('novelcovid');
const fs = require('fs');

exports.getData = (req, res) => {

    (async() => {

        let all = await covid.getAll();

        let sortedCountries = await covid.getCountry({ sort: 'cases' });
        sortedCountries.unshift({ Cases: `${all.cases}`, todayCases: `${all.todayCases}`, Deaths: `${all.deaths}`, todayDeaths: `${all.todayDeaths}`, Recovered: `${all.recovered}`, active: `${all.active}`, critical: `${all.critical}`, affectedCountries: `${all.affectedCountries}`, casesPerOneMillion: `${all.casesPerOneMillion}`, deathsPerOneMillion: `${all.deathsPerOneMillion}`, tests: `${all.tests}`, testsPerOneMillion: `${all.testsPerOneMillion}` });
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