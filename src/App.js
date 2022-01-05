import React from 'react';
import { Country, Charts, Cards } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

import covidimage from './images/image.png';

export default class App extends React.Component {

        state = {
                data: {},
                country: '',
        }

        async componentDidMount() {
                const fetchedData = await fetchData();
                this.setState({ data: fetchedData });
        }

        handleCountryChange = async (country) => {
                const fetchedData = await fetchData(country);
                this.setState({ data: fetchedData, country: country });
                console.log(fetchedData);
        }

        render() { 
                const { data, country } = this.state;
                if (!data) {
                        return 'Loading . . . ';
                }
                return (
                        <div className={styles.container}>
                                <img src={covidimage} alt="Covid 19" className={styles.image} />
                                <Cards data={data} />
                                <Country handleCountryChange={this.handleCountryChange} />
                                <Charts data={data} country={country} />
                        </div>
                )
        }
}