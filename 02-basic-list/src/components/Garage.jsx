import Car from './Car';

function Garage() {
    const cars = [
        {id: 1, brand: 'Ford'},
        {id: 2, brand: 'BMW'},
        {id: 3, brand: 'Audi'}
    ];
    return (
        <>  
            <div>
            <h1>Car brand lists</h1>
                <ul>
                    {cars.map((car) => <Car brand={car.brand} key={car.id} />)}
                </ul>
            </div>
        </>
      
    );
}

export default Garage;