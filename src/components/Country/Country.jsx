import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './Country.module.css';
import { countries } from '../../api';

const Country = ({ handleCountryChange }) => {

        const [fetchedCountries, setFetchCountries] = useState([]);

        useEffect(() => {
                const fetchApi = async () => {
                        setFetchCountries(await countries());
                }

                fetchApi();
        }, [setFetchCountries]);

        return (
                <div className={styles.container}>
                        <FormControl className={styles.formControl}>
                                <NativeSelect defaultValue="" onChange={(event) => handleCountryChange(event.target.value)}>
                                        <option value="">Global</option>
                                        { fetchedCountries.map((country, index) => <option key={index} value={country.toLowerCase()}>{country}</option>) }
                                </NativeSelect>
                        </FormControl>
                </div>
        )
}

export default Country
