import React from 'react'
import Typography from '@material-ui/core/Typography'
import Card from '../Card'

const images = [
    {
        image: '/StarryNightWhirl.png',
        buttonLabel: 'Starry Night Wave'
    },
    {
        image: '/greatwave.jpg',
        buttonLabel: 'The Great Wave'
    },

]

const images2 = [
    {
        image: '/StarryNightWh.png',
        buttonLabel: 'Starry Night Wave'
    },
    {
        image: '/Whiril.jpg',
        buttonLabel: 'Whirlpool Galaxy'
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
            </Typography>

            <Typography paragraph>
                To answer the question, on how, The Great Wave inspired van Gogh, which to the naked unprofessional eye, might look like two completely different pieces of art. The main point that experts speculate that inspired van Gogh is one of the most eye catching features of the painting - the whirls of flickering brushstrokes that can be seen all throughout the piece, and mostly predominant in the sky. These big blue whirls can be associated with the wave found in Hokusai's painting The Great Wave. Another big similarity between the two pieces of art, is that both share a similar colouring of rich blues.
            </Typography>

            <Card data={images}/>

            <Typography paragraph>
                The Whirlpool Galaxy of M51, was a sensation in the 19th century in Europe. It is believed that the Whirlpool Galaxy was an inspiration to van Gogh’s spiraling stars in Starry Night, painted 40+ years after the drawing of the Whirlpool Galaxy. The drawing, which had appeared in one of the best-selling books on French astronomy, is believed to have been either in the library of the asylum where van Gogh was staying or he simply saw it in Paris. The close resemblance between the Parson’s Whirlpool Galaxy and van Gogh’s drawing is presented in the images below.
            </Typography>

            <Card data={images2}/>
        </main>
    )
}

export default Inspiration