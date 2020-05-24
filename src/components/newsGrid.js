import React from 'react';
import { Grid } from '@material-ui/core';
import { Component } from 'react';
import { Paper } from '@material-ui/core';
import NewsCard from './newsCard';
import China from './images/chineeseFlag.jpg';
import Russia from './images/russian-federation-flag__40491.1575323882.jpg';
import US from './images/the-united-states-flag-icon-free-download.jpg';
import EU from './images/Flag_of_Europe.svg';
import UK from './images/UK-flag-union-jack-1024x683.jpg';

class newsGrid extends Component {
    
    render(){
        const dummyData = [
            {
                country: 'China',
                photo: China,
                news: [
                    {
                        title: 'Trump cancels portion of border wall over rising costs'
                    },
                    {
                        title: 'Dr. Deborah Birx Puzzled by New Coronavirus Cases in Lockdown Cities like DC, LA, Chicago'
                    },
                    {
                        title: 'Trump cancels portion of border wall over rising costs'
                    },
                    {
                        title: 'Dr. Deborah Birx Puzzled by New Coronavirus Cases in Lockdown Cities like DC, LA, Chicago'
                    },
                    {
                        title: 'Trump cancels portion of border wall over rising costs'
                    },
                    {
                        title: 'Dr. Deborah Birx Puzzled by New Coronavirus Cases in Lockdown Cities like DC, LA, Chicago'
                    }
                ]
            },
            {
                country: 'Russia',
                photo: Russia,
                news: [
                    {
                        title: 'Putin signs law on remote online vote at federal level'
                    },
                    {
                        title: 'Russian embassy urges Bloomberg to apologize for disinformation about Putin’s ratings'
                    },
                    {
                        title: 'Russian embassy urges Bloomberg to apologize for disinformation about Putin’s ratings'
                    },
                    {
                        title: 'Russian embassy urges Bloomberg to apologize for disinformation about Putin’s ratings'
                    },
                    {
                        title: 'Russian embassy urges Bloomberg to apologize for disinformation about Putin’s ratings'
                    },
                    {
                        title: 'Russian embassy urges Bloomberg to apologize for disinformation about Putin’s ratings'
                    }
                ]
            },
            {
                country: 'United States',
                photo: US,
                news: [
                    {
                        title: 'Putin signs law on remote online vote at federal level'
                    },
                    {
                        title: 'Russian embassy urges Bloomberg to apologize for disinformation about Putin’s ratings'
                    },
                    {
                        title: 'Putin signs law on remote online vote at federal level'
                    },
                    {
                        title: 'Russian embassy urges Bloomberg to apologize for disinformation about Putin’s ratings'
                    },
                    {
                        title: 'Putin signs law on remote online vote at federal level'
                    },
                    {
                        title: 'Russian embassy urges Bloomberg to apologize for disinformation about Putin’s ratings'
                    }
                ]
            },
            {
                country: 'EU',
                photo: EU,
                news: [
                    {
                        title: 'France’s Finance Chief Is Ready to Break Things to Fix the EU'
                    },
                    {
                        title: 'Sweden has highest number of coronavirus deaths in the world per capita over the last seven days after shunning lockdowns - 6.08 Deaths Per Million Inhabitants Per Day'
                    },
                    {
                        title: 'France’s Finance Chief Is Ready to Break Things to Fix the EU'
                    },
                    {
                        title: 'Sweden has highest number of coronavirus deaths in the world per capita over the last seven days after shunning lockdowns - 6.08 Deaths Per Million Inhabitants Per Day'
                    },
                    {
                        title: 'France’s Finance Chief Is Ready to Break Things to Fix the EU'
                    },
                    {
                        title: 'Sweden has highest number of coronavirus deaths in the world per capita over the last seven days after shunning lockdowns - 6.08 Deaths Per Million Inhabitants Per Day'
                    }
                ]
            },
            {
                country: 'United Kingdom',
                photo: UK,
                news: [
                    {
                        title: 'Boris Johnson to cut Huawei from UK’s 5G network by 2023 as own party rebels & US steps up anti-Beijing pressure'
                    },
                    {
                        title: 'UK faces puppy shortage as demand for lockdown companions soars'
                    },
                    {
                        title: 'Boris Johnson to cut Huawei from UK’s 5G network by 2023 as own party rebels & US steps up anti-Beijing pressure'
                    },
                    {
                        title: 'UK faces puppy shortage as demand for lockdown companions soars'
                    },
                    {
                        title: 'Boris Johnson to cut Huawei from UK’s 5G network by 2023 as own party rebels & US steps up anti-Beijing pressure'
                    },
                    {
                        title: 'UK faces puppy shortage as demand for lockdown companions soars'
                    }
                ]
            }
        
        ];
        return ( dummyData.map(countryData => 
            (<Grid item>
                <NewsCard 
                    countryName={countryData.country} 
                    flag={countryData.photo}
                    newsData={countryData.news}
                />
                    
            </Grid> )
            )
        )
      }
}

export default newsGrid;