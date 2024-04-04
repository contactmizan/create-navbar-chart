import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className=' bg-slate-600 rounded-lg p-6 flex flex-col'>
            <h2 className="text-center">
                <span className='text-7xl font-extrabold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl my-8 text-center'>{name}</h4>
            <div className='pl-6 flex-grow'>
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>
            <button className='mt-12 bg-green-600 w-full py-2 rounded-lg font-bold hover:bg-green-700'>But Now</button>
        </div>
    );
}

PriceOption.propTypes = {
    option: PropTypes.object
}
export default PriceOption;