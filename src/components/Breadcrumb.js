import { useLocation, Link } from "react-router-dom"

const Breadcrumb = () => {

    const { pathname } = useLocation();
    const paths = pathname.split('/').filter(x => x);
    let breadcrumbPath = "";
    return (
        <div className="breadcrumbs">

            {
                paths.length > 0 && <span><Link to='/'>Home</Link></span>
            }
            {
                paths?.map((path, index) => {
                    breadcrumbPath += `/${path}`;
                    return (index !== paths.length - 1) ? <span key={breadcrumbPath}>/ <Link to={breadcrumbPath}>{path}</Link></span> : <span key={breadcrumbPath}>/ {path}</span>

                })
            }
        </div>
    )
}

export default Breadcrumb
