import React from 'react'
import Typography from '@material-ui/core/Typography'
import Card from '../Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

const images = [
    {
        image: '/greatwave.jpg',
        buttonLabel: 'The Great Wave'
    },
    {
        image: '/StarryNightWave.png',
        buttonLabel: 'Starry Night Whirl'
    },
]

const Inspiration = ({classes}) => {
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Typography paragraph>
                There have been a number of inspirations in van Gogh’s life that led to him drawing the Starry Night. We will discuss the biggest inspirations in the following section.
            </Typography>

            <Typography variant="h5">Hokusai’s The Great Wave</Typography>

            <Typography paragraph>
                The Great Wave by Hokusai and the Starry Night by Vincent van Gogh are two of the biggest masterpieces of the 19th century. The speculation that van Gogh was inspired by Hokusai’s painting is supported by a number of facts. First of all, van Gogh was a big admirer of Japanese print in general, having written a number of letters to his brother about japanese art, and how the art looks so alive, like you could feel it. Second of all, Vincent saw The Great Wave, some months before painting the Starry Night, and if we consider the speculation that The Great Wave was an actual inspiration for his own painting, it must’ve made a big impact on Vicent, to actually remember all those details months later down the path. Keep in mind that Vicent van Gogh’s love for this painting makes him one of the few people recorded to actually admire The Great Wave, before it being recognised as one of the best, if not the best,  piece of Japanese art.

                {/*<Card className={classes.root}>*/}
                {/*    <CardActionArea>*/}
                {/*        <CardMedia*/}
                {/*            component='img'*/}
                {/*            alt='First Romanian astronomy book written by Gh. Asachi and A. Marin'*/}
                {/*            image='/AsachiBook.png'*/}
                {/*            title='First Romanian astronomy book written by Gh. Asachi and A. Marin'*/}
                {/*            style={{maxWidth: '400px'}}*/}
                {/*        />*/}
                {/*        <CardContent>*/}
                {/*            <Typography variant="body2" color="textSecondary" component="p">*/}
                {/*                First Romanian astronomy book written by Gh. Asachi and A. Marin*/}
                {/*            </Typography>*/}
                {/*        </CardContent>*/}
                {/*    </CardActionArea>*/}
                {/*</Card>*/}
            </Typography>

            <Typography paragraph>
                To answer the question, on how, The Great Wave inspired van Gogh, which to the naked unprofessional eye, might look like two completely different pieces of art. The main point that experts speculate that inspired van Gogh is one of the most eye catching features of the painting - the whirls of flickering brushstrokes that can be seen all throughout the piece, and mostly predominant in the sky. These big blue whirls can be associated with the wave found in Hokusai's painting The Great Wave. Another big similarity between the two pieces of art, is that both share a similar colouring of rich blues.
            </Typography>

            <Card data={images}/>

            <Typography paragraph>
                1880 - Constantin Căpităneanu drew a precise map of the country using binoculars for the latitudes, two refracting telescopes, a chronograph and several precision clocks.
            </Typography>
        </main>
    )
}

export default Inspiration