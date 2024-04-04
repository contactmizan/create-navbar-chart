import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Basic",
            "price": 30,
            "features": [
                "Access to cardio machines",
                "Access to weightlifting area",
                "Access to locker rooms",
                "Limited group classes"
            ]
        },
        {
            "id": 2,
            "name": "Standard",
            "price": 50,
            "features": [
                "Access to cardio machines",
                "Access to weightlifting area",
                "Access to locker rooms",
                "Unlimited group classes",
                "Access to sauna"
            ]
        },
        {
            "id": 3,
            "name": "Premium",
            "price": 80,
            "features": [
                "Access to cardio machines",
                "Access to weightlifting area",
                "Access to locker rooms",
                "Unlimited group classes",
                "Access to sauna",
                "Access to swimming pool",
                "Personal trainer sessions (2 per month)"
            ]
        },
        {
            "id": 4,
            "name": "VIP",
            "price": 120,
            "features": [
                "Access to cardio machines",
                "Access to weightlifting area",
                "Access to locker rooms",
                "Unlimited group classes",
                "Access to sauna",
                "Access to swimming pool",
                "Personal trainer sessions (4 per month)",
                "Nutritional counseling",
                "Towel service"
            ]
        }
    ]


    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the town</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
}

export default PriceOptions;