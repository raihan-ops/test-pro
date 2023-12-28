export const metadata = {
    title: "Login",
    description: "Login page",
}

const LoginLayout = ({children}) => {
    return <div className="w-full h-screen flex justify-center items-center">
        {children}
    </div>
};

export default LoginLayout;