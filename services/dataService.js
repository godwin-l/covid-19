var express = require('express');
const fs = require('fs');
const axios = require('axios');
const { NovelCovid } = require('novelcovid');

const covid = new NovelCovid();


exports.getBase = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Expose-Headers', 'access-control-allow-origin');

    try {

        res.redirect('https://medium.com/@alloygodwin1/coronavirus-covid-19-sars-cov-2-tracker-api-v1-built-to-track-global-corona-virus-outbreak-1c9d7ef84755');

    } catch (err) {

        console.log(err);
        res.send({
            status: 'fail',
            data: "Something went wrong, Kindly check the end point you are accessing."
        });

    }

}


exports.getCountries = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Expose-Headers', 'access-control-allow-origin');

    try {

        country = req.query.country;
        sort = req.query.sortby;

        if (country != undefined && country != null && country != "") {
            countryBy = true;
        } else {
            countryBy = false;
        }

        if (sort != undefined && sort != null && sort != "") {
            sortBy = true;
        } else {
            sortBy = false;
        }


        (async() => {


            if (countryBy && sortBy) {
                sortedCountries = await covid.countries(country, sort);
            } else if (!countryBy && sortBy) {
                sortedCountries = await covid.countries(null, sort);
            } else if (countryBy && !sortBy) {
                sortedCountries = await covid.countries(country);
            } else {
                sortedCountries = await covid.countries();
            }


            fs.writeFile("countries.json", JSON.stringify(sortedCountries), function(err) {
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

    } catch (err) {

        console.log(err);
        res.send({
            status: 'fail',
            data: "Something went wrong, Kindly check the end point you are accessing."
        });

    }

}


exports.getYesterday = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Expose-Headers', 'access-control-allow-origin');


    try {


        country = req.query.country;
        sort = req.query.sortby;

        if (country != undefined && country != null && country != "") {
            countryBy = true;
        } else {
            countryBy = false;
        }

        if (sort != undefined && sort != null && sort != "") {
            sortBy = true;
        } else {
            sortBy = false;
        }



        (async() => {

            if (countryBy && sortBy) {
                sortedCountries = await covid.yesterday(country, sort);
            } else if (!countryBy && sortBy) {
                sortedCountries = await covid.yesterday(null, sort);
            } else if (countryBy && !sortBy) {
                sortedCountries = await covid.yesterday(country);
            } else {
                sortedCountries = await covid.yesterday();
            }

            fs.writeFile("yesterday.json", JSON.stringify(sortedCountries), function(err) {
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

    } catch (err) {

        console.log(err);
        res.send({
            status: 'fail',
            data: "Something went wrong, Kindly check the end point you are accessing."
        });

    }


}


exports.getAll = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Expose-Headers', 'access-control-allow-origin');



    try {

        (async() => {

            let all = await covid.all();


            fs.writeFile("all.json", JSON.stringify(all), function(err) {
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
                        data: all
                    });
                }

            });

        })();


    } catch (err) {

        console.log(err);
        res.send({
            status: 'fail',
            data: "Something went wrong, Kindly check the end point you are accessing."
        });

    }

}

exports.getCountryNames = (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Expose-Headers', 'access-control-allow-origin');

    try {

        (async() => {

            let countryNames = await covid.countryNames();

            fs.writeFile("countryNames.json", JSON.stringify(countryNames), function(err) {
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
                        data: countryNames
                    });
                }

            });

        })();


    } catch (err) {

        console.log(err);
        res.send({
            status: 'fail',
            data: "Something went wrong, Kindly check the end point you are accessing."
        });

    }

}

exports.getStates = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Expose-Headers', 'access-control-allow-origin');


    try {

        (async() => {

            let states = await covid.states();

            fs.writeFile("states.json", JSON.stringify(states), function(err) {
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
                        data: states
                    });
                }

            });

        })();


    } catch (err) {

        console.log(err);
        res.send({
            status: 'fail',
            data: "Something went wrong, Kindly check the end point you are accessing."
        });

    }

}


