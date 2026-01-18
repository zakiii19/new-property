const Button = (props) => {
    const { children, icon : Icon, type} = props;
    return (
      <button class="cursor-pointer h-10 w-full inline-flex items-center gap-2 justify-center bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
        type={type}>
          {Icon && <Icon/>}
          {children}
        </button>
    );
  };
  
  export default Button;