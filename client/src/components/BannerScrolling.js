import './BannerScrolling.css'

const BannerScrolling = (props) => {

  return (
    <>
      <div className="bannerWrapper">
        
        <div style={{
        position: 'relative',
        width: '90%',
        left: '5%',
        right: '5%',
        borderBottom: '1px solid',
        borderColor: props.color
        }} ></div>
      
        <p className="marquee"
          style={{backgroundColor: props.backgroundColor}}>
          <span><h1 style={{color: props.color}}>{props.text}</h1></span>
          </p>
        <p className="marquee marquee2">
        <span><h1 style={{color: props.color}}>{props.text}</h1></span>
        </p>
        <div style={{
        transform: 'translateY(100px)',
        position: 'relative',
        width: '90%',
        left: '5%',
        right: '5%',
        borderTop: '1px solid',
        borderColor: props.color
        }} ></div>
      </div>
      
    </>
  )
};

export default BannerScrolling