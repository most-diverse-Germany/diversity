import './BannerScrolling.css'

const BannerScrolling = (props) => {

  return (
    <>    
      <div>
        <p className="marquee"
          style={{
            backgroundColor: props.backgroundColor,
            borderBottom: "3px solid",
            borderTop: '3px solid',
            borderColor: props.color
          }}>
          <span><h1 style={{color: props.color}}>{props.text}</h1></span>
          </p>
        <p className="marquee marquee2">
        <span><h1 style={{color: props.color}}>{props.text}</h1></span>
        </p>
      </div>
    </>
  )
};

export default BannerScrolling;