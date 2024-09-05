import {data} from "../restApi.json"

const Menu = () => {
  return (
   <section className="menu" id='menu'>
    <div className="container">
        <div className="heading_section">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, facilis commodi animi doloremque eos veniam?</p>
        </div>
        <div className="dishes_container">
            {
                data[0].dishes.map(element => {
                    return(
                        <div className="card" key={element.id}>
                            <img src={element.image} alt={element.title} />
                            <h3>{element.category}</h3>
                        </div>
                    )
                })
            }
        </div>
    </div>
   </section>
  )
}

export default Menu