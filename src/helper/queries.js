import { gql } from 'graphql-request';

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

const ALL_COUNTRY_DATA_QUERY = `{
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
}`;

const COUNTRY_DATA_QUERY = `{
    country(name: NAME, filterBy: yesterday) {
        country
        countryInfo {
            _id
            long
            flag
            iso2
            iso3
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
            casesPerOneMillion
            deathsPerOneMillion
            testsPerOneMillion
            activePerOneMillion
            recoveredPerOneMillion
            criticalPerOneMillion
            updated
        }
    }
}`;

const GET_COUNTRY = gql`
query country($code: String!){
    country(name: $code, filterBy: yesterday) {
        country
        countryInfo {
            flag
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
}
`

// Once more queries are added, remove the eslint disable text
// eslint-disable-next-line import/prefer-default-export
export {
  GLOBAL_DATA_QUERY, COUNTRY_DATA_QUERY, ALL_COUNTRY_DATA_QUERY, GET_COUNTRY,
};
