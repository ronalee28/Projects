import Flight from './Flight'

export default function AllFlights(props) {
  return (
    <div className='allflight'>
        {props.allFlights.map((val,index)=>{
            return <Flight val={val} key={index}/>
        })}
    </div>
  )
}