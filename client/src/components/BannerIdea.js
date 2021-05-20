import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";


export default function BannerIdea(props) {

  const array = ["Diversity", "Opportunity", "Growth", "Equality", "Understanding", "Unity", "Possibility", "Compassion"]

  return (

    
<div style={{ height: "300px", backgroundColor: props.color}}>
  <Marquee velocity={20} minScale={0.7} resetAfterTries={200} scatterRandomly>
    {array.map((id) => (
      <Motion
        key={`child-${id}`}
        initDeg={randomIntFromInterval(0, 360)}
        direction={Math.random() > 0.5 ? "clockwise" : "counterclockwise"}
        velocity={10}
        radius={50}
      >
        <div
          style={{
            color: "#954e8b",
            // textShadow: props.color,
            // padding: "2rem",
            // width: "auto",
            // height: "auto",
            // borderRadius: "50%",
            // backgroundColor: "white",
            textAlign: "center",
            lineHeight: "50px",
            fontSize: "2rem"
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