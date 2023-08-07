import Header from "./layouts/Header.jsx";

// eslint-disable-next-line react/prop-types
export default function Layout({children}) {
    return (
        <>
            <Header>{children}</Header>
        </>
    )
}