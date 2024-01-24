/* eslint-disable import/no-unresolved */
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
const COUNTRY_DATA_QUERY = `{
    countries(sortBy: cases) {
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
export {
  GLOBAL_DATA_QUERY, COUNTRY_DATA_QUERY, ALL_COUNTRY_DATA_QUERY, GET_COUNTRY,
};
