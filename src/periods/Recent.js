import React, {useState} from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Card from '../Card'

const prepostData = [{
  image: '/BarladPre.png',
  title: '',
  description: '',
  buttonLabel: 'Before'
  },
  {
  image: '/BarladPost.png',
  title: '',
  description: '',
  buttonLabel: 'After'
  }
]

const barladData = [{
  image: '/BarladV1.jpeg',
  title: "Barlad V1's position",
  description: 'The star can be observed between the two yellow lines. The north is upside of the picture, and the east is in the right side.',
  buttonLabel: 'Night sky'
},
{
  image: '/BarladV1Plot.jpeg',
  title: "",
  description: 'Phase plot for Barlad V1.',
  buttonLabel: 'Plot'
},
{
  image: '/BarladV1Chart.jpeg',
  title: "Barlad V1's position",
  description: 'The phase of the star Barlad V1 close to the Perseus constellation.',
  buttonLabel: 'Position'
}]

const Twentieth = ({classes}) => {
  const [galaxy, setGalaxy] = useState(0)
  const [barlad, setBarlad] = useState(0)
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Typography paragraph>
      March 2012 - extrasolar planets (planets that orbit the stars, other than the Sun) have been observed for the first time in Romania.
      </Typography>
      <Typography paragraph>
      2013 - In september 2013, at the Astronomical observer of the Museum Complex of Natural Sciences Galaţi two stars were discovered: Galati V1 and Galati V2. The team that discovered those stars was formed by: Ovidiu Tercu - the coordinator of the Astronomical Observer from Galați and Alexandru Dumitru, a member of “Calin Popovici” Astroclub Galati. At present, Alexandru Dumitru is a member of the council of administration of The Astronomical Society of Glasgow. The variable stars are of type Delta Scuti, the variation of their brightness being of the order of hours (the variation of the brightness is the result of some internal processes that take place inside the stars).
      </Typography>
      <Typography paragraph>
      2014 - In October 2014, the variable stars Galati V3, Galati V4 and Galati V5 were discovered, by the team consisting of: Ovidiu Tercu, Vlad Tudor - PhD in Astrophysics at Curtin University from Australia, being, at the same time, a member of the Astroclub "Călin Popovici" from Galaţi and Alexandru Dumitriu. Galati V4 and Galati V5 are variable stars of type EW (W Ursae Majoris) also called binary stars in contact. W Ursae Majoris type variable stars are systems consisting of two stars orbiting the common center of mass. These binary system stars have surfaces in contact and deform each other, having ellipsoidal shapes due to attraction gravitational and fast rotation. At the same time, these stars eclipse each other, which determines the existence of a variation of the brightness of the binary system.These are eclipse systems which have orbital periods of less than one day. Discovery of variable stars of type EW (W Ursae Majoris) was, at that time, a premiere for Romanian astronomy.
      </Typography>
      <Typography paragraph>
      2015- A new bright red, from a galaxy located about 21 million light-years from Earth, was discovered by specialists at the Barlad Astronomical Observatory and registered at the US Central Bureau of Astronomical Telegrams, being the biggest discovery in this field in Romania.

    <Card style={classes.root} {...prepostData[galaxy]} />
    
    <div>
    {prepostData.map( (item, idx)=> 
      <Button variant="contained" color="primary" onClick={()=> setGalaxy(idx)}>
        {item.buttonLabel}
      </Button>
    )}
    </div>
      

      </Typography>

      <Typography paragraph>
      2016-2017- Between October 2016 and November 2017, the variable stars Galati V6 and Galati V8 – V13, by the team formed by: Ovidiu Tercu and Andrei-Marian Stoian, aged only 16 years old, member of the "Călin Popovici" Astroclub from Galaţi. In order to discover these variable stars, there were 28 performed nights of astronomical observations (photometric survey) in the following time periods: July - November 2012, October - November 2014 and October 2016. The Galati V6 binary system has a magnitude variation between 12.72 - 12.81 in V, and the period is 0.386833 days (9.2840 hours) and is a rotating ellipsoidal variable star (ELL). This binary system was discovered in 2017 in the constellation Crater, based on observations made previous (photometric survey). Rotating ellipsoidal variable stars are extrinsic variable stars, more little known, and are binary systems, close, with ellipsoidal components, but without eclipses. The amplitude of these systems does not exceed 0.1 magnitudes in V. 
      This was the first time in the history of Romanian astronomy when a variable star rotating ellipsoids(ELL) was found.
      The astronomical observer from Galati:

      <Card style={classes.root} title='Galati Observatory' image='/GalatiObservatory.jpeg' style={{maxWidth: '400px'}}/>
      
      </Typography>

      <Typography paragraph>
      2019 - The discovery of variable star Barlad V1 was a discovery by accident since The Astronomical Observatory from Barlad was testing, for the first time, the equipment of the center and has chosen, randomly, a variable star that was close to Perseus. Tests were conducted in order to see if the equipment in the astronomical observatory can detect variable or even exoplanet stars. The discovery was made on the night of 5 december 2019, and was made oficial only on 30 december of the same year.
      
      <Card style={classes.root} {...barladData[barlad]} />
      {barladData.map((item, idx) =>
        <Button variant="contained" color="primary" onClick={()=> setBarlad(idx)}>
          {item.buttonLabel}
        </Button>
      )}
      </Typography>
    </main>
  )
}

export default Twentieth
