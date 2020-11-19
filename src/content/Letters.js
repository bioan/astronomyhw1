import React from 'react'
import Card from '../Card'
import Typography from '@material-ui/core/Typography'

const letters = [
  {
    description: '782nd letter',
    title: '',
    image: '/letter1.png',
    buttonLabel: '1st'
  },
  {
    description: '783rd letter',
    title: '',
    image: '/letter2.png',
    buttonLabel: '2nd'
  },
  {
    description: '784th letter',
    title: '',
    image: '/letter3.png',
    buttonLabel: '3rd'
  },
  {
    description: '805th letter',
    title: '',
    image: '/letter4.png',
    buttonLabel: '4th'
  },
  {
    description: '806th letter',
    title: '',
    image: '/letter5.png',
    buttonLabel: '5th'
  },
  {
  description: '813th letter',
  title: '',
  image: '/letters.png',
  buttonLabel: '6th'
  },
  {
    description: '816th letter',
    title: '',
    image: '/letter7.png',
    buttonLabel: '7th'
  },
  {
    description: '822nd letter',
    title: '',
    image: '/letter8.png',
    buttonLabel: '8th'
  },
]
const Letters = ({classes}) => {
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Typography paragraph>
        1.To Theo van Gogh. Saint-Rémy-de-Provence, on or about Tuesday, 18 June 1889. (letter 782)
        This is the first time when Vincent van Gogh refers to a starry night in his letters, translated as: “At last I have a landscape with olive trees, and also a new study of a starry sky.”. 
      </Typography>
      <Typography paragraph>
        2. To Theo van Gogh. Saint-Rémy-de-Provence, Tuesday, 25 June 1889. (letter 783)
        This is the time when Vincent van Gogh sends “Starry Night” along with 11 other paintings to his brother. (Starry night F 612 / JH 1731 - the painting we are discussing).
      </Typography>
    <Typography paragraph>
        3. To Theo van Gogh. Saint-Rémy-de-Provence, Tuesday, 2 July 1889. (letter 784)
        Among with this letter, Vincent van Gogh sends a follow up to his previous paintings, including Starry night F 1540 / JH 1732
    </Typography>
    <Typography paragraph>
      4. To Theo van Gogh. Saint-Rémy-de-Provence, on or about Friday, 20 September 1889. (letter 805)
      Vincent van Gogh sends a “Night study” canvas with portrait, but he also says that: “The first four canvases are studies that don’t have the effect of an ensemble like the others.” And since the “Night study” is in the first four provided in the letter, it means that, from what we can gather, he does not put that much effort into it.
    </Typography>
    <Typography paragraph>
      5. To Theo van Gogh. Saint-Rémy-de-Provence, Saturday, 28 September 1889. (letter 806)
      Vincent van Gogh does mention a study of the “Night effect”. That means that he does give a bit more attention to the night study presented in the previous letter.
    </Typography>
    <Typography paragraph>
      6. Theo van Gogh to Vincent van Gogh. Paris, Tuesday, 22 October 1889. (letter 813)
      - letters in which he defended Starry night against his brother (1)
      “I clearly sense what preoccupies you in the new canvases like the village in the moonlight”. Theo van Gogh reassures Vincent van Gogh that he sees his interest about the village in the moonlight, which can be reinterpreted as the painting we are talking about.
    </Typography>
    <Typography paragraph>
      7. To Theo van Gogh. Saint-Rémy-de-Provence, on or about Sunday, 3 November 1889. (letter 816) - letters in which he defended Starry night against his brother (2)
      “Anyway, you’ll see that there’s already more character in a large landscape with pines, red ochre trunks defined by a black line than in the previous ones.” - can be referred to Starry night too, since it was drawn with long lines.
    </Typography>
    <Typography paragraph>
      8. To Emile Bernard. Saint-Rémy-de-Provence, on or about Tuesday, 26 November 1889. (letter 822)
      “However, once again I’m allowing myself to do stars too big, , new setback, and I’ve enough of that.”
      Now he is a bit negative about his work, “Starry night” but maybe he has a bit of influence because he cannot be that direct as with his brother? Or maybe he just changed his opinion on that matter.
    </Typography>
	  <Card data={letters}/>
    </main>
  )
}

export default Letters