import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div className='w-full h-full flex items-center justify-center flex-col space-y-10'>
      <LinkButton to="/menu"> Back to menu</LinkButton>

      <p className='font-semibold'>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
