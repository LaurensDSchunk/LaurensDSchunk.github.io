import './Technologies.scss';

function Technology({ img, name }) {
  
  return (
    <div className='technology'>
      <div className='icon'>
        <img src={img} alt={name} />
      </div>
      <h1>{name}</h1>
    </div>
  )
}

export default Technology