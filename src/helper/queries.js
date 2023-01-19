const GLOBAL_DATA_QUERY = `{
    globalTotal {
        affectedCountries
        tests
        cases
        todayCases
        deaths
        todayDeaths
        recovered
        active
        critical
        casesPerOneMillion
        deathsPerOneMillion
        testsPerOneMillion
        activePerOneMillion
        recoveredPerOneMillion
        criticalPerOneMillion
        updated
        population
    }
}`;

const COUNTRY_DATA_QUERY = `{
    countries {
        country
        countryInfo {
            _id
            lat
            long
            flag
            iso3
            iso2
        }
        continent
        result {
            population
            tests
            cases
            todayCases
            deaths
            todayDeaths
            recovered
            active
            critical
        }
    } 
}`

// Once more queries are added, remove the eslint disable text
// eslint-disable-next-line import/prefer-default-export
export { GLOBAL_DATA_QUERY, COUNTRY_DATA_QUERY };
