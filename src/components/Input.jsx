const Input = ({type, placeholder}) => {
    return ( 
        <input type={type} className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#75789]' placeholder={placeholder} />
    );
}
 
export default Input;