exports.getHistorical = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Expose-Headers', 'access-control-allow-origin');

    try {

        country = req.query.country;
        province = req.query.province;

        if (country != undefined && country != null && country != "") {
            countryBy = true;
        } else {
            countryBy = false;
        }

        if (province != undefined && province != null && province != "") {
            provinceBy = true;
        } else {
            provinceBy = false;
        }


        (async() => {


            if (countryBy && provinceBy) {
                sortedCountries = await covid.historical(null, country, province);
            } else if (!countryBy && provinceBy) {
                sortedCountries = await covid.historical(null, province);
            } else if (countryBy && !provinceBy) {
                sortedCountries = await covid.historical(null, country);
            } else {
                sortedCountries = await covid.historical();
            }


            fs.writeFile("historical.json", JSON.stringify(sortedCountries), function(err) {
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

    } catch (err) {

        console.log(err);
        res.send({
            status: 'fail',
            data: "Something went wrong, Kindly check the end point you are accessing."
        });

    }

}


exports.getAllhistorical = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Expose-Headers', 'access-control-allow-origin');


    try {

        (async() => {

            let allhistorical = await covid.historical(true);

            fs.writeFile("allhistorical.json", JSON.stringify(allhistorical), function(err) {
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
                        data: allhistorical
                    });
                }

            });

        })();


    } catch (err) {

        console.log(err);
        res.send({
            status: 'fail',
            data: "Something went wrong, Kindly check the end point you are accessing."
        });

    }

}


exports.IndiaData = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Expose-Headers', 'access-control-allow-origin');


    try {


        axios.get('https://api.covid19india.org/data.json')
            .then(function(response) {
                res.send({
                    status: 'success',
                    code: 200,
                    author: 'Godwin L(alloygodwin1@gmail.com | https://www.linkedin.com/in/godwin-l-027570154/ ) ',
                    data: response.data
                });
            })
            .catch(function(error) {
                console.log(error);
                res.send({
                    status: 'fail',
                    data: {}
                });
            })


    } catch (err) {

        console.log(err);
        res.send({
            status: 'fail',
            data: "Something went wrong, Kindly check the end point you are accessing."
        });

    }

}


exports.IndiaStateData = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Expose-Headers', 'access-control-allow-origin');


    try {


        axios.get('https://api.covid19india.org/state_district_wise.json')
            .then(function(response) {
                res.send({
                    status: 'success',
                    code: 200,
                    author: 'Godwin L(alloygodwin1@gmail.com | https://www.linkedin.com/in/godwin-l-027570154/ ) ',
                    data: response.data
                });
            })
            .catch(function(error) {
                console.log(error);
                res.send({
                    status: 'fail',
                    data: {}
                });
            })


    } catch (err) {

        console.log(err);
        res.send({
            status: 'fail',
            data: "Something went wrong, Kindly check the end point you are accessing."
        });

    }

}

exports.IndiaUpdatesData = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Expose-Headers', 'access-control-allow-origin');


    try {


        axios.get('https://api.covid19india.org/updatelog/log.json')
            .then(function(response) {
                res.send({
                    status: 'success',
                    code: 200,
                    author: 'Godwin L(alloygodwin1@gmail.com | https://www.linkedin.com/in/godwin-l-027570154/ ) ',
                    data: response.data
                });
            })
            .catch(function(error) {
                console.log(error);
                res.send({
                    status: 'fail',
                    data: {}
                });
            })


    } catch (err) {

        console.log(err);
        res.send({
            status: 'fail',
            data: "Something went wrong, Kindly check the end point you are accessing."
        });

    }

}


exports.IndiaStateTestData = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Expose-Headers', 'access-control-allow-origin');


    try {


        axios.get('https://api.covid19india.org/state_test_data.json')
            .then(function(response) {
                res.send({
                    status: 'success',
                    code: 200,
                    author: 'Godwin L(alloygodwin1@gmail.com | https://www.linkedin.com/in/godwin-l-027570154/ ) ',
                    data: response.data
                });
            })
            .catch(function(error) {
                console.log(error);
                res.send({
                    status: 'fail',
                    data: {}
                });
            })


    } catch (err) {

        console.log(err);
        res.send({
            status: 'fail',
            data: "Something went wrong, Kindly check the end point you are accessing."
        });

    }

}

exports.IndiaStateDailyData = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Expose-Headers', 'access-control-allow-origin');


    try {


        axios.get('https://api.covid19india.org/states_daily.json')
            .then(function(response) {
                res.send({
                    status: 'success',
                    code: 200,
                    author: 'Godwin L(alloygodwin1@gmail.com | https://www.linkedin.com/in/godwin-l-027570154/ ) ',
                    data: response.data
                });
            })
            .catch(function(error) {
                console.log(error);
                res.send({
                    status: 'fail',
                    data: {}
                });
            })


    } catch (err) {

        console.log(err);
        res.send({
            status: 'fail',
            data: "Something went wrong, Kindly check the end point you are accessing."
        });

    }

}