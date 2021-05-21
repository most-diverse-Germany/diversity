import Marquee, { Motion, randomIntFromInterval } from 'react-marquee-slider'

export default function BannerIdea() {
  const array = [
    'Diversity',
    'Opportunity',
    'Growth',
    'Equality',
    'Understanding',
    'Unity',
    'Possibility',
    'Compassion',
  ]

  return (
    <div style={{ height: '350px' }}>
      <Marquee
        velocity={20}
        minScale={0.7}
        resetAfterTries={200}
        scatterRandomly
      >
        {array.map((id) => (
          <Motion
            key={`child-${id}`}
            initDeg={randomIntFromInterval(0, 360)}
            direction={Math.random() > 0.5 ? 'clockwise' : 'counterclockwise'}
            velocity={10}
            radius={50}
          >
            <div
              style={{
                color: '#954e8b',
                textShadow: '0px 5px 10px #f7a559',
                textAlign: 'center',
                lineHeight: '50px',
                fontSize: '1rem',
              }}
            >
              {id}
            </div>
          </Motion>
        ))}
      </Marquee>
    </div>
  )
}
