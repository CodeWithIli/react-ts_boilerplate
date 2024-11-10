interface ButtonProps {
	children: React.ReactNode
}

const Button = ({children}) => {
  return <button>{children}</button>;
};

export default Button;